import TopFillter from './TopFillter'
import ListProduct from './ListProduct'

export default function ProductSection() {
  return (
    <section className="section-b-space shop-section">
      <div className="container-fluid-lg">
        <div className="row">
          <div className="col-12">
            <TopFillter />
            <ListProduct />
          </div>
        </div>
      </div>
    </section>

  )
}
