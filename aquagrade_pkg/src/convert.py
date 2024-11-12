

import torch
import os

PROJECT_PATH = os.path.abspath(os.getcwd())

model = f""

print(PROJECT_PATH)
# # Assuming your trained model is in `model`
# traced_model = torch.jit.trace(model, torch.randn(1, 3, 640, 640))  # Adjust the input shape if needed
# torch.jit.save(traced_model, "model.pt")