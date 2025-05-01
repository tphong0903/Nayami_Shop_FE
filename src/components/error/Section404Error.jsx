import React from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorImage from '~/assets/images/inner-page/404.png'

const Section404Error = () => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate('/');
  };

  return (
    <section className="section-404 section-lg-space">
      <div className="container-fluid-lg">
        <div className="row">
          <div className="col-12">
            <div className="image-404">
              <img
                src={ErrorImage}
                className="img-fluid lazyload"
                alt="404"
              />
            </div>
          </div>

          <div className="col-12">
            <div className="contain-404">
              <h3 className="text-content">
                The page you are looking for could not be found. The link to this address may be outdated or we may have moved the page since you last bookmarked it.
              </h3>
              <button
                onClick={handleBackHome}
                className="btn btn-md text-white theme-bg-color mt-4 mx-auto"
              >
                Back To Home Screen
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section404Error;
