export class UserUi {
    initializeUserUi(){
        const mainElement = document.getElementById('github-profile-header')
        const element = document.createElement('div')
        element.classList.add('github-no-information')
        element.id='github-no-information'
        element.innerText = 'No information'
        mainElement.after(element)
    }

    clearProfile(){
        const text = ''
        const mainElement = document.getElementById('github-basic-info')
        mainElement.innerHTML = text
        if( document.getElementById('github-no-information')){
            document.getElementById('github-no-information').remove()
        }
    }

    createFullProfile(avatar,name,member,stars,repos,followers,following,company,website,location,login){
        const mainElement = document.getElementById('github-basic-info')
        mainElement.innerHTML = ''
        const profile = this.createProfileInfo(avatar,name,member,login)
        mainElement.appendChild(profile)

        const otherElement = document.getElementById('github-other-info')
        otherElement.innerHTML = ''

        if(stars){
            otherElement.appendChild(this.createStars(stars))
        }

        if(repos){
            otherElement.appendChild(this.createRepositories(repos))
        }
        if(followers){
            otherElement.appendChild(this.createFollowers(followers))
        }
        if(following){
            otherElement.appendChild(this.createFollowing(following))
        }
        if(company){
            otherElement.appendChild(this.createCompany(company))
        }
        if(website){
            otherElement.appendChild(this.createWebsite(website))
        }
        if(location){
            otherElement.appendChild(this.createLocation(locaiton))
        }
    }

    createStars(stars){
        const newElement = document.createElement('div')
        newElement.innerHTML = `
        <div class="github-profile-icon">
            <span>Stars: ${stars}</span>
            <i class="fa-solid fa-star"></i>
        </div>`
        return newElement
    }

    createRepositories(repos){
        const newElement = document.createElement('div')
        newElement.innerHTML = `
        <div class="github-profile-icon">
            <span>Repositories: ${repos}</span>
            <i class="fa-solid fa-book"></i>
        </div>
        `
        return newElement
    }


    createFollowers(followers){
        const newElement = document.createElement('div')
        newElement.innerHTML = `
        <div class="github-profile-icon">
            <span>Followers: ${followers}</span>
            <i class="fa-solid fa-person"></i>
        </div>
        `
        return newElement
    }

    createFollowing(following){
        const newElement = document.createElement('div')
        newElement.innerHTML = `
        <div class="github-profile-icon">
            <span>Following: ${following}</span>
            <i class="fa-solid fa-people-arrows"></i>
        </div>
        `
        return newElement
    }

    createCompany(company){
        const newElement = document.createElement('div')
        newElement.innerHTML = `
        <div class="github-profile-icon">
            <span>Company: ${company}</span>
            <i class="fa-solid fa-building"></i>
        </div>
        `
        return newElement
    }

    createLocation(location){
        const newElement = document.createElement('div')
        newElement.innerHTML = `
        <div class="github-profile-icon">
            <span>Location: ${location}</span>
            <i class="fa-solid fa-location-pin"></i>
        </div>
        `
        return newElement
    }

    createWebsite(website){
        const newElement = document.createElement('div')
        newElement.innerHTML = `
        <div class="github-profile-icon">
            <span>Website: ${website}</span>
            <i class="fa-solid fa-location-pin"></i>
        </div>
        `
        return newElement
    }

    createProfileInfo(avatar_url,name,member,login) {
        const newElement = document.createElement('div')
        newElement.classList.add('profile-basic-info')
        newElement.innerHTML = `
            <div class="github-avatar" style="background-image: url(${avatar_url})"></div>
            <h5 class="github-name">${name.toUpperCase()}</h5>
            <span class="github-member">${member}</span>
            <a id=${login} href="#" class="github-go-profile button-secondary">
                <div class="github-go-to-profile">
                    <i class="fa-brands fa-github"></i>
                    <span>Go To Profile</span>
                </div>
            </a>
        `
        return newElement
    }

}