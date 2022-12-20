import { createContext, useState } from 'react'
import Button from '../../Components/Button'
import ProductsCard from '../../Components/ProductsCard'
import Footer from '../../Components/Footer'
import { Product1, Product2, Product3 } from './dataProducts'
import './menu.css'

export const IndexContext = createContext()

function Menu() {
  const [index, setIndex] = useState(0)
  const contextIndex = { index, setIndex }
  const title = ['Sepatu', 'Tas', 'Dompet']
  const sepatu = Product1
  const tas = Product2
  const dompet = Product3

  return (
    <>
      <div className='menu-page'>
        <IndexContext.Provider value={contextIndex}>
          <Button title={title} />
          <div className='layout-product'>
            <ProductsCard sepatu={sepatu} tas={tas} dompet={dompet} />
          </div>
        </IndexContext.Provider>
      </div>
      <div className='modal'>
        <Footer />
      </div>
    </>
  )
}

export default Menu
