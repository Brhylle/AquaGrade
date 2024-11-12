import torch
import os
from ultralytics import YOLO

PROJECT_PATH = os.getcwd()
model_path = os.path.join(PROJECT_PATH, "aquagrade_pkg", "models", "saved", "final", "AquaGrade-v1.0.3.pt")


# Load the trained YOLOv8 model
model = YOLO(model_path)  # Update with your model path

# Export to TorchScript format
model.export(format="torchscript", imgsz=(640, 640))  # Set image size if needed
