import Axios from 'axios'

export default Axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    headers: {
        'Content-Type': 'application/json',

    }    
})