export class GithubFetch{

    constructor(){
        this.cliendId = '19558fcfc7a4c4dbf5a4'
        this.clientSecret = 'ae1be83efbc973710f237951867a0ba3b4596255'
        this.baseUrl = 'https://api.github.com/'
        this.authUrl = `client_id=${this.cliendId}&client_secret=${this.clientSecret}`
    }

    getUsers = async (searchQuery,page=1,per_page=5) =>{
        const pagination = `&page=${page}&per_page=${per_page}`
        const response = await fetch(this.baseUrl+`search/users?q=${searchQuery}`+pagination+'&'+this.authUrl)
        const users = await response.json()
        return users
    }

    getUser = async (searchUser) =>{
        const res = await fetch(this.baseUrl+`users/${searchUser}`+'?q='+this.authUrl)
        const user = await res.json()
        return user
    }

    getRepositories = async(searchUser,page=1,per_page=10)=>{
        const pagination = `page=${page}&per_page=${per_page}`
        const res = await fetch(this.baseUrl+`users/${searchUser}/repos`+'?q='+pagination+'&'+this.authUrl)
        const user = await res.json()
        return user
    }

    debouce = (callback, delay=700) =>{
        let timer
        return (...args) =>{
            clearTimeout(timer)
            timer = setTimeout(()=>{
                callback(...args)
            },delay)
        }
    }

    getStars = async(userId) =>{
        const url = `${this.baseUrl}users/${userId}/starred?q=${this.authUrl}`
        const res = await fetch(url)
        const stars = await res.json()
        return stars
    }
}

