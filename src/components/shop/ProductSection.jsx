import TopFillter from './TopFillter'
import ListProduct from './ListProduct'
import LeftFillter from './LeftFillter'

export default function ProductSection() {
  return (
    <section className="section-b-space shop-section">
      <div className="container-fluid-lg">
        <div className="row">
          <LeftFillter />
          <ListProduct />
        </div>
      </div>
    </section>

  )
}
