# rewrap1176.py - word-wrap a batch's quote (3 lines <= 60) and panel lines (2 lines <= 58) in place, for gen1176+.
# Only re-breaks lines between words; never drops words. Lines that still do not fit are left for the gen's assert.
import textwrap
def _wrap(lines, n, width):
    joined = ' '.join(l.strip() for l in lines if l is not None)
    out = textwrap.wrap(joined, width=width, break_long_words=False, break_on_hyphens=False)
    if len(out) <= n:
        return out + [''] * (n - len(out))
    # try a balanced wrap at a slightly smaller width so the tail is not a single word
    for w in range(width, width - 12, -1):
        out = textwrap.wrap(joined, width=w, break_long_words=False, break_on_hyphens=False)
        if len(out) <= n:
            return out + [''] * (n - len(out))
    return list(lines)
def rewrap(B):
    for b in B:
        b['quote'] = _wrap(b['quote'], 3, 60)
        b['panels'] = [(h, _wrap(ls, 2, 58), acc) for (h, ls, acc) in b['panels']]
        b['close'] = _wrap(b['close'], 2, 60)
