import './layouts.css'
import Header from '../Components/Header'

function Layouts({ children }) {
  return (
    <div className='container'>
      <Header />
      <div>{children}</div>

    </div>
  )
}

export default Layouts
