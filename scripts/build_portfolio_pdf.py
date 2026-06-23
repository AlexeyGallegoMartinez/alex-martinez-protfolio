from pathlib import Path
import math
import textwrap

from PIL import Image, ImageDraw, ImageFont, ImageOps


ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "public"
QA_DIR = ROOT / "tmp" / "portfolio-pdf-pages"
PDF_PATH = OUT_DIR / "Alexey-Martinez-Portfolio.pdf"

W, H = 1700, 2200
M = 120

INK = "#111827"
MUTED = "#5f6673"
FAINT = "#8b93a1"
PAPER = "#f7f3ed"
CARD = "#ffffff"
LINE = "#ddd6cc"
ORANGE = "#f97316"
ORANGE_DARK = "#9a3412"
BLUE = "#2563eb"
GREEN = "#16a34a"
DARK = "#111827"
DARK_2 = "#1f2937"

FONT_DIR = Path("/System/Library/Fonts/Supplemental")
FONT_REG = FONT_DIR / "Arial.ttf"
FONT_BOLD = FONT_DIR / "Arial Bold.ttf"
FONT_BLACK = FONT_DIR / "Arial Black.ttf"
FONT_ITALIC = FONT_DIR / "Arial Italic.ttf"


def font(size, weight="regular"):
    path = {
        "regular": FONT_REG,
        "bold": FONT_BOLD,
        "black": FONT_BLACK,
        "italic": FONT_ITALIC,
    }[weight]
    return ImageFont.truetype(str(path), size=size)


F = {
    "kicker": font(22, "bold"),
    "tiny": font(24),
    "small": font(28),
    "small_bold": font(28, "bold"),
    "body": font(34),
    "body_bold": font(34, "bold"),
    "h3": font(40, "bold"),
    "h2": font(64, "bold"),
    "h1": font(96, "black"),
    "stat": font(48, "black"),
}


def new_page(bg=PAPER):
    return Image.new("RGB", (W, H), bg)


def draw_round(draw, box, radius=28, fill=CARD, outline=None, width=2):
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)


def text_size(draw, text, fnt):
    box = draw.textbbox((0, 0), text, font=fnt)
    return box[2] - box[0], box[3] - box[1]


def wrapped_lines(draw, text, fnt, max_width):
    words = text.split()
    lines = []
    current = ""

    for word in words:
        trial = word if not current else f"{current} {word}"
        if text_size(draw, trial, fnt)[0] <= max_width:
            current = trial
        else:
            if current:
                lines.append(current)
            current = word

    if current:
        lines.append(current)

    return lines


def draw_text(draw, xy, text, fnt, fill=INK, max_width=None, line_gap=10):
    x, y = xy
    if max_width is None:
        draw.text((x, y), text, font=fnt, fill=fill)
        return y + text_size(draw, text, fnt)[1]

    for line in wrapped_lines(draw, text, fnt, max_width):
        draw.text((x, y), line, font=fnt, fill=fill)
        y += text_size(draw, line, fnt)[1] + line_gap

    return y - line_gap


def draw_label(draw, x, y, text, color=ORANGE):
    draw.text((x, y), text.upper(), font=F["kicker"], fill=color)
    return y + 36


def draw_footer(draw, page_num):
    draw.line((M, H - 94, W - M, H - 94), fill="#e7ded2", width=2)
    draw.text((M, H - 66), "Alexey Martinez - Selected Portfolio", font=F["tiny"], fill=FAINT)
    page = f"{page_num}/5"
    draw.text((W - M - text_size(draw, page, F["tiny"])[0], H - 66), page, font=F["tiny"], fill=FAINT)


def load_image(rel):
    return Image.open(ROOT / rel).convert("RGB")


def fit_crop(img, box, anchor=(0.5, 0.5)):
    x1, y1, x2, y2 = box
    bw, bh = x2 - x1, y2 - y1
    iw, ih = img.size
    scale = max(bw / iw, bh / ih)
    nw, nh = math.ceil(iw * scale), math.ceil(ih * scale)
    img = img.resize((nw, nh), Image.Resampling.LANCZOS)
    left = int((nw - bw) * anchor[0])
    top = int((nh - bh) * anchor[1])
    return img.crop((left, top, left + bw, top + bh))


