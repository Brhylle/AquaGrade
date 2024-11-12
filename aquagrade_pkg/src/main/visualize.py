from ultralytics import YOLO
import visualkeras

# Load your YOLOv8 model
model_path = "aquagrade_pkg/models/saved/final/AquaGrade-v1.0.3.pt"
model = YOLO(model_path)

# Print model summary
print(model.model)


# Visualize the model
# Visualize and save the model as an image
visualkeras.layered_view(model).save("yolov8_model_visualization.png")
