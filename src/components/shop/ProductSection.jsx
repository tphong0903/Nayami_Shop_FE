
import ListProduct from './ListProduct'
import LeftFillter from './LeftFillter'
import { useState } from 'react'

export default function ProductSection({ searchQuery }) {
  const [listProduct, setListProduct] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState()
  const [sortBy, setSortBy] = useState('none')
  return (
    <section className="section-b-space shop-section">
      <div className="container-fluid-lg">
        <div className="row">
          <LeftFillter setListProduct={setListProduct} currentPage={currentPage} setCurrentPage={setCurrentPage} setTotalPage={setTotalPage} sortBy={sortBy} searchQuery={searchQuery} />
          <ListProduct listProduct={listProduct} totalPage={totalPage} setCurrentPage={setCurrentPage} sortBy={sortBy} setSortBy={setSortBy} />
        </div>
      </div>
    </section>

  )
}
