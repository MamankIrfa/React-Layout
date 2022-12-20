import './header.css'
import { BsFillCartFill } from 'react-icons/bs'
import { FaUserCircle } from 'react-icons/fa'
import { IoChevronBackOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className='layout-header'>
        <Link to='/' className='link'>
          <div className='back'>
            <IoChevronBackOutline className='icon-back' />
            <div className="title-back">Kembali</div>
          </div>
          <div className='title-store'>Toko Kita</div>
        </Link>
        <div className='layout-left'>
          <div className='cart'>
            <BsFillCartFill className='icon' />
            <div className='notify'>0</div>
          </div>
          <div className='profile'>
            <div className='username'>username</div>
            <FaUserCircle className='icon' />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
