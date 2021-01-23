import React from 'react';
import './Store.css';
function Store() {
  return (
    <div className="store">
      <h1>CỬA HÀNG</h1>
      <div className="store__content">
        <div className="store__content__text">
          <h2>HE COFFEE HOUSE SIGNATURE</h2>
          <p>
            Với những nghệ nhân rang tâm huyết và đội ngũ Barista tài năng cùng
            những câu chuyện cà phê đầy cảm hứng, ngôi nhà Signature 19B Phạm
            Ngọc Thạch, Q.3, TP.HCM là không gian dành riêng cho những ai trót
            yêu say đắm hương vị của những hạt cà phê tuyệt hảo.
          </p>
        </div>
        <div className="store__content__image">
          <img
            src="http://file.hstatic.net/1000075078/file/3e0a8783_master.jpg"
            alt="store-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Store;
