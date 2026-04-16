from playwright.sync_api import sync_playwright
from time import sleep

with sync_playwright() as p:
    browser = p.chromium.launch(headless=False)

    page = browser.new_page()

    # abre seu site
    page.goto("http://localhost:5173/play")

    # garante foco na página
    page.click("body")

    # simula teclas
    for i in range(100):
        sleep(0.3)
        page.keyboard.down("ArrowUp")
        page.keyboard.up('ArrowUp')
    page.wait_for_timeout(5000)

    browser.close()