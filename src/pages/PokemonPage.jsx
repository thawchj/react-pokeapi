import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import axios from "axios"
import '../stlyes/custom.css'
import Navbar from "../componants/Navbar"
import { Metronome } from '@uiball/loaders'

const PokemonPage = () => {
    const params = useParams()
    console.log(params.pokeid)

    const [pokemonInfo, setPokemonInfo] = useState([])
    const [loading, setLoading] = useState(true)


    const getPokemon = async (id) => {
        const info = await getPokemonData(id);
        setPokemonInfo(info.data);
        console.log(info.data)
        setLoading(false);
    }

    const getPokemonData = async (id) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return res;
    }

    useEffect(() => {
        getPokemon(params.pokeid);
    }, [])



    return (
        <>
            <Navbar />
            {loading ? (<div class="loader"><Metronome
                size={60}
                speed={1.6}
                color="black"
            /></div>) :
                (
                    <div >


                        <div className="container">
                            <div>
                                <button className='back-button'>
                                    <Link to="/">
                                        <img width="48" height="48" src="https://img.icons8.com/sf-black/48/back.png" alt="back" />
                                    </Link>
                                </button>
                            </div>
                            <div className='card-info-poke' >
                                <div className='info-head'>
                                    <div className='info-name'>
                                        <label className='info-name text-bold'>{pokemonInfo.name}</label>
                                    </div>
                                    <div className='info-id'>
                                        <label>#{pokemonInfo.id}</label>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className='img-info-poke'>
                                            <img src={pokemonInfo.sprites.other.home.front_default} alt="" />
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='info-textbox'>

                                            <div className='btn-type'>
                                                {pokemonInfo.types.map((type) => (
                                                    <button className={`type_color_${type.type.name}`}>{type.type.name}</button>
                                                ))}
                                            </div>
                                            <div>
                                                <label className="text-size-18 text-bold">ABILITIES</label>
                                                <div className='btn-type'>
                                                    {pokemonInfo.abilities.map((ability) => (
                                                        <button className="">{ability.ability.name}</button>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className='row'>
                                                {pokemonInfo.stats.map((stat) => (
                                                    <div className='col-6 stat-poke'>
                                                        <div>
                                                            <label className='text-size-18'>{stat.stat.name}</label>
                                                        </div>
                                                        <div className='cover-val'>
                                                            <label className='text-size-16'>{stat.base_stat}</label>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

        </>

    )
}

export default PokemonPage
