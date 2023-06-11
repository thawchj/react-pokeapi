import { Link } from 'react-router-dom'
import '../stlyes/custom.css'

const SearchList = ({listname}) => {
    
  return (
    <>
      {
        listname.map((item ,id) => {
            console.log('item',item)
            return <li>
                        <Link  to={`/pokemon/${item}`} >
                            <label>
                                {item}
                            </label>
                        </Link>
                   </li>
        })
      }
    </>
  )
}

export default SearchList
