import { Link } from '@reach/router';
import data from '../../Data';
import SocialLink from '../SocialLink';


const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        style: {
          color: isCurrent ? "#FFCD21" : ""
        }
      };
    }}
  />
);


const Navigation = () => {
  return (
    <header>
      {/* HEADER INNER  */}
      <div className="header pb-0">
        <div className="head_top mb-0">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className="top-box">
                  <ul className="sociel_link">
                    {
                      <SocialLink/>
                    }
                  </ul>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className="top-box">
                  <p>{data.header.topHeader.text}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row py-4">
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
              <div className="full">
                <div className="center-desk">
                  <div className="logo">
                    <Link to="/">
                      <img
                        src={data.header.logo}
                        alt="logo"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-md-9 col-sm-9">
              <div className="menu-area">
                <div className="limit-box">
                  <nav className="main-menu">
                    <ul className="menu-area-main">
                      <li className="active"> <Link className="link" to="/" href="#index">Home</Link> </li>
                      <li><NavLink className="link" to="/about">About</NavLink></li>
                      <li><NavLink className="link" to="/product">product</NavLink> </li>
                      <li><NavLink className="link" to="/blog"> Blog</NavLink> </li>
                      <li><NavLink className="link" to="/contact">Contact</NavLink> </li>
                      <li className="mean-last"> <Link to="/contact">signup</Link> </li>       
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
              <li><a className="buy" href="#hello">Login</a></li>
            </div>
        </div>
      </div>
      {/* END HEADER INNER */}
    </header>
  );
};

export default Navigation;