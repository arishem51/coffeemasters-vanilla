const Router = {
  init: () => {
    document.querySelectorAll("a.navlink").forEach((a) => {
      a.addEventListener("click", (event) => {
        event.preventDefault();
        const url = event.target.getAttribute("href");
        Router.go(url);
      });
    });

    // Event Handler for URL changes

    window.addEventListener("popstate", (event) => {
      Router.go(event.state.route, false);
    });

    // default will go to the link when you paste the URl or click some URL
    Router.go(location.pathname);
  },
  go: (route, addToHistory = true) => {
    if (addToHistory) {
      history.pushState({ route }, "", route);
    }

    let pageElement = null;
    const main = document.querySelector("main");

    switch (route) {
      case "/":
        pageElement = document.createElement("h1");
        pageElement.textContent = "Menu";
        break;
      case "/order":
        pageElement = document.createElement("h1");
        pageElement.textContent = "Order";
        break;
      default:
        if (route.startWidth("/product-")) {
          pageElement = document.createElement("h1");
          pageElement.textContent = "Details";
        }
    }

    if (pageElement && main) {
      main.replaceChildren();
      main.insertAdjacentElement("beforeend", pageElement);
      window.screenX = 0;
      window.scrollY = 0;
    }
  },
};

export default Router;
