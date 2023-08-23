import { Store, Router, Menu } from "./services/index.js";

const eventOptions = {
  once: false,
  passive: true,
};

// wait until content loaded

window._app = {};
_app.store = Store;
_app.router = Router;
_app.menu = Menu;

window.addEventListener("DOMContentLoaded", main, eventOptions);

async function main() {
  _app.menu.loadData();
  _app.router.init();
}
