import { Rating, Slider } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear';
export default function LeftFillter() {
  const [listSelectedOption, setListSelectedOption] = useState({
    listBrandsSelected: [],
    listCategoriesSelected: [],
    listDiscountsSelected: [],
    listRatingSelected: [],
  })
  const [listBrands, setListBrands] = useState([])
  const [listCategories, setListCategories] = useState([])
  const [listDiscounts, setListDiscounts] = useState([])
  const [listRating, setListRating] = useState([])
  const [valuePrice, setValuePrice] = useState([0, 100000000]);

  const clearAllSelectedOptions = () => {
    setListSelectedOption({
      listBrandsSelected: [],
      listCategoriesSelected: [],
      listDiscountsSelected: [],
      listRatingSelected: []
    });
  };
  const handleChange = (event, newValue) => {
    setValuePrice(newValue);
  };

  const handleSelected = (id, option, name) => {
    setListSelectedOption(prevState => {
      let currentList = prevState[option];

      let exists = currentList.some(item => item.id === id);

      let updatedList = exists
        ? currentList.filter(item => item.id !== id)
        : [...currentList, { id, name }];

      return {
        ...prevState,
        [option]: updatedList
      };
    });
  };

  useEffect(() => {
    axios
      .get('/api/products/filter')
      .then((response) => {
        setListBrands(response.data.data.listBrandDTO);
        setListCategories(response.data.data.listCategoryDTO);
        setListDiscounts(response.data.data.listQuantityProductOfDiscount);
        setListRating(response.data.data.listQuantityProductOfRating);
      })
  }, []);
  return (
    <div className="col-custome-3 wow fadeInUp" style={{ width: '22%' }}>
      <div className="left-box">
        <div className="shop-left-sidebar">
          <div className="back-button">
            <h3>
              <i className="fa-solid fa-arrow-left" /> Back
            </h3>
          </div>
          <div className="filter-category">
            <div className="filter-title">
              <h2>Filters</h2>
              <a href="javascript:void(0)" onClick={clearAllSelectedOptions}>Clear All</a>
            </div>
            <ul>
              {Object.entries(listSelectedOption).map(([key, list]) => (
                list.map((item) => (
                  <li key={item.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px' }}>
                    <div style={{ flexGrow: 2 }} >
                      <span className="option-name" style={{ fontSize: '14px', fontWeight: '500' }}>{item.name}</span>
                    </div>
                    <div>
                      <ClearIcon fontSize="small" className="clear-icon" onClick={() => handleSelected(item.id, key, item.name)} />
                    </div>
                  </li>
                ))
              ))}
            </ul>
          </div>
          <div className="accordion custome-accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <span>Danh mục</span>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div className="accordion-body">
                  <ul className="category-list custom-padding custom-height">
                    {listCategories.map(v => (
                      <li key={v.id}>
                        <div className="form-check ps-0 m-0 category-list-box">
                          <input
                            className="checkbox_animated"
                            type="checkbox"
                            id="fruit"
                            onClick={() => handleSelected(v.id, 'listCategoriesSelected', v.categoryName)}
                            checked={listSelectedOption['listCategoriesSelected'].some(item => item.id === v.id)}
                          />
                          <label className="form-check-label" htmlFor="fruit">
                            <span className="name">{v.categoryName}</span>
                            <span className="number">({v.quantityProduct})</span>
                          </label>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <span>Thương hiệu</span>
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingTwo"
              >
                <div className="accordion-body">
                  <ul className="category-list custom-padding">
                    {listBrands.map(v => (
                      <li key={v.id}>
                        <div className="form-check ps-0 m-0 category-list-box">
                          <input
                            className="checkbox_animated"
                            type="checkbox"
                            id="veget"
                            onClick={() => handleSelected(v.id, 'listBrandsSelected', v.name)}
                            checked={listSelectedOption['listBrandsSelected'].some(item => item.id === v.id)}
                          />
                          <label className="form-check-label" htmlFor="veget">
                            <span className="name">{v.name}</span>
                            <span className="number">({v.quantityProduct})</span>
                          </label>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <span>Giá</span>
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingThree"
              >
                <div className="accordion-body">
                  <div className="range-slider">
                    <Slider
                      getAriaLabel={() => 'Temperature range'}
                      value={valuePrice}
                      onChange={handleChange}
                      valueLabelDisplay="auto"
                      step={500000}
                      min={0}
                      max={100000000}
                      valueLabelFormat={(value) => value.toLocaleString('vi-VN') + ' VND'}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingSix">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  <span>Đánh giá</span>
                </button>
              </h2>
              <div
                id="collapseSix"
                className="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingSix"
              >
                <div className="accordion-body">
                  <ul className="category-list custom-padding">
                    {[...Array(5)].map((_, i) => (
                      <li key={i}>
                        <div className="form-check ps-0 m-0 category-list-box">
                          <input className="checkbox_animated" type="checkbox"
                            onClick={() => handleSelected(i, 'listRatingSelected', i + ' sao')}
                            checked={listSelectedOption['listRatingSelected'].some(item => item.id === i)}
                          />
                          <div className="form-check-label">
                            <ul className="rating">
                              <Rating name="read-only" value={i} readOnly />
                            </ul>
                            <span className="text-content">({listRating[i]})</span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  <span>Khuyến mãi</span>
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingFour"
              >
                <div className="accordion-body">
                  <ul className="category-list custom-padding">
                    <li>
                      <div className="form-check ps-0 m-0 category-list-box">
                        <input
                          className="checkbox_animated"
                          type="checkbox"
                          onClick={() => handleSelected(1, 'listDiscountsSelected', '0% - 5%')}
                          checked={listSelectedOption['listDiscountsSelected'].some(item => item.id === 1)}
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          <span className="name">0% - 5%</span>
                          <span className="number">({listDiscounts[0]})</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check ps-0 m-0 category-list-box">
                        <input
                          className="checkbox_animated"
                          type="checkbox"
                          id="flexCheckDefault1"
                          onClick={() => handleSelected(2, 'listDiscountsSelected', '5% - 10%')}
                          checked={listSelectedOption['listDiscountsSelected'].some(item => item.id === 2)}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault1"
                        >
                          <span className="name">5% - 10%</span>
                          <span className="number">({listDiscounts[1]})</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check ps-0 m-0 category-list-box">
                        <input
                          className="checkbox_animated"
                          type="checkbox"
                          id="flexCheckDefault2"
                          onClick={() => handleSelected(3, 'listDiscountsSelected', '10% - 15%')}
                          checked={listSelectedOption['listDiscountsSelected'].some(item => item.id === 3)}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault2"
                        >
                          <span className="name">10% - 15%</span>
                          <span className="number">({listDiscounts[2]})</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check ps-0 m-0 category-list-box">
                        <input
                          className="checkbox_animated"
                          type="checkbox"
                          id="flexCheckDefault3"
                          onClick={() => handleSelected(4, 'listDiscountsSelected', '15% - 25%')}
                          checked={listSelectedOption['listDiscountsSelected'].some(item => item.id === 4)}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault3"
                        >
                          <span className="name">15% - 25%</span>
                          <span className="number">({listDiscounts[3]})</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check ps-0 m-0 category-list-box">
                        <input
                          className="checkbox_animated"
                          type="checkbox"
                          id="flexCheckDefault4"
                          onClick={() => handleSelected(5, 'listDiscountsSelected', 'Hơn 25%')}
                          checked={listSelectedOption['listDiscountsSelected'].some(item => item.id === 5)}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault4"
                        >
                          <span className="name">Hơn 25%</span>
                          <span className="number">({listDiscounts[4]})</span>
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  <span>Pack Size</span>
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingFive"
              >
                <div className="accordion-body">
                  <ul className="category-list custom-padding custom-height">
                    <li>
                      <div className="form-check ps-0 m-0 category-list-box">
                        <input
                          className="checkbox_animated"
                          type="checkbox"
                          id="flexCheckDefault5"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault5"
                        >
                          <span className="name">400 to 500 g</span>
                          <span className="number">(05)</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check ps-0 m-0 category-list-box">
                        <input
                          className="checkbox_animated"
                          type="checkbox"
                          id="flexCheckDefault6"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault6"
                        >
                          <span className="name">500 to 700 g</span>
                          <span className="number">(02)</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check ps-0 m-0 category-list-box">
                        <input
                          className="checkbox_animated"
                          type="checkbox"
                          id="flexCheckDefault7"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault7"
                        >
                          <span className="name">700 to 1 kg</span>
                          <span className="number">(04)</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check ps-0 m-0 category-list-box">
                        <input
                          className="checkbox_animated"
                          type="checkbox"
                          id="flexCheckDefault8"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault8"
                        >
                          <span className="name">
                            120 - 150 g each Vacuum 2 pcs
                          </span>
                          <span className="number">(06)</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check ps-0 m-0 category-list-box">
                        <input
                          className="checkbox_animated"
                          type="checkbox"
                          id="flexCheckDefault9"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault9"
                        >
                          <span className="name">1 pc</span>
                          <span className="number">(09)</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check ps-0 m-0 category-list-box">
                        <input
                          className="checkbox_animated"
                          type="checkbox"
                          id="flexCheckDefault10"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault10"
                        >
                          <span className="name">1 to 1.2 kg</span>
                          <span className="number">(06)</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check ps-0 m-0 category-list-box">
                        <input
                          className="checkbox_animated"
                          type="checkbox"
                          id="flexCheckDefault11"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault11"
                        >
                          <span className="name">2 x 24 pcs Multipack</span>
                          <span className="number">(03)</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check ps-0 m-0 category-list-box">
                        <input
                          className="checkbox_animated"
                          type="checkbox"
                          id="flexCheckDefault12"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault12"
                        >
                          <span className="name">2x6 pcs Multipack</span>
                          <span className="number">(04)</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check ps-0 m-0 category-list-box">
                        <input
                          className="checkbox_animated"
                          type="checkbox"
                          id="flexCheckDefault13"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault13"
                        >
                          <span className="name">4x6 pcs Multipack</span>
                          <span className="number">(05)</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check ps-0 m-0 category-list-box">
                        <input
                          className="checkbox_animated"
                          type="checkbox"
                          id="flexCheckDefault14"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault14"
                        >
                          <span className="name">5x6 pcs Multipack</span>
                          <span className="number">(09)</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check ps-0 m-0 category-list-box">
                        <input
                          className="checkbox_animated"
                          type="checkbox"
                          id="flexCheckDefault15"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault15"
                        >
                          <span className="name">Combo 2 Items</span>
                          <span className="number">(10)</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check ps-0 m-0 category-list-box">
                        <input
                          className="checkbox_animated"
                          type="checkbox"
                          id="flexCheckDefault16"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault16"
                        >
                          <span className="name">Combo 3 Items</span>
                          <span className="number">(14)</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check ps-0 m-0 category-list-box">
                        <input
                          className="checkbox_animated"
                          type="checkbox"
                          id="flexCheckDefault17"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault17"
                        >
                          <span className="name">2 pcs</span>
                          <span className="number">(19)</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check ps-0 m-0 category-list-box">
                        <input
                          className="checkbox_animated"
                          type="checkbox"
                          id="flexCheckDefault18"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault18"
                        >
                          <span className="name">3 pcs</span>
                          <span className="number">(14)</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check ps-0 m-0 category-list-box">
                        <input
                          className="checkbox_animated"
                          type="checkbox"
                          id="flexCheckDefault19"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault19"
                        >
                          <span className="name">
                            2 pcs Vacuum (140 g to 180 g each )
                          </span>
                          <span className="number">(13)</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check ps-0 m-0 category-list-box">
                        <input
                          className="checkbox_animated"
                          type="checkbox"
                          id="flexCheckDefault20"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault20"
                        >
                          <span className="name">4 pcs</span>
                          <span className="number">(18)</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check ps-0 m-0 category-list-box">
                        <input
                          className="checkbox_animated"
                          type="checkbox"
                          id="flexCheckDefault21"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault21"
                        >
                          <span className="name">
                            4 pcs Vacuum (140 g to 180 g each )
                          </span>
                          <span className="number">(07)</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check ps-0 m-0 category-list-box">
                        <input
                          className="checkbox_animated"
                          type="checkbox"
                          id="flexCheckDefault22"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault22"
                        >
                          <span className="name">6 pcs</span>
                          <span className="number">(09)</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check ps-0 m-0 category-list-box">
                        <input
                          className="checkbox_animated"
                          type="checkbox"
                          id="flexCheckDefault23"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault23"
                        >
                          <span className="name">6 pcs carton</span>
                          <span className="number">(11)</span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check ps-0 m-0 category-list-box">
                        <input
                          className="checkbox_animated"
                          type="checkbox"
                          id="flexCheckDefault24"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault24"
                        >
                          <span className="name">6 pcs Pouch</span>
                          <span className="number">(16)</span>
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >

  )
}
