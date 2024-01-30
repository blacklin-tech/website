from PIL import Image
import os

def convert_png_to_webp(directory, quality=90, lossless=False, resize=None):
    for filename in os.listdir(directory):
        if filename.endswith(".png"):
            file_path = os.path.join(directory, filename)
            with Image.open(file_path) as img:
                # Optionally resize
                if resize:
                    img = img.resize(resize, Image.Resampling.LANCZOS)

                webp_filename = f"{os.path.splitext(filename)[0]}.webp"
                webp_path = os.path.join(directory, webp_filename)

                # Save with specified quality and lossless parameters
                img.save(webp_path, "WEBP", quality=quality, lossless=lossless)

    print("Conversion complete!")

# Usage example
convert_png_to_webp('../', quality=85, lossless=False)
