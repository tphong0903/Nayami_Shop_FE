import { Rating, Slider } from '@mui/material'
import axios from 'axios'
import { useEffect, useState, useRef } from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';

export default function LeftFillter({ setListProduct, currentPage, setTotalPage, setCurrentPage, sortBy, searchQuery }) {
  const [listSelectedOption, setListSelectedOption] = useState({
    listCategoriesSelected: [],
    listBrandsSelected: [],
    listDiscountsSelected: [],
    listRatingSelected: [],
  })
  const [listBrands, setListBrands] = useState([])
  const [listCategories, setListCategories] = useState([])
  const [listDiscounts, setListDiscounts] = useState([])
  const [listRating, setListRating] = useState([])
  const [valuePrice, setValuePrice] = useState([0, 100000000]);
  const [debouncedPrice, setDebouncedPrice] = useState(valuePrice);
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const categoryId = searchParams.get('categoryId') || '';
  const categoryName = searchParams.get('categoryName') || '';
  const brandId = searchParams.get('brandId') || '';
  const brandName = searchParams.get('brandName') || '';
  const hasAppliedFilters = useRef(false);
  useEffect(() => {
    if (categoryId || brandId) {
      hasAppliedFilters.current = true;
      if (categoryId) {
        clearAllSelectedOptions();
        handleSelected(categoryId, 'listCategoriesSelected', categoryName);
      }
      if (brandId) {
        handleSelected(brandId, 'listBrandsSelected', brandName);
      }
    }
    searchParams.delete('categoryId');
    searchParams.delete('categoryName');
    searchParams.delete('brandId');
    searchParams.delete('brandName');
    navigate({ search: searchParams.toString() }, { replace: true });
  }, [categoryId, brandId]);

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

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedPrice(valuePrice);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [valuePrice]);

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
    setCurrentPage(1)
  };

  useEffect(() => {
    const fetchFilterOptions = async () => {
      try {
        const response = await axios.get('/api/products/filterOption');
        const { listBrandDTO, listCategoryDTO, listQuantityProductOfDiscount, listQuantityProductOfRating } = response.data.data;

        setListBrands(listBrandDTO);
        setListCategories(listCategoryDTO);
        setListDiscounts(listQuantityProductOfDiscount);
        setListRating(listQuantityProductOfRating);
      } catch (error) {
        console.error('Lỗi khi fetch bộ lọc:', error);
      }
    };

    fetchFilterOptions();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    let url = '/api/products/filter'
    let params = [];
    if (listSelectedOption['listBrandsSelected'].length > 0) {
      params.push(
        listSelectedOption.listBrandsSelected
          .map((brand) => `brands=${encodeURIComponent(brand.name)}`)
          .join('&')
      );
    }

    if (listSelectedOption['listCategoriesSelected'].length > 0) {
      params.push(
        listSelectedOption.listCategoriesSelected
          .map((category) => `categories=${encodeURIComponent(category.name)}`)
          .join('&')
      );
    }

    if (listSelectedOption['listDiscountsSelected'].length > 0) {
      params.push(
        listSelectedOption.listDiscountsSelected
          .map((discount) => `discounts=${encodeURIComponent(discount.id)}`)
          .join('&')
      );
    }

    if (listSelectedOption['listRatingSelected'].length > 0) {
      params.push(
        listSelectedOption.listRatingSelected
          .map((rating) => `rating=${encodeURIComponent(rating.id)}`)
          .join('&')
      );
    }
    if (sortBy !== 'none') {
      params.push(`sortBy=${encodeURIComponent(sortBy)}`);
    }
    params.push(`pageNo=${currentPage}`)
    params.push(`price=${debouncedPrice[0]}`);
    params.push(`price=${debouncedPrice[1]}`);
    params.push(`search=${searchQuery}`);

    if (params.length > 0) {
      url += '?' + params.join('&');
    }
    axios
      .get(url)
      .then((response) => {
        const data = response.data.data.content;
        setListProduct(Array.isArray(data) ? data : []);
        setTotalPage(response.data.data.page.totalPages)
      })
  }, [listSelectedOption, setListProduct, currentPage, sortBy, debouncedPrice, searchQuery]);


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
              <Link onClick={clearAllSelectedOptions}>Clear All</Link>
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
                    {[...Array(6)].map((_, i) => (
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

          </div>
        </div>
      </div>
    </div >

  )
}
