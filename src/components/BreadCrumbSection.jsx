import { Link } from 'react-router-dom';

export default function BreadCrumb(props) {
  return (
    <section className="breadscrumb-section pt-0">
      <div className="container-fluid-lg">
        <div className="row">
          <div className="col-12">
            <div className="breadscrumb-contain">
              <h2>{props.title}</h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/">
                      <i className="fa-solid fa-house" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item active">
                    {props.page}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
