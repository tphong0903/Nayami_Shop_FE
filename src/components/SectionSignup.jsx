import Hinh1 from '../assets/images/inner-page/log-in.png'
import GoogleImage from '../assets/images/inner-page/google.png'
import FaceBookImage from '../assets/images/inner-page/facebook.png'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

export default function SectionSignup() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSubmitSignup = async event => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/signup', {
        email: email,
        password: password,
        fullName: fullname,
        phoneNumber: phone
      });
      if (response.data.status == 201) {
        Swal.fire({
          icon: 'success',
          title: 'Thành công',
          text: 'Đăng ký thành công',
          timer: 3000,
          showConfirmButton: false,
        });
        const ENPOINT_REDIRECT_PAGE = '/login'
        navigate(ENPOINT_REDIRECT_PAGE);
      } else {
        window.alert(response.data.message);
      }
    } catch (err) {
      console.log(err)
      window.alert('Đăng ký không thành công');
    }
  }

  return (
    <section className="log-in-section section-b-space" >
      <div className="container-fluid-lg w-100">
        <div className="row">
          <div className="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
            <div className="image-contain">
              <img src={Hinh1} className="img-fluid" alt="Sign Up" />
            </div>
          </div>

          <div className="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
            <div className="log-in-box">
              <div className="log-in-title">
                <h3>Welcome To Fastkart</h3>
                <h4>Create New Account</h4>
              </div>

              <div className="input-box">
                <form className="row g-4" onSubmit={handleSubmitSignup}>
                  <div className="col-12">
                    <div className="form-floating theme-form-floating">
                      <input type="text" className="form-control" id="fullname" placeholder="Full Name" onChange={e => setFullname(e.target.value)} />
                      <label htmlFor="fullname">Full Name</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating theme-form-floating">
                      <input type="text" className="form-control" id="fullname" placeholder="Number phone" onChange={e => setPhone(e.target.value)} />
                      <label htmlFor="numberPhone">Number phone</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating theme-form-floating">
                      <input type="email" className="form-control" id="email" placeholder="Email Address" onChange={e => setEmail(e.target.value)} />
                      <label htmlFor="email">Email Address</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating theme-form-floating">
                      <input type="password" className="form-control" id="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                      <label htmlFor="password">Password</label>
                    </div>
                  </div>

                  {/*<div className="col-12">*/}
                  {/*  <div className="forgot-box">*/}
                  {/*    <div className="form-check ps-0 m-0 remember-box">*/}
                  {/*      <input className="checkbox_animated check-box" type="checkbox" id="flexCheckDefault" />*/}
                  {/*      <label className="form-check-label" htmlFor="flexCheckDefault">*/}
                  {/*        I agree with <span>Terms</span> and <span>Privacy</span>*/}
                  {/*      </label>*/}
                  {/*    </div>*/}
                  {/*  </div>*/}
                  {/*</div>*/}

                  <div className="col-12">
                    <button className="btn btn-animation w-100" type="submit">Sign Up</button>
                  </div>
                </form>
              </div>

              <div className="other-log-in">
                <h6>or</h6>
              </div>

              {/*<div className="log-in-button">*/}
              {/*  <ul>*/}
              {/*    <li>*/}
              {/*      <a href="/signup" className="btn google-button w-100">*/}
              {/*        <img src={GoogleImage} className="lazyload" alt="Google Sign Up" />*/}
              {/*        Sign up with Google*/}
              {/*      </a>*/}
              {/*    </li>*/}
              {/*    <li>*/}
              {/*      <a href="https://www.facebook.com/" className="btn google-button w-100">*/}
              {/*        <img src={FaceBookImage} className="lazyload" alt="Facebook Sign Up" />*/}
              {/*        Sign up with Facebook*/}
              {/*      </a>*/}
              {/*    </li>*/}
              {/*  </ul>*/}
              {/*</div>*/}

              <div className="sign-up-box">
                <h4>Already have an account?</h4>
                <a href="/login">Log In</a>
              </div>
            </div>
          </div>
          <div className="col-xxl-7 col-xl-6 col-lg-6"></div>
        </div>
      </div>
    </section>
  );
}
