export default function BreadCrumb() {
  return (
    <section className="breadscrumb-section pt-0">
      <div className="container-fluid-lg">
        <div className="row">
          <div className="col-12">
            <div className="breadscrumb-contain">
              <h2>Creamy Chocolate Cake</h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <a href="index.html">
                      <i className="fa-solid fa-house" />
                    </a>
                  </li>
                  <li className="breadcrumb-item active">
                      Creamy Chocolate Cake
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
