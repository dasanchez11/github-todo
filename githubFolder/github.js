import { GithubFetch } from "./util/githubFetch.js";
import { RepoUi } from "./util/repoUi.js";
import { UserUi } from "./util/userUi.js";
import {SearchBarUi} from './util/searchBarUi.js'

const github = new GithubFetch();
const repoUi = new RepoUi();
const searchUi = new SearchBarUi();
const userUi = new UserUi()
searchUi.setActive(false);
repoUi.clearRepos()
userUi.initializeUserUi()


//// SEARCH BAR
const debounceRequest = github.debouce((value) => {
  if(value!==''){
  github
    .getUsers(value)
    .then((res) => {
        searchUi.removeAllFilterOptions();
        searchUi.setActive(true);
        searchUi.createAllFilterOptions(res.items);
      })
      .catch((err) => {
        alert('An error ocurred')
      });
    }
}, 700);

document
  .getElementById("github-filter-input-name")
  .addEventListener("input", (e) => {
    if (e.target.value !== "") {
      debounceRequest(e.target.value);
    } else {
      searchUi.setActive(false);
      searchUi.removeAllFilterOptions();
      debounceRequest(e.target.value);
    }
  });

//// SEARCH BAR OPTION SELECTION
document
  .getElementById("github-search-elements")
  .addEventListener("click", (e) => {
    const selection = e.target.closest("li").id;
    Promise.all([github.getUser(selection),github.getStars(selection)])
    .then((res) =>{
      let [user,stars] = res
      stars = stars.length
      stars = stars>=30 ? '30+':stars
      userUi.clearProfile()
      const {avatar_url,name,login,created_at,public_repos,followers,following,company,blog,location} = user
      const member = created_at.split('T')[0]
      userUi.createFullProfile(avatar_url,name||login,member,stars,public_repos,followers,following,company,blog,location,login)


      //// GO TO PROFILE
      document.querySelector('.github-go-profile').addEventListener('click',(e)=>{
        e.preventDefault()
        const id = e.target.closest('a').id
        const url = `https://github.com/${id}`
        window.open(url, '_blank').focus()
      })


    }).catch(error =>{
      console.log(error)
      alert('An error ocurred')
      
    })

    github
      .getRepositories(selection)
      .then((repos) => {
        repoUi.createAllRepos(repos);
        searchUi.removeAllFilterOptions();
        searchUi.setActive(false);

        //// REPO LINK
        document.getElementById('repo-container').addEventListener('click',(e)=>{
          const id = e.target.closest('div').id
          if(id){
            const url = `https://github.com/${id}`
            window.open(url, '_blank').focus()
          }
        })

      })
      .catch((error) => {
        alert('An error ocurred')
      });
  });





