from pathlib import Path

files = [
    'src/components/Contact.js',
    'src/components/Footer.js',
    'src/components/Navbar.js',
    'src/components/Projects.js'
]

for f in files:
    p = Path(f)
    if not p.exists():
        print('missing', f)
        continue
    b = p.read_bytes()
    # UTF-8 BOM
    bom = b"\xef\xbb\xbf"
    if b.startswith(bom):
        p.write_bytes(b[len(bom):])
        print('stripped BOM from', f)
    else:
        print('no BOM in', f)
