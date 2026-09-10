from PIL import Image

# Use the perfectly clean shirt image
base_img_path = r"C:\Users\AKASH\.gemini\antigravity-ide\brain\d9ed3c7b-c459-4513-9c26-c1818a9ddded\phone_repair_plain_shirt_1788866826030.jpg"
logo_path = r"D:\CSS_Founder\Demo-ai-builder\repairhub\public\RepairHub_Logo_Light.png"
output_path = r"D:\CSS_Founder\Demo-ai-builder\repairhub\public\phone_repair_main.jpg"

base = Image.open(base_img_path).convert("RGBA")
logo = Image.open(logo_path).convert("RGBA")

# Resize logo to 25% of image width
target_width = int(base.width * 0.25)
aspect_ratio = logo.height / logo.width
target_height = int(target_width * aspect_ratio)
logo = logo.resize((target_width, target_height), Image.Resampling.LANCZOS)

# Rotate slightly to match shoulder angle
logo = logo.rotate(-5, expand=True)

# Make it look more "real" by reducing opacity slightly so it blends with the dark shirt
r, g, b, a = logo.split()
a = a.point(lambda p: p * 0.90)  # 90% opacity
logo.putalpha(a)

# Position it on the right chest
x_offset = int(base.width * 0.68)
y_offset = int(base.height * 0.35)

# Paste using the logo's alpha channel as the mask
base.paste(logo, (x_offset, y_offset), logo)

# Save the final image to the public folder
base.convert("RGB").save(output_path, "JPEG", quality=95)

print(f"Created highly realistic final image at {output_path}")
