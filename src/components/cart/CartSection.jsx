
import CartTable from './CartTable'
import SideSummery from './SideSummery'

export default function CartPage() {
  return (
    <section className="cart-section section-b-space">
      <div className="container-fluid-lg">
        <div className="row g-sm-5 g-3">
          <CartTable />
          <SideSummery />
        </div>
      </div>
    </section>

  )
}
