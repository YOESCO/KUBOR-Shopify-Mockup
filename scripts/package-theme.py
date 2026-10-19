from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
import hashlib
import json

root = Path(__file__).resolve().parent.parent
theme = root / 'theme'
output = root / 'dist'
output.mkdir(exist_ok=True)
archive = output / 'KUBOR-Ride-Beyond-1.0.0.zip'
allowed = {'assets', 'blocks', 'config', 'layout', 'locales', 'sections', 'snippets', 'templates'}
files = sorted(p for p in theme.rglob('*') if p.is_file() and p.relative_to(theme).parts[0] in allowed)
with ZipFile(archive, 'w', compression=ZIP_DEFLATED, compresslevel=9) as target:
    for file in files:
        target.write(file, file.relative_to(theme))
with ZipFile(archive) as target:
    assert target.testzip() is None
    assert 'layout/theme.liquid' in target.namelist()
    assert not any(name.startswith(('preview/', 'node_modules/')) for name in target.namelist())
digest = hashlib.sha256(archive.read_bytes()).hexdigest()
manifest = {'artifact': archive.name, 'files': len(files), 'bytes': archive.stat().st_size, 'sha256': digest}
(output / 'manifest.json').write_text(json.dumps(manifest, indent=2) + '\n')
print(json.dumps(manifest, indent=2))
