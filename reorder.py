import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# We will use regex to extract the sections.
# Pattern matches <!-- Optional Comment --> \n <section id="XYZ"...> </section>
# But regex with HTML is risky. Let's just use string slicing based on exact known strings.

# Find boundaries
amenities_start = content.find('<!-- Amenities Section -->')
if amenities_start == -1: amenities_start = content.find('<section id="amenities"')

location_end = content.find('</section>', content.find('<section id="location"')) + len('</section>\n')

floor_plans_start = content.find('<!-- Master Plan & Floor Plans -->')
if floor_plans_start == -1: floor_plans_start = content.find('<section id="floor-plans"')

gallery_end = content.find('</section>', content.find('<section id="gallery"')) + len('</section>\n')

# Sections:
# A: Everything before Amenities
# B: Amenities + Location
# C: Floor Plans + Gallery
# D: Everything after Gallery

part_A = content[:amenities_start]
part_B = content[amenities_start:floor_plans_start] # Assuming floor-plans comes right after location
part_C = content[floor_plans_start:gallery_end]
part_D = content[gallery_end:]

# But wait, there might be spacing or other sections.
# Let's verify the actual chunks
print(f"part_B starts with: {part_B[:50].strip()}")
print(f"part_B ends with: {part_B[-50:].strip()}")

print(f"part_C starts with: {part_C[:50].strip()}")
print(f"part_C ends with: {part_C[-50:].strip()}")

# The new sequence should be A + C + B + D
new_content = part_A + part_C + "\n\n" + part_B + part_D

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Reordering complete.")
