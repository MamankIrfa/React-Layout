import { useContext, useState } from 'react'
import { IndexContext } from '../../Pages/Menu'
import './button.css'

function Button({ title }) {
  const [active, setActive] = useState(0)
  const index = useContext(IndexContext)
  index.setIndex(active)
  return (
    <div className='layout-button'>
      {title.map((title, i) => (
        <div
        key={i}
          className={`button ${active === i && 'active'}`}
          onClick={() => {
            setActive(i)
          }}
        >
          <p>{title}</p>
        </div>
      ))}
    </div>
  )
}

export default Button