def fit_contain(img, box, bg=CARD):
    x1, y1, x2, y2 = box
    bw, bh = x2 - x1, y2 - y1
    canvas = Image.new("RGB", (bw, bh), bg)
    img = ImageOps.contain(img, (bw, bh), Image.Resampling.LANCZOS)
    canvas.paste(img, ((bw - img.width) // 2, (bh - img.height) // 2))
    return canvas


def paste_round(page, img, box, radius=34, outline=LINE):
    x1, y1, x2, y2 = box
    mask = Image.new("L", (x2 - x1, y2 - y1), 0)
    md = ImageDraw.Draw(mask)
    md.rounded_rectangle((0, 0, x2 - x1, y2 - y1), radius=radius, fill=255)
    page.paste(img, (x1, y1), mask)
    draw = ImageDraw.Draw(page)
    draw.rounded_rectangle(box, radius=radius, outline=outline, width=2)


def stat_card(draw, x, y, w, value, label, accent=ORANGE):
    draw_round(draw, (x, y, x + w, y + 150), radius=24, fill="#fffaf4", outline="#eadccb")
    draw.text((x + 26, y + 24), value, font=F["stat"], fill=accent)
    draw_text(draw, (x + 28, y + 94), label, F["small"], MUTED, max_width=w - 56, line_gap=6)


def project_block(draw, x, y, w, title, role, summary, bullets, accent=ORANGE):
    draw.text((x, y), title, font=F["h3"], fill=INK)
    y += 52
    draw.text((x, y), role.upper(), font=F["kicker"], fill=accent)
    y += 48
    y = draw_text(draw, (x, y), summary, F["small"], MUTED, max_width=w, line_gap=10) + 28
    for item in bullets:
        draw.ellipse((x, y + 12, x + 12, y + 24), fill=accent)
        y = draw_text(draw, (x + 28, y), item, F["small"], INK, max_width=w - 28, line_gap=8) + 18
    return y


def pill(draw, x, y, text, fill="#fff7ed", color=ORANGE_DARK):
    tw, th = text_size(draw, text, F["small_bold"])
    draw_round(draw, (x, y, x + tw + 38, y + 54), radius=26, fill=fill, outline=None)
    draw.text((x + 19, y + 12), text, font=F["small_bold"], fill=color)
    return x + tw + 52


def page_cover():
    page = new_page("#f8f4ee")
    draw = ImageDraw.Draw(page)

    hero = fit_crop(load_image("public/images/photos/image-3.jpg"), (0, 0, W, 690), anchor=(0.55, 0.52)).convert("RGBA")
    hero = Image.alpha_composite(
        hero,
        Image.new("RGBA", hero.size, (17, 24, 39, 118)),
    ).convert("RGB")
    page.paste(hero, (0, 0))
    draw.rectangle((0, 560, W, 700), fill="#f8f4ee")

    avatar = fit_crop(load_image("public/images/portrait.png"), (0, 0, 330, 360), anchor=(0.5, 0.3))
    paste_round(page, avatar, (W - M - 330, 430, W - M, 790), radius=40, outline="#c9b9a3")

    draw_label(draw, M, 760, "Selected portfolio")
    draw.text((M, 810), "Alexey", font=F["h1"], fill=INK)
    draw.text((M, 910), "Martinez", font=F["h1"], fill=INK)
    draw_text(
        draw,
        (M, 1045),
        "Systems builder working across software, AI, industrial automation, ERP, mobile products, and operations platforms.",
        F["body"],
        MUTED,
        max_width=920,
        line_gap=12,
    )

    x = M
    for item in ["Miami / South Florida", "English + Spanish", "On-site ready"]:
        x = pill(draw, x, 1205, item)

    stat_card(draw, M, 1320, 330, "70% to 95%", "Timesheet compliance", ORANGE)
    stat_card(draw, M + 360, 1320, 330, "50% to 90%", "Expense compliance", BLUE)
    stat_card(draw, M + 720, 1320, 330, "80% to 99%", "Process reliability", GREEN)
    stat_card(draw, M + 1080, 1320, 380, "1 day to 1-2h", "Receipt review time", ORANGE)

    draw_round(draw, (M, 1550, W - M, 1930), radius=34, fill=CARD, outline=LINE)
    draw.text((M + 42, 1590), "What this PDF is for", font=F["h3"], fill=INK)
    draw_text(
        draw,
        (M + 42, 1660),
        "A short evidence packet: not every project, not a resume rewrite. The focus is the work that shows ownership - business systems, operational software, mobile product thinking, AI workflow validation, and industrial automation under real constraints.",
        F["body"],
        MUTED,
        max_width=W - 2 * M - 84,
        line_gap=12,
    )
    draw_text(draw, (M + 42, 1842), "alexeygallegomartinez@gmail.com  |  github.com/AlexeyGallegoMartinez  |  linkedin.com/in/alexey-martinez", F["small"], INK, max_width=W - 2 * M - 84)

    draw_footer(draw, 1)
    return page


def page_business_systems():
    page = new_page()
    draw = ImageDraw.Draw(page)
    draw_label(draw, M, 96, "Business systems")
    draw.text((M, 142), "ERP and operations work", font=F["h2"], fill=INK)
    draw_text(
        draw,
        (M, 230),
        "The strongest pattern in the portfolio is not isolated screens. It is turning scattered business processes into systems people can run every day.",
        F["body"],
        MUTED,
        max_width=1260,
        line_gap=12,
    )

    erp = fit_crop(load_image("public/images/projects/erp.png"), (0, 0, 690, 380), anchor=(0.5, 0.35))
    tes = fit_crop(load_image("public/images/projects/tes.png"), (0, 0, 690, 380), anchor=(0.5, 0.35))
    paste_round(page, erp, (M, 390, M + 690, 770), radius=30)
    paste_round(page, tes, (W - M - 690, 390, W - M, 770), radius=30)

    project_block(
        draw,
        M,
        850,
        690,
        "Enterprise ERP System",
        "Technical Lead / Full-Stack Engineer",
        "Role-based ASP.NET and Angular ERP bringing daily work into one operational platform.",
        [
            "Leading architecture and delivery with a small engineering team.",
            "Consoles for employee, manager, admin, developer, purchaser, inventory, engineer, and receiving roles.",
            "Service logs, time cards, expenses, calendar, purchasing, receiving, inventory, parts, assembly, and support.",
        ],
        ORANGE,
    )

    project_block(
        draw,
        W - M - 690,
        850,
        690,
        "Internal Operations Platform",
        "Systems Builder / Full-Stack Engineer",
        "Company-wide React, Node, MSSQL, Docker, and Linux platform replacing spreadsheet-driven workflows.",
        [
            "Owned frontend, backend, database, auth, deployment, and day-to-day operation.",
            "Timesheets, expenses, events, deadlines, reporting, RBAC, reminders, and approvals.",
            "Improved timesheet compliance from about 70% to 95% and expense compliance from about 50% to 90%.",
        ],
        BLUE,
    )

    draw_round(draw, (M, 1765, W - M, 1985), radius=28, fill="#111827", outline=None)
    draw.text((M + 42, 1805), "Operating signal", font=F["h3"], fill="#ffffff")
    draw_text(
        draw,
        (M + 42, 1872),
        "The win is not a prettier dashboard. The win is a business that knows what is happening without another meeting, another spreadsheet, or another person manually checking the same thing twice.",
        F["small"],
        "#d1d5db",
        max_width=W - 2 * M - 84,
        line_gap=10,
    )
    draw_footer(draw, 2)
    return page


def page_product_ai():
    page = new_page()
    draw = ImageDraw.Draw(page)
    draw_label(draw, M, 96, "Product and AI")
    draw.text((M, 142), "Mobile MVPs and workflow validation", font=F["h2"], fill=INK)
    draw_text(
        draw,
        (M, 230),
        "This page shows product thinking: auth, feeds, maps, service discovery, API contracts, AI extraction, human review, and business-facing web surfaces.",
        F["body"],
        MUTED,
        max_width=1280,
        line_gap=12,
    )

    phone = fit_contain(load_image("public/images/projects/bridge.png"), (0, 0, 450, 980), bg="#f3f4f6")
    paste_round(page, phone, (M, 390, M + 450, 1370), radius=34)

    project_block(
        draw,
        M + 510,
        400,
        950,
        "Bridge: React Native social and services discovery app",
        "Mobile / Full-Stack Product Builder",
        "Private Expo/React Native MVP combining an authenticated social feed with map-based discovery for autism-related services.",
        [
            "Protected routes, JWT sessions, feed, post creation, comments, likes, and owner edit/delete flows.",
            "Services tab with city/radius/address search, map cards, Google Places search, and backend data contracts.",
            "Framed honestly as an MVP: useful product slice first, production hardening next.",
        ],
        BLUE,
    )

    receipt = fit_crop(load_image("public/images/projects/receipt-reader-mvp.png"), (0, 0, 515, 330), anchor=(0.5, 0.45))
    encore = fit_crop(load_image("public/images/projects/encore-website.png"), (0, 0, 515, 330), anchor=(0.45, 0.36))
    controls = fit_crop(load_image("public/images/projects/controls-tracker.png"), (0, 0, 515, 330), anchor=(0.5, 0.35))
    paste_round(page, receipt, (M, 1500, M + 515, 1830), radius=26)
    paste_round(page, encore, (M + 545, 1500, M + 1060, 1830), radius=26)
    paste_round(page, controls, (M + 1090, 1500, M + 1605, 1830), radius=26)

    labels = [
        ("AI receipt analysis", "Upload, OpenAI analysis, structured fields, and expense matching."),
        ("Encore website rebuild", "Responsive product storytelling, SEO, media, and contact flows."),
        ("Controls Tracker", "Workflow modeling for controls engineering visibility and execution."),
    ]
    for idx, (title, copy) in enumerate(labels):
        x = M + idx * 545
        draw.text((x, 1868), title, font=F["small_bold"], fill=INK)
        draw_text(draw, (x, 1910), copy, F["small"], MUTED, max_width=500, line_gap=8)

    draw_footer(draw, 3)
    return page


def page_industrial():
    page = new_page()
    draw = ImageDraw.Draw(page)
    draw_label(draw, M, 96, "Industrial automation")
    draw.text((M, 142), "Robotics, tooling, and process data", font=F["h2"], fill=INK)
    draw_text(
        draw,
        (M, 230),
        "Mechanical roots still matter. These projects connect software judgment with robot behavior, physical tooling, operators, validation, and production constraints.",
        F["body"],
        MUTED,
        max_width=1280,
        line_gap=12,
    )

    skive = fit_crop(load_image("public/images/projects/skive.png"), (0, 0, 870, 560), anchor=(0.52, 0.42))
    paste_round(page, skive, (M, 380, M + 870, 940), radius=34)
    project_block(
        draw,
        M + 930,
        390,
        530,
        "Robotic Sealing and Skiving Tool",
        "Product Development / Robotics Systems",
        "Patent-pending robotic sealing/skiving solution for automotive manufacturing.",
        [
            "Tooling, FANUC robot behavior, process validation, stakeholder demos, and plant support.",
            "Reduced sealing cycle time by about 50%.",
            "Deployed across multiple plants in the U.S. and Canada.",
        ],
        ORANGE,
    )

    uvcap = fit_crop(load_image("public/images/projects/uvcap.png"), (0, 0, 720, 470), anchor=(0.5, 0.45))
    industrial = fit_crop(load_image("public/images/projects/industrial-automation-platform.png"), (0, 0, 720, 470), anchor=(0.5, 0.45))
    paste_round(page, uvcap, (M, 1110, M + 720, 1580), radius=30)
    paste_round(page, industrial, (W - M - 720, 1110, W - M, 1580), radius=30)

    project_block(
        draw,
        M,
        1638,
        720,
        "Cap Analyzer (UV Sealer)",
        "Python Developer",
        "Desktop Python tool connected to a FANUC UV sealer robot.",
        [
            "Captured load-cell traces, pass/fail outcomes, and searchable batch history.",
            "Improved process reliability from about 80% to 99%.",
        ],
        GREEN,
    )

    project_block(
        draw,
        W - M - 720,
        1638,
        720,
        "Industrial Automation Platform",
        "Full-Stack Engineer",
        "Work-in-progress React/Node/Socket.IO platform for PLC and robot visibility.",
        [
            "Live tag monitoring, watched tags, websocket dashboards, and backend-owned device communication.",
            "Designed with safety boundaries: browser views, server-mediated controls.",
        ],
        BLUE,
    )

    draw_footer(draw, 4)
    return page


def page_close():
    page = new_page("#111827")
    draw = ImageDraw.Draw(page)

    draw_label(draw, M, 100, "Working style", ORANGE)
    draw.text((M, 150), "How I build", font=F["h2"], fill="#ffffff")
    draw_text(
        draw,
        (M, 250),
        "I work best where the problem is real, the users are close, and the system has to survive daily use.",
        F["body"],
        "#d1d5db",
        max_width=980,
        line_gap=12,
    )

    avatar = fit_crop(load_image("public/images/avatar.jpeg"), (0, 0, 320, 320), anchor=(0.5, 0.38))
    paste_round(page, avatar, (W - M - 320, 126, W - M, 446), radius=36, outline="#374151")

    items = [
        ("Start with the bottleneck", "Separate the business problem from the user pain before choosing a technology."),
        ("Build a useful slice", "Ship the smallest version that can prove whether the workflow is right."),
        ("Keep ownership visible", "Make roles, permissions, status, and next actions easy to see."),
        ("Measure what changed", "Compliance, reliability, review time, cycle time, uptime, and adoption matter more than feature count."),
        ("Use AI pragmatically", "Apply AI to speed analysis, testing, review, and implementation while keeping architecture decisions human-owned."),
    ]

    y = 455
    for idx, (title, copy) in enumerate(items, start=1):
        draw.text((M, y), f"{idx:02d}", font=F["h3"], fill=ORANGE)
        draw.text((M + 96, y), title, font=F["h3"], fill="#ffffff")
        y = draw_text(draw, (M + 96, y + 58), copy, F["small"], "#cbd5e1", max_width=1180, line_gap=8) + 48

    draw_round(draw, (M, 1445, W - M, 1790), radius=34, fill="#1f2937", outline="#374151")
    draw.text((M + 42, 1488), "Selected stack", font=F["h3"], fill="#ffffff")
    stacks = [
        "React", "Angular", "Next.js", "TypeScript", "Node.js", "Express",
        "ASP.NET Core", "SQL Server", "MongoDB", "Docker", "Linux", "Nginx",
        "GitHub Actions", "Expo", "React Native", "OpenAI", "FANUC", "Socket.IO",
    ]
    x, y = M + 42, 1560
    for item in stacks:
        tw, _ = text_size(draw, item, F["small_bold"])
        if x + tw + 42 > W - M - 42:
            x = M + 42
            y += 68
        draw_round(draw, (x, y, x + tw + 34, y + 48), radius=24, fill="#111827", outline="#374151")
        draw.text((x + 17, y + 10), item, font=F["small_bold"], fill="#e5e7eb")
        x += tw + 52

    draw.text((M, 1885), "Contact", font=F["h3"], fill="#ffffff")
    draw_text(
        draw,
        (M, 1950),
        "alexeygallegomartinez@gmail.com  |  github.com/AlexeyGallegoMartinez  |  linkedin.com/in/alexey-martinez",
        F["body"],
        "#d1d5db",
        max_width=W - 2 * M,
        line_gap=10,
    )
    draw.text((M, H - 66), "Alexey Martinez - Selected Portfolio", font=F["tiny"], fill="#9ca3af")
    draw.text((W - M - text_size(draw, "5/5", F["tiny"])[0], H - 66), "5/5", font=F["tiny"], fill="#9ca3af")
    return page


def main():
    QA_DIR.mkdir(parents=True, exist_ok=True)
    pages = [
        page_cover(),
        page_business_systems(),
        page_product_ai(),
        page_industrial(),
        page_close(),
    ]

    for index, page in enumerate(pages, start=1):
        page.save(QA_DIR / f"page-{index}.png", quality=95)

    pages[0].save(
        PDF_PATH,
        save_all=True,
        append_images=pages[1:],
        resolution=200,
    )

    print(PDF_PATH)
    print(QA_DIR)


if __name__ == "__main__":
    main()
