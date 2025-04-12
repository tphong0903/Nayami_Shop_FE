
export default function MobileMenu() {
  return (
    <>
      <div className="mobile-menu d-md-none d-block mobile-cart">
        <ul>
          <li className="active">
            <a href="index.html">
              <i className="iconly-Home icli" />
              <span>Home</span>
            </a>
          </li>
          <li className="mobile-category">
            <a href="javascript:void(0)">
              <i className="iconly-Category icli js-link" />
              <span>Category</span>
            </a>
          </li>
          <li>
            <a href="search.html" className="search-box">
              <i className="iconly-Search icli" />
              <span>Search</span>
            </a>
          </li>
          <li>
            <a href="wishlist.html" className="notifi-wishlist">
              <i className="iconly-Heart icli" />
              <span>My Wish</span>
            </a>
          </li>
          <li>
            <a href="/cart">
              <i className="iconly-Bag-2 icli fly-cate" />
              <span>Cart</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
