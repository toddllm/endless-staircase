#!/usr/bin/env python3
"""names1176.py - list (beat, screenshot number, slug, key) for the 1176-1273 batch; shared by capture/changelog/wiki steps."""
import importlib.util, re, json, sys
T = '/Users/tdeshane/endless-staircase/tools/'
TAGS = ['1176', '1195', '1209', '1218', '1226', '1244', '1267']
def slug(key):
    s = key.lower().replace('%', ' percent ').replace('’', '').replace("'", '').replace('“', '').replace('”', '').replace('"', '')
    s = re.sub(r'[^a-z0-9]+', '-', s).strip('-')
    return s
def beats():
    out = []
    for t in TAGS:
        spec = importlib.util.spec_from_file_location('g' + t, T + 'gen%s.py' % t)
        g = importlib.util.module_from_spec(spec); spec.loader.exec_module(g)
        for i, b in enumerate(g.B):
            n = g.BASE + i
            out.append(dict(beat=n, shot=n + 63, slug=slug(b['key']), key=b['key'], day=b['day'], when=b['when'], card=b['card'], tag=t, start=g.START + g.STEP * i))
    return out
if __name__ == '__main__':
    bs = beats()
    if len(sys.argv) > 1 and sys.argv[1] == 'json': print(json.dumps(bs, ensure_ascii=False, indent=1))
    else:
        for b in bs: print(b['beat'], b['shot'], b['slug'])
