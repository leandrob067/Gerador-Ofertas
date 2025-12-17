from fastapi import FastAPI, Form, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from jinja2 import Environment, FileSystemLoader
from .render_card import render_card
import uuid, os

app = FastAPI()
BASE = os.path.dirname(__file__)
env = Environment(loader=FileSystemLoader(os.path.join(BASE, "templates")))

app.mount("/generated", StaticFiles(directory=os.path.join(BASE, "generated")), name="generated")

@app.get("/", response_class=HTMLResponse)
def home():
    return env.get_template("index.html").render()

@app.post("/generate", response_class=HTMLResponse)
def generate(links: str = Form(...)):
    results = []
    for link in links.splitlines():
        if not link.strip():
            continue
        fid = str(uuid.uuid4())[:8]
        img = f"card_{fid}.png"
        render_card(os.path.join(BASE, "generated", img), link)
        results.append({"link": link, "img": img})
    return env.get_template("results.html").render(results=results)
