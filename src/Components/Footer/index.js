import './footer.css'
import { IoHome } from 'react-icons/io5'
import { CgProfile } from 'react-icons/cg'
import { TfiMenuAlt } from 'react-icons/tfi'

function Footer() {
  return (
    <footer>
      <div className='layout-icon'>
        <IoHome className='icon-home' />
        <div className='title-footer'>Home</div>
      </div>
      <div className='layout-icon'>
        <CgProfile className='icon-profile' />
        <div className='title-footer'>Profile</div>
      </div>
      <div className='layout-icon'>
        <TfiMenuAlt className='icon-menu' />
        <div className='title-footer'>Menu</div>
      </div>
    </footer>
  )
}

export default Footer
