import './productDetails.css'
import sepatu from '../../Assets/sepatu.jpg'
import { AiFillStar } from 'react-icons/ai'

function ProductDetails() {
  return (
    <div className='container-details'>
      <div className='layout-details'>
        <img src={sepatu} alt={sepatu} />
        <div className='details'>
          <div className='title1'>Sneaker Bear - Wanita, Hitam.</div>
          <div className='layout-rating'>
            <div className='rating'>Terjual 300.</div>
            <AiFillStar className='star' />
            <div className='rating'>4.8 (100 rating)</div>
          </div>

          <div className='title1'>Rp. 300.000</div>

          <div className='title2'>Detail</div>
          <div className='detail'>
            Sepatu ini sangatlah populer karena selain memiliki struktur yang sangat menunjang performa dan kenyamanan
            cocok untuk yang mempunyai mobilitas tinggi. Rasakan produk kami yang sudah ekspor namun harga
            ekonomis.-Spesifikasi :Brand: LAF ProjectBahan Upper : Kulit PVC (Kulit sapi difinishing touch dengan
            polyster)Bahan Outsole : EVA Foam (bahan rubber yang anti slip)Bahan Insole : Double Sponge (Empuk saat
            digunakan)Warna : ALL White (Upper White & Sole White)Bertali berasa Slip On{' '}
            <span className='title2'> Lihat Selengkapnya </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
