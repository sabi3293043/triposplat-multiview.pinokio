import os
import runpy
import sys

import gradio as gr


def _patch_launch():
    original_launch = gr.Blocks.launch

    def launch(self, *args, **kwargs):
        kwargs["server_name"] = os.environ.get("GRADIO_SERVER_NAME", "127.0.0.1")
        if os.environ.get("GRADIO_SERVER_PORT"):
            kwargs["server_port"] = int(os.environ["GRADIO_SERVER_PORT"])
        return original_launch(self, *args, **kwargs)

    gr.Blocks.launch = launch


if __name__ == "__main__":
    sys.path.insert(0, os.getcwd())
    _patch_launch()
    runpy.run_path("run_gradio.py", run_name="__main__")
