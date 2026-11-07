import re
from collections import Counter

with open('wisprflow.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Title
title_match = re.search(r'<title>(.*?)</title>', html, re.IGNORECASE)
print('Title:', title_match.group(1) if title_match else '')

# Fonts
font_links = re.findall(r'<link[^>]+fonts[^>]+>', html, re.IGNORECASE)
print('Font links:', font_links[:5])

# CSS text
css_matches = re.findall(r'<style[^>]*>(.*?)</style>', html, re.DOTALL | re.IGNORECASE)
all_css = '\n'.join(css_matches)

# Look for font-family
font_families = re.findall(r'font-family\s*:\s*([^;}\"\']+)', all_css + html, re.IGNORECASE)
clean_fonts = set([f.strip() for f in font_families if len(f.strip()) < 40])
print('Sample font families:', list(clean_fonts)[:10])

# Headings
h1s = re.findall(r'<h1[^>]*>(.*?)</h1>', html, re.DOTALL | re.IGNORECASE)
print('H1s:', [re.sub(r'<[^>]+>', '', h).strip() for h in h1s[:5]])

h2s = re.findall(r'<h2[^>]*>(.*?)</h2>', html, re.DOTALL | re.IGNORECASE)
print('H2s:', [re.sub(r'<[^>]+>', '', h).strip() for h in h2s[:8]])

# Colors
colors = re.findall(r'#[0-9a-fA-F]{6}', html)
print('Top hex colors:', Counter(colors).most_common(20))
