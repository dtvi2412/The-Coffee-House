import React from 'react';
import './Footer.css';
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__top">
          <div className="footer__logo">
            <h1>THE COFFEE HOUSE</h1>
          </div>
          <div className="footer__about">
            <h2>ABOUT</h2>
            <ul>
              <li>
                <a href="#">Về Chúng Tôi</a>
              </li>
              <li>
                <a href="#">Hạt cà phê The Coffee House</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Cơ hội Nghề Nghiệp</a>
              </li>
              <li>
                <a href="#">Cửa Hàng</a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="http://theme.hstatic.net/1000075078/1000610097/14/gov.png?v=655"
                    alt="logo"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__information">
            <div className="footer__support">
              <h2>Always-on Support</h2>
              <p>Delivery 1800 6936 (07:00-21:00)</p>
              <p>Support 028.71.087.088 (07:00-21:00)</p>
            </div>
            <div className="footer__address">
              <h2>ADDRESS</h2>
              <p>
                86 - 88 Cao Thang, Ward 4, District 3, Ho Chi Minh, Vietnam.
              </p>
              <p>
                Head Office 2: 62 Tran Quang Khai, Tan Dinh Ward, District 1 Ho
                Chi Minh, Vietnam.
              </p>
              <p>+842871 078 079</p>
              <p>hi@thecoffeehouse.vn</p>
            </div>
          </div>
          <div className="footer__delivery">
            <h2>Delivery</h2>
            <ul>
              <li>
                <a href="#">Shipping methods</a>
              </li>
              <li>
                <a href="#">Payment</a>
              </li>
              <li>
                <a href="#">Cash voucher</a>
              </li>
              <li>
                <a href="#">Return</a>
              </li>
              <li>
                <a href="#">Exchange</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p>Copyright © 2020 The Coffee House. All rights reserved.</p>
          <div className="footer__bottom__text">
            <h2>Privacy Policy</h2>
            <h2 className="ter"> Terms of Use</h2>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
