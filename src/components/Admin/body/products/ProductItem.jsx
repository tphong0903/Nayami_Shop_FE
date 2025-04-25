
import { Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import { formatCurrency } from '~/utils/formatCurrency';
import InfoIcon from '@mui/icons-material/Info';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
export default function ProductItem({ product, deleteProduct }) {
  return (
    <>
      <tr key={product.id}>
        <td>
          <div className="table-image">
            <img
              src={product.listImage && product.listImage.length > 0 ? product.listImage[0] : null}
              className="img-fluid"
              alt={product.name}
            />
          </div>
        </td>
        <Tooltip title={product.name} arrow>
          <td style={{
            padding: '0px',
            margin: '15px',
            maxWidth: '300px',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'normal',
            wordBreak: 'break-word',
            cursor: 'pointer'
          }}>
            {product.name}
          </td>
        </Tooltip>
        <td>{product.categoryDTO.categoryName}</td>
        <td>{product.quantity}</td>
        <td className="td-price">{formatCurrency(product.unitPrice)}</td>
        <td className={product.displayStatus === false ? 'status-danger' : 'status-close'}>
          <span>{product.displayStatus === false ? 'Inactive' : 'Active'}</span>
        </td>
        <td>
          <ul>
            <li>
              <Link to={`/admin/view-product/${product.id}`}>
                <InfoIcon />
              </Link>
            </li>
            <li>
              <Link to={`/admin/edit-product/${product.id}`}>
                <EditIcon />
              </Link>
            </li>
            <li>
              <Link onClick={() => { deleteProduct(product); }} className="text-danger" data-bs-toggle="modal" data-bs-target="#exampleModalToggle">
                {product.displayStatus === false ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
              </Link>
            </li>
          </ul>
        </td>
      </tr>
    </>
  )
}
