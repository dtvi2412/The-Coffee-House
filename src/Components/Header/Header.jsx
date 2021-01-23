import React, { useState } from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
function Header() {
  const [hambuger, setHambuger] = useState(false);
  return (
    <header className="header">
      <div className="header__content">
        {' '}
        <div className="header__logo">
          <a href="#">
            <h1>THE COFFEE HOUSE</h1>
          </a>
        </div>
        <div className="header__navbar">
          <nav className={`${hambuger ? 'navbar' : 'navbarOff'}`}>
            <ul>
              <li>
                <a href="#">CÂU CHUYỆN THƯƠNG HIỆU</a>
              </li>
              <li>
                <a href="#">CHUYỆN CÀ PHÊ</a>
              </li>
              <li>
                <a href="#">SẢN PHẨM</a>
              </li>
              <li>
                <a href="#">ƯU ĐÃI THÀNH VIÊN</a>
              </li>
              <li>
                <a href="#">TIN TỨC</a>
              </li>
              <li>
                <a href="#">TUYỂN DỤNG</a>
              </li>
              <li>
                <a href="#">CỬA HÀNG</a>
              </li>
              <li>
                <a href="#">
                  <SearchIcon />
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div
          className="buger"
          onClick={() => {
            setHambuger(!hambuger);
          }}
        >
          <div className={`${hambuger ? 'hambugerX' : 'hambuger'}`} />
        </div>
      </div>
    </header>
  );
}

export default Header;
