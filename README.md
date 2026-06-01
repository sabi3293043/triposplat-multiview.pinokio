# TripoSplat Pinokio Launcher

This launcher installs and runs [TripoSplat](https://github.com/VAST-AI-Research/TripoSplat), an image-to-3D Gaussian splat generator from VAST-AI-Research and TripoAI.

## Requirements

- CUDA-capable NVIDIA GPU. The upstream demo hardcodes `device="cuda"`.
- Python dependencies are installed into the launcher-managed `env` virtual environment.
- Model weights are downloaded from `VAST-AI/TripoSplat` on Hugging Face into `app/ckpts`.
- Plan for roughly 4 GB for model weights, plus the cloned app, Python packages, generated `gradio_outputs`, and caches.

TripoSplat does not currently expose an official low-VRAM launch flag. The Gradio UI can lower the generated Gaussian count from `262144` down to `32768`, which reduces output density and rendering cost after the model is loaded.

## Usage

1. Click **Install** to clone the upstream repository, install dependencies, install PyTorch, and download checkpoints.
2. Click **Start** to launch the Gradio web UI.
3. Upload an image or choose one of the bundled examples.
4. Choose the number of Gaussians and output format, then click **Generate**.

Generated files are saved under `app/gradio_outputs`.

## API Usage

The launcher starts TripoSplat's Gradio UI. Use the local URL shown by Pinokio after **Start** as `BASE_URL`.

### JavaScript

```javascript
const baseUrl = "BASE_URL";
const response = await fetch(`${baseUrl}/`);
console.log(await response.text());
```

### Python

```python
import requests

base_url = "BASE_URL"
response = requests.get(base_url, timeout=30)
print(response.status_code)
```

### Curl

```bash
curl BASE_URL/
```

For generation automation, inspect the running Gradio app's API view after launch because upstream currently ships a UI-first demo rather than a documented stable REST contract.
