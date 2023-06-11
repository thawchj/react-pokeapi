/* eslint-disable no-loop-func */
import { useEffect, useState } from "react"
import axios from "axios"
import PokemonItem from './PokemonItem'
import Navbar from "../componants/Navbar"
import '../stlyes/custom.css'
import { Metronome } from '@uiball/loaders'



const Home = () => {

    const [loading, setLoading] = useState(true)
    const [query, setQuery] = useState("")

    const [pokemonData, setPokemonData] = useState([])
    const [pokemonFilter, setPokemonFilter] = useState([])

    const getAllPokemon = async () => {

        const pokemonArray = []
        for (let i = 1; i < 151; i++) {
            await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res => {
                pokemonArray.push(res.data)

            })
        }

        setLoading(false);
        setPokemonData(pokemonArray)
        setPokemonFilter(pokemonArray)

    }

    const handleFilter = (value) => {
        console.log('value', value)
        const res = pokemonFilter.filter(item => item.name.toLowerCase().includes(value))
        setPokemonData(res)
    }

    useEffect(() => {
        getAllPokemon()

    }, [])

    return (
        <>
            <Navbar />

            <div className="container">



                {loading ? (<div class="loader"><Metronome
                    size={60}
                    speed={1.6}
                    color="black"
                /></div>) : (
                    <>
                        <div className="cover-search-list">
                            <input onChange={e => handleFilter(e.target.value)} type="text" placeholder="Search Pokemon.." />
                    


                        </div>
                        <div className="row">
                            <PokemonItem pokemon={pokemonData} />

                        </div>
                    </>

                )}

            </div>


        </>

    )
}

export default Home
