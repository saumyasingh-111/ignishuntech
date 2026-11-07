import re

with open('wisprflow.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Look for css links
css_links = re.findall(r'<link[^>]+rel=["\']stylesheet["\'][^>]+>', html, re.IGNORECASE)
for link in css_links:
    print('CSS Link:', link)

# Look for nav section
nav_match = re.search(r'<header[^>]*>(.*?)</header>', html, re.DOTALL | re.IGNORECASE)
if nav_match:
    print('\nHeader text preview:\n', re.sub(r'<[^>]+>', ' ', nav_match.group(1))[:400])

# Look at main sections
sections = re.findall(r'<section[^>]*>(.*?)</section>', html, re.DOTALL | re.IGNORECASE)
print(f'\nFound {len(sections)} sections.')
for i, sec in enumerate(sections[:8]):
    text = re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', ' ', sec)).strip()
    print(f'Section {i+1}: {text[:150]}...')
