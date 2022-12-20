import './cartDetails.css'
import { BsFillCartPlusFill } from 'react-icons/bs'

function CartDetails() {
  return (
    <div className='cart-details'>
      <div className='layout-cart'>
        <div className='layout-right'>
          <div className='current-product'>
            <div className='title-cart'>Atur Jumlah</div>
            <div className='count-pruduct'>
              <div className='min'>-</div>
              <div className='count'>1</div>
              <div className='plus'>+</div>
            </div>
          </div>
          <div className='subtotal'>
            <div className='title-cart'>Subtotal</div>
            <div className='title-cart'>Rp. 300.000</div>
          </div>
        </div>
        <div className='submit-cart'>
          <BsFillCartPlusFill className='icon2' />
          <div className='title-submit'>Tambah ke keranjang</div>
        </div>
      </div>
    </div>
  )
}

export default CartDetails
