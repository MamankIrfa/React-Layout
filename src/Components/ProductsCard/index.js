import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IndexContext } from '../../Pages/Menu'
import './productsCard.css'

function ProductsCard({ sepatu, tas, dompet }) {
  const index = useContext(IndexContext)
  const [product, setProduct] = useState([])

  useEffect(() => {
    switch (index.index) {
      case index.index && 0:
        setProduct(sepatu)
        break
      case index.index && 1:
        setProduct(tas)
        break
      case index.index && 2:
        setProduct(dompet)
        break
      default:
        setProduct(sepatu)
        break
    }
  }, [index, sepatu, tas, dompet])

  return (
    <div className='layout-card'>
      {product.map((data, i) => (
        <Link to='/details' className='link'>
          <div key={i} className='card'>
            <img src={data.image} alt={data.image} className='image' />
            <div className='layout-text'>
              <div className='title-card'>{data.title}</div>
              <div className='price'>Rp. {data.price}</div>
              <div className='title-card'>{data.store}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ProductsCard
