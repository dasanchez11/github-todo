export class GithubFetch{

    constructor(){
        // this.cliendId = '19558fcfc7a4c4dbf5a4'
        // this.clientSecret = 'ae1be83efbc973710f237951867a0ba3b4596255'
        this.baseUrl = 'https://api.github.com/'
        // this.authUrl = `client_id=${this.cliendId}&client_secret=${this.clientSecret}`
        this.authToken = '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'
    }

    getUsers = async (searchQuery,page=1,per_page=5) =>{
        const pagination = `&page=${page}&per_page=${per_page}`
        const response = await fetch(this.baseUrl+`search/users?q=${searchQuery}`+pagination)
        const users = await response.json()
        return users
    }

    getUser = async (searchUser) =>{
        const res = await fetch(this.baseUrl+`users/${searchUser}`,{
            method: 'GET',
            headers:{"Content-Type": "application/json" ,
            'Authorization': `Bearer ${this.authToken}`}})
        const user = await res.json()
        return user
    }

    getRepositories = async(searchUser,page=1,per_page=15)=>{
        const pagination = `page=${page}&per_page=${per_page}&sort=updated-asc`
        const res = await fetch(this.baseUrl+`users/${searchUser}/repos`+'?q='+pagination,{
            method: 'GET',
            headers:{"Content-Type": "application/json" ,
            'Authorization': `Bearer ${this.authToken}`}})
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
        const url = `${this.baseUrl}users/${userId}/starred`
        const res = await fetch(url,{
            method: 'GET',
            headers:{"Content-Type": "application/json" ,
            'Authorization': `Bearer ${this.authToken}`}})
        const stars = await res.json()
        return stars
    }
}

