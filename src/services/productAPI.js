/* eslint-disable import/no-anonymous-default-export */
import http from '../constants/_configAxios'

const getAllPokemon = () => {
    return http.get('pokemon')
}

export default {
    getAllPokemon

}



