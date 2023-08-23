import API from "./API.js";

export async function loadData() {
  _app.store.menu = await API.fetchMenu();
}

export default { loadData };
