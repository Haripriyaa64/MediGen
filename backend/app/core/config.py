

from dotenv import load_dotenv
import os

load_dotenv()

HF_TOKEN = os.getenv("HF_TOKEN")
MODEL_ID = os.getenv("MODEL_ID")

print("HF_TOKEN:", repr(HF_TOKEN))
print("MODEL_ID:", repr(MODEL_ID))