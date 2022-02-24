import {useState, useEffect} from 'react'
import Repositories from './Repositories';
import Header from './Header';

const fetchRepositories = async (userName) => {
    const BASE_URL = `https://api.github.com/users/${userName}/repos`;
    const response = await fetch(BASE_URL, {
        method: 'GET',
        headers: {
          'Authorization': 'Basic ZGV2b3BzWW86e3t0b2tlbkdpdGh1YkFwaX19',
          'Accept': 'application/vnd.github.v3+json'
        }
    })
    const repositories = await response.json();
    console.log(repositories);
    return repositories;
}

const Owner = ({owner}) => {

    const [repositoriesList, setRepositoriesList] = useState([])

    useEffect(async () => {
        const repositories = await fetchRepositories(owner.login);
        setRepositoriesList(repositories)
    }, [])

    return (
        <div className="container">
            <Header />
            <Repositories repositories={repositoriesList}/>
        </div>
    )
}

export default Owner
