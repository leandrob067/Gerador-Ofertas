from PIL import Image, ImageDraw, ImageFont
import qrcode, os

def render_card(path, link):
    img = Image.new("RGB", (1080,1350), (20,20,20))
    d = ImageDraw.Draw(img)
    f = ImageFont.load_default()

    d.text((60,60), "🔥 OFERTA DO DIA", fill="white", font=f)
    d.text((60,140), "👉 Link aqui", fill="white", font=f)
    d.text((60,200), "⚠️ Preço pode mudar a qualquer momento", fill="white", font=f)
    d.text((60,260), "@alertadeofertasbr", fill="white", font=f)

    qr = qrcode.make(link).resize((200,200))
    img.paste(qr, (800,1050))

    os.makedirs(os.path.dirname(path), exist_ok=True)
    img.save(path)
