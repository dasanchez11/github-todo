import { GithubFetch } from "./util/githubFetch.js";
import { dummyData } from "./util/dummyData.js";
import { RepoUi } from "./util/githubUi.js";
const github = new GithubFetch();
const ui = new RepoUi();
// github.getUsers('dasanch').then(res => console.log(res)).catch(err => console.log(err))
// github.getUser('dasanchez11').then(res => console.log(res)).catch(err => console.log(err))

github
  .getRepositories("dasanchez11")
  .then((res) => logAnswers(res))
  .catch((err) => err);

const logAnswers = (result) => {
  ui.createAllRepos(result);
};

// const newElement = document.createElement('div')
// newElement.id = 'newElement'
// const element = document.querySelector('.github-cointainer')
// element.prepend(newElement)

const debRequest = github.debouce((value) => {
  github
    .getUsers(value)
    .then((res) => console.log(res))
    .catch((err) => err);
}, 700);

// document
//   .getElementById("github-filter-input-name")
//   .addEventListener("keyup", (e) => {
//     if (e.target.value !== "") {
//       debRequest(e.target.value);
//     }
//   });

