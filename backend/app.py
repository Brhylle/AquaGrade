from flask import Flask, request, jsonify
from flask_cors import CORS
import torch
from ultralytics import YOLO
import torchvision.transforms as transforms
from PIL import Image
import io
import os

app = Flask(__name__)
# Update with your React app's URL
CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173"}})

# Define constants
MODEL_PATH = './runs/detect/HOOKitModel-pre-v0.3/weights/HOOKit-pre-v0.3-best.pt'
DEVICE = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

# Define your class labels
CLASS_LABELS = {
    0: "galunggong",
    1: "tilapia",
    2: "bangus"
}

# Load the YOLO model
try:
    if not os.path.exists(MODEL_PATH):
        raise FileNotFoundError(f"Model file not found at {MODEL_PATH}")
    print(f"Loading model from: {MODEL_PATH}")
    model = YOLO(MODEL_PATH)
    # Try to validate the model
    dummy_image = torch.zeros((1, 3, 640, 640))  # Create a dummy input
    model(dummy_image)  # Test inference
    print("Model loaded and validated successfully!")
except FileNotFoundError as e:
    print(f"File error: {e}")
    raise
except Exception as e:
    print(f"Error loading model: {e}")
    print("Please ensure the model file is a valid YOLO model exported properly")
    raise

@app.route('/api/scan-fish', methods=['POST'])
def scan_fish():
    try:
        # Get image from request
        image_file = request.files['image']
        image_bytes = image_file.read()
        image = Image.open(io.BytesIO(image_bytes)).convert('RGB')
        
        # Run inference
        results = model(image)
        result = results[0]  # Get first result
        
        # Process results
        if len(result.boxes) > 0:
            # Get the prediction with highest confidence
            confidence = float(result.boxes.conf[0])
            class_id = int(result.boxes.cls[0])
            
            # Add freshness detection logic
            freshness_score = calculate_freshness(image)  # You'll need to implement this
            freshness_status = get_freshness_status(freshness_score)  # And this
            
            return jsonify({
                "fish_type": CLASS_LABELS.get(class_id, "Unknown"),
                "confidence": f"{confidence * 100:.2f}%",
                "freshness": {
                    "status": freshness_status,
                    "score": freshness_score
                }
            })
        else:
            return jsonify({
                "fish_type": "No fish detected",
                "confidence": "0%",
                "freshness": {
                    "status": "Unknown",
                    "score": 0
                }
            })

    except Exception as e:
        print(f"Error during inference: {e}")
        return jsonify({'error': str(e)}), 500

def calculate_freshness(image):
    # Implement your freshness detection logic here
    # This is a placeholder - you'll need to implement actual freshness detection
    return 0.85  # Example score between 0 and 1

def get_freshness_status(score):
    if score >= 0.8:
        return "Fresh"
    elif score >= 0.6:
        return "Moderately Fresh"
    else:
        return "Not Fresh"

if __name__ == '__main__':
    app.run(debug=True, port=5000)