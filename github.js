class GitHub{
    constructor() {
        this.client_id = '57a49394013e206c1d1f'; 
        this.client_secret = 'dcb7a1f4d3175617958ac318b416eb38710c8219';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
        
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}