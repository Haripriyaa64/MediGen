from pathlib import Path
import fitz
import easyocr
from PIL import Image
import numpy as np

reader = easyocr.Reader(
    ["en"],
    gpu=False,
)


def extract_from_image(image_path: str) -> str:

    image = Image.open(image_path)

    image = np.array(image)

    result = reader.readtext(
        image,
        detail=0,
        paragraph=True,
    )

    return "\n".join(result)


def extract_from_pdf(pdf_path: str) -> str:

    doc = fitz.open(pdf_path)

    text = ""

    for page in doc:

        pix = page.get_pixmap(
            dpi=300
        )

        temp = Path("uploads/temp_page.png")

        pix.save(temp)

        page_text = extract_from_image(
            str(temp)
        )

        text += page_text + "\n"

        temp.unlink(
            missing_ok=True
        )

    doc.close()

    return text


def extract_text(file_path: str):

    suffix = Path(file_path).suffix.lower()

    if suffix == ".pdf":

        return extract_from_pdf(
            file_path
        )

    return extract_from_image(
        file_path
    )