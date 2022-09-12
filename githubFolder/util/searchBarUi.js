export class SearchBarUi {
    active = false;
  
    setActive(value) {
      const search = document.getElementById("github-search-elements");
      if (value === true) {
        this.active = true;
        search.style.visibility = 'visible'
      }else if (value===false){
        this.active = false;
        search.style.visibility = 'hidden'
      }
    }
  
    createFilterOption(name, picUrl) {
      const liElement = document.createElement("li");
      liElement.innerHTML = `
      <li id=${name} class="github-filter-option">
        <div class="github-filter-pic" style="background-image: url(${picUrl});"></div>
        <div class="github-filter-name">${name}</div>
      </li>`;
      return liElement;
    }
  
    createAllFilterOptions(options){
      const search = document.getElementById("github-search-elements");
      options.forEach(option =>{
        const newOption = this.createFilterOption(option.login,option.avatar_url)
        search.appendChild(newOption)
      })
    }
  
    removeAllFilterOptions() {
      const search = document.getElementById("github-search-elements");
      search.innerHTML = "";
    }
  }
  