from ultralytics import YOLO
from torchviz import make_dot
import torch

# Load your YOLOv8 model
model_path = "aquagrade_pkg/models/saved/final/AquaGrade-v1.0.3.pt"
model = YOLO(model_path)

# Print model summary
print(model.model)