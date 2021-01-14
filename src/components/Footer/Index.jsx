import SocialLink from '../SocialLink';


const Footer = () => (
  <footer>
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <ul className="sociel">
              <SocialLink/>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
            <div className="contact">
                <h3>contact us</h3>
                <span>123 Second Street Fifth Avenue,<br/>
                  Manhattan, New York<br/>
                  +987 654 3210
                </span>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
            <div className="contact">
              <h3>ADDITIONAL LINKS</h3>
              <ul className="lik">
                <li><a href="#about">About us</a></li>
                <li><a href="#term&conditions">Terms and conditions</a></li>
                <li><a href="#privacy&policy">Privacy policy</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact us</a></li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
            <div className="contact">
              <h3>service</h3>
              <ul className="lik">
                <li><a href="#data"> Data recovery</a></li>
                <li><a href="#repair">Computer repair</a></li>
                <li><a href="#service">Mobile service</a></li>
                <li><a href="#solutions">Network solutions</a></li>
                <li><a href="#support">Technical support</a></li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
            <div className="contact">
              <h3>About lighten</h3>
              <span>Tincidunt elit magnis nulla facilisis. Dolor Sapien nunc amet ultrices, </span>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright {new Date().getFullYear()} All Right Reserved By <a href="#template">Free html Templates</a></p>
      </div>   
    </div>
  </footer>
)

export default Footer;