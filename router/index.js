
const router = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

const scriptLoad = (routeName) => {
  const scriptDiv = document.getElementById("scripts-added");
  const routeScript = document.createElement("script");
  const date = new Date().getTime();
  routeScript.src = routeName +`?${date}`;
  routeScript.type = "module";
  routeScript.id = routeName;
  scriptDiv.appendChild(routeScript);
};

const pathSwitch = (currentPathName) => {
  switch (currentPathName) {
    case "/todo":
      return "todo";
    case "/":
      return "bonus";
    case "/bonus":
      return "bonus";
    default:
      return "other";
  }
};

const PATHS = {
  todo: {
    path: "/",
    template: "/todoFolder/todo.html",
    scripts: {
      main: "/todoFolder/todo.js",
    },
    name: "todo-script",
  },
  bonus: {
    path: "/bonus",
    template: "/bonusFolder/bonus.html",
    scripts: {
      main: "/bonusFolder/bonus.js",
    },
    name: "bonus-script",
  },
  other: {
    path: "/other",
    template: "/404/error.html",
  },
};

const handleLocation = async () => {
  const page = window.location.pathname;
  const pathName = pathSwitch(page);
  const route = PATHS[pathName];
  const contentSelector = document.querySelector("#content");
  const html = await fetch(route.template).then((data) => data.text());
  contentSelector.innerHTML = html;
  const availableScripts = Object.keys(route.scripts);
  deleteScripts();
  availableScripts.forEach((script) => {
    scriptLoad(route.scripts[script]);
  });
};

const deleteScripts = () => {
  const scriptDiv = document.getElementById("scripts-added");
   scriptDiv.innerHTML = "";
};

window.onpopstate = handleLocation();
window.route = router;

// handleLocation();
