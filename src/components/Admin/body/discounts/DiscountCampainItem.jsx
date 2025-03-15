import { Link } from 'react-router-dom';

export default function discountCampainItem({ discountCampainItem, deleteDiscountCampain }) {
  return (
    <>
      <tr key={discountCampainItem.id}>
        <td>{discountCampainItem.name}</td>
        <td>{discountCampainItem.startDate}</td>
        <td>{discountCampainItem.endDate}</td>
        <td className={discountCampainItem.active === false ? 'status-danger' : 'status-close'}>
          <span>{discountCampainItem.active === false ? 'Inactive' : 'Active'}</span>
        </td>
        <td>
          <ul>
            {/* <li>
              <Link to={`/view-product/${product.id}`}>
                <i className="ri-eye-line" />
              </Link>
            </li> */}
            <li>
              <Link to={`/admin/edit-product/${discountCampainItem.id}`}>
                <i className="ri-pencil-line" />
              </Link>
            </li>
            <li>
              <Link onClick={() => { deleteDiscountCampain(discountCampainItem); }} data-bs-toggle="modal" data-bs-target="#exampleModalToggle">
                <i className="ri-delete-bin-line" />
              </Link>
            </li>
          </ul>
        </td>
      </tr>
    </>
  )
}
