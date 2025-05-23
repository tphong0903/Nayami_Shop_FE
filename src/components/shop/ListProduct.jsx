import { Link } from 'react-router-dom';
import { FormControl, InputLabel, MenuItem, Pagination, Rating, Select } from '@mui/material';
import { formatCurrency } from '~/utils/formatCurrency';
import { addToCart } from '~/apis/addtoCart';
import { useState } from 'react';


export default function ListProduct({ listProduct, totalPage, setCurrentPage, sortBy, setSortBy, setOpenFilter1 }) {
  const handleChangeSortBy = (event) => {
    setSortBy(event.target.value);
  };
  return (
    <div className="col-lg-9 col-12 wow fadeInUp">
      <div className="show-button">
        <div className="filter-button-group mt-0">
          <div className="filter-button d-inline-block d-lg-none">
            <Link onClick={() => setOpenFilter1()} style={{ color: 'white' }}>
              <i className="fa-solid fa-filter" /> Lọc
            </Link>
          </div>
        </div>
        <div className="top-filter-menu">
          <div className="category-dropdown">
            <h5 className="text-content">Sắp xếp :</h5>
            <FormControl >
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sortBy}
                onChange={handleChangeSortBy}
              >
                <MenuItem value={'none'}>Mặc định</MenuItem>
                <MenuItem value={'asc'}>Giá tăng dần</MenuItem>
                <MenuItem value={'desc'}>Giá giảm dần</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
      <div className="row g-sm-4 g-3 row-cols-xxl-4 row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2 product-list-section">
        {listProduct.map(v => (
          <div key={v.id}>
            <div className="product-box-3 h-100 wow fadeInUp" style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
              <div className="product-header">

                <div className="product-image">
                  {v?.discountDTO &&
                    <div className="label-flex">
                      <div className='discount' style={{ zIndex: 2 }}>
                        <label>{v.discountDTO.percentage}%</label>
                      </div>
                    </div>
                  }
                  <Link to={`/product-detail/${v.id}`}>
                    <img
                      src={v.listImage[0]}
                      className="img-fluid lazyload"
                      alt=""

                    />
                  </Link>
                </div>
              </div>
              <div className="product-footer">
                <div className="product-detail">
                  <Link to={`/product-detail/${v.id}`}>
                    <h5 className="name">{v.name}</h5>
                  </Link>
                  <p className="text-content mt-1 mb-2 product-content">
                    Cheesy feet cheesy grin brie. Mascarpone cheese and wine hard
                    cheese the big cheese everyone loves smelly cheese macaroni cheese
                    croque monsieur.
                  </p>
                  <div className=" mt-2">
                    <ul className="rating">
                      <Rating name="read-only" value={v.ratingAvg} readOnly />
                    </ul>
                  </div>
                  <div>
                    {v?.discountDTO ? (
                      <h5 >
                        <del className="text-content">{formatCurrency(v.unitPrice)}</del>
                      </h5>
                    ) : (<h5>&nbsp; </h5>)}
                    <h5 className="price theme-color">

                      {formatCurrency(v.unitPrice * (100 - (v?.discountDTO?.percentage || 0)) / 100)}
                    </h5>
                  </div>
                  <br />
                  <button
                    className="btn btn-animation btn-md fw-bold mend-auto cart-button w-100"
                    onClick={() => addToCart(v.id, 1)}

                  >
                    Giỏ hàng <i className="fa-solid fa-arrow-right icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))

        }
      </div>
      <nav className="custome-pagination">
        <ul className="pagination justify-content-center">
          <Pagination count={totalPage} variant="outlined" shape="rounded" showFirstButton showLastButton onChange={(event, value) => setCurrentPage(value)} />
        </ul>
      </nav>
    </div>
  )
}
