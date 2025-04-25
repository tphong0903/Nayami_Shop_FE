import { Link } from 'react-router-dom';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
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
              <Link to={`/admin/edit-discounts/${discountCampainItem.id}`}>
                <EditIcon />
              </Link>
            </li>
            <li>
              <Link onClick={() => { deleteDiscountCampain(discountCampainItem); }} className="text-danger" data-bs-toggle="modal" data-bs-target="#exampleModalToggle">
                {discountCampainItem.active === false ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
              </Link>
            </li>
          </ul>
        </td>
      </tr>
    </>
  )
}
