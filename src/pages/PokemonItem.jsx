
import '../stlyes/custom.css'
import { Link } from 'react-router-dom'

const PokemonItems = ({ pokemon }) => {
  
  return (
    <>
      {
        pokemon.map((item) => {

          return (
            <>
              <div className="col-md-4 " key={item.name}>
                <Link  to={`/pokemon/${item.name}`}>
                  <div className='card-poke'>
                    <div className='img-poke'>
                      <img  src={item.sprites.other.dream_world.front_default} alt="" />
                    </div>
                    <div className='mt-10 mb-10'>
                      <label className='text-size-24 text-bold'>{item.name}</label>
                    </div>
                    <div className='btn-type'>
                      {item.types.map((type) => (
                        <button className={`type_color_${type.type.name}`}>{type.type.name}</button>
                      ))}
                    </div>
                  </div>
                </Link>
              </div>

            </>
          )
        })
      }
    </>
  )
}

export default PokemonItems
