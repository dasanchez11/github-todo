export class UserUi {

    setInfo = () =>{

    }

    clearInfo= () =>{

    }

}

export class RepoUi{
    createRepoItem = (name,stars,forks,watchers,link) =>{
        // const repoContainer = document.getElementById('repo-container')
        const item = document.createElement('div')
        // item.classList.add('github-repo-item')
        item.innerHTML = `
        <div class="github-repo-item">
        <div class="github-repo-specific-item">
          <span class="github-repo-name">${name}</span>
        </div>
        <div class="github-repo-specific-item">
          <i class="fa-regular fa-star"></i>
          <span class="github-repo-stars">${stars}</span>
        </div>
        <div class="github-repo-specific-item">
          <i class="fa-solid fa-code-fork"></i>
          <span class="github-repo-forks">${forks}</span>
        </div>
        <div class="github-repo-specific-item">
          <i class="fa-regular fa-eye"></i>
          <span class="github-repo-watchers">${watchers}</span>
        </div>
        <div class="github-repo-specific-item github-repo-link">
          <i class="fa-brands fa-github"></i>
          <a href='https://github.com/${link}' class="github-repo-watchers">View</a>
        </div>
      </div>
        `
        return item
    }

    clearRepos= () =>{
        const repoContainer = document.getElementById('repo-container')
        repoContainer.innerHTML = `
        <div class='no-repos'>
        <h3> No Repos Available </h3>
        </div>`
    }

    createAllRepos(repos){
        const repoContainer = document.getElementById('repo-container')
        repos.forEach(repo =>{
            const item = this.createRepoItem(repo.name,repo.stargazers_count,repo.forks,repo.watchers,repo.full_name)
            repoContainer.appendChild(item)
        })
    }
}