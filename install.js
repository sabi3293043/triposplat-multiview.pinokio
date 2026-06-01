module.exports = {
  requires: {
    bundle: "ai"
  },
  run: [
    {
      when: "{{!exists('app')}}",
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/VAST-AI-Research/TripoSplat.git app"
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: "app",
        message: [
          "uv pip install -U pip setuptools wheel",
          "uv pip install numpy safetensors pillow tqdm gradio sympy networkx jinja2 fsspec filelock"
        ]
      }
    },
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv: "env",
          path: "app"
        }
      }
    },
    {
      method: "hf.download",
      params: {
        path: "app",
        _: ["VAST-AI/TripoSplat"],
        "local-dir": "ckpts"
      }
    }
  ]
}
