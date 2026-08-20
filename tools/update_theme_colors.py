import re
from pathlib import Path

root = Path(__file__).resolve().parent.parent
file_exts = {'.css', '.js', '.jsx', '.html'}
exclude_dirs = {'build', 'node_modules', '.git', 'tools'}

replacements = [
    # Accent rgba mapping
    (re.compile(r'rgba\(138,\s*43,\s*226,\s*([0-9.]+)\)', re.I), r'rgba(198, 255, 0, \1)'),
    (re.compile(r'rgba\(0,\s*191,\s*255,\s*([0-9.]+)\)', re.I), r'rgba(232, 255, 128, \1)'),

    # Accent hex mapping
    (re.compile(r'#8a2be2\b', re.I), '#C6FF00'),
    (re.compile(r'#00bfff\b', re.I), '#E8FF80'),
    (re.compile(r'#8b5cf6\b', re.I), '#C6FF00'),
    (re.compile(r'#61dafb\b', re.I), '#C6FF00'),
    (re.compile(r'#68a063\b', re.I), '#C6FF00'),
    (re.compile(r'#264de4\b', re.I), '#C6FF00'),
    (re.compile(r'#e34c26\b', re.I), '#C6FF00'),
    (re.compile(r'#f0db4f\b', re.I), '#C6FF00'),
    (re.compile(r'#f34f29\b', re.I), '#C6FF00'),
    (re.compile(r'#007acc\b', re.I), '#C6FF00'),
    (re.compile(r'#a259ff\b', re.I), '#C6FF00'),
    (re.compile(r'#ff6b6b\b', re.I), '#C6FF00'),
    (re.compile(r'#0077b5\b', re.I), '#C6FF00'),
    (re.compile(r'#25d366\b', re.I), '#C6FF00'),
    (re.compile(r'#ea4335\b', re.I), '#C6FF00'),
    (re.compile(r'#1da1f2\b', re.I), '#C6FF00'),
    (re.compile(r'#1769ff\b', re.I), '#C6FF00'),
    (re.compile(r'#f09433\b', re.I), '#C6FF00'),
    (re.compile(r'#e6683c\b', re.I), '#C6FF00'),
    (re.compile(r'#dc2743\b', re.I), '#C6FF00'),
    (re.compile(r'#cc2366\b', re.I), '#C6FF00'),
    (re.compile(r'#bc1888\b', re.I), '#C6FF00'),
    (re.compile(r'#ffd700\b', re.I), '#C6FF00'),
]


def should_skip(path: Path) -> bool:
    return any(part in exclude_dirs for part in path.parts)

changed_files = []
for path in sorted(root.rglob('*')):
    if path.is_file() and path.suffix.lower() in file_exts and not should_skip(path):
        text = path.read_text(encoding='utf-8')
        new_text = text
        for pattern, repl in replacements:
            new_text = pattern.sub(repl, new_text)
        if new_text != text:
            path.write_text(new_text, encoding='utf-8')
            changed_files.append(path.relative_to(root))

print('Updated files:')
for p in changed_files:
    print(p)
print(f'Total files updated: {len(changed_files)}')
