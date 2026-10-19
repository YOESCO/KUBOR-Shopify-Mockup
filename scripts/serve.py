from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
import os
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parent.parent

class PreviewHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def log_message(self, *_args):
        pass

    def do_GET(self):
        parts = Path(unquote(urlsplit(self.path).path)).parts
        if any(part.startswith('.') or part == 'node_modules' for part in parts if part != '/'):
            self.send_error(404)
            return
        super().do_GET()

if __name__ == '__main__':
    port = int(os.environ.get('KUBOR_PREVIEW_PORT', '4173'))
    print(f'KUBOR preview: http://127.0.0.1:{port}', flush=True)
    ThreadingHTTPServer(('127.0.0.1', port), PreviewHandler).serve_forever()
