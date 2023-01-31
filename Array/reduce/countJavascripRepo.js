const url = 'https://api.github.com/users/jozhuare99/repos?per_page=100'

const fetchRepos = async ()=>{
    const res = await fetch(url)
    const data =await res.json()
    const newData = data.reduce((total, repo)=>{
        const {language} = repo
        if(language) {
            total[language] = total[language] + 1 || 1
        }
        return total
    }, {})
    console.log(newData);
}

fetchRepos()