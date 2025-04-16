
import { Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import { formatCurrency } from '~/utils/formatCurrency';

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
                <i className="ri-eye-line" />
              </Link>
            </li>
            <li>
              <Link to={`/admin/edit-product/${product.id}`}>
                <i className="ri-pencil-line" />
              </Link>
            </li>
            <li>
              <Link onClick={() => { deleteProduct(product); }} data-bs-toggle="modal" data-bs-target="#exampleModalToggle">
                <i className="ri-delete-bin-line" />
              </Link>
            </li>
          </ul>
        </td>
      </tr>
    </>
  )
}
