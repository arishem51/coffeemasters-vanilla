import { loadData } from "./services/Menu.js";
import { API, Store } from "./services/index.js";

const eventOptions = {
  once: false,
  passive: true,
};

// wait until content loaded

window._app = {};
_app.store = Store;

window.addEventListener("DOMContentLoaded", main, eventOptions);

async function main() {
  createWindowAppStore();
  loadData();
}

function createWindowAppStore() {}
