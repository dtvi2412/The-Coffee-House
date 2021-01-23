import React from 'react';
import './Menu.css';
import AcUnitIcon from '@material-ui/icons/AcUnit';
function Menu() {
  const coffeeMilk = [
    {
      id: 0,
      image:
        '//product.hstatic.net/1000075078/product/tra_buoi_5c4c5ce2d4e44042a069ec9011ef1a9f_large.jpg',
      name: 'TRÀ OOLONG BƯỞI MẬT ONG',
      price: 50000,
      selling: false,
    },
    {
      id: 1,
      image:
        '//product.hstatic.net/1000075078/product/macca_d56d5ab8dde4455aa7f19d29b5fff763_large.jpg',
      name: 'TRÀ SỮA MẮC CA TRÂN CHÂU TRẮNG',
      price: 45000,
      selling: true,
    },
    {
      id: 2,
      image:
        '//product.hstatic.net/1000075078/product/tra_dao_5f3925d9bfca4d0abc17f95b05fff5f7_large.jpg',
      name: 'TRÀ ĐÀO CAM SÀ',
      price: 45000,
      selling: true,
    },
    {
      id: 3,
      image:
        '//product.hstatic.net/1000075078/product/merry-coffee_1x1_77bfcd5059c040faade5b105dfb623d1_large.jpg',
      name: 'CÀ PHÊ LÚA MẠCH ĐÁ',
      price: 69000,
      selling: false,
    },
    {
      id: 4,
      image:
        '//product.hstatic.net/1000075078/product/espressonong_f60fc6f25baa404c8a8bfc40c396f27e_large.jpg',
      name: 'ESPRESSO',
      price: 35000,
      selling: false,
    },
    {
      id: 5,
      image:
        '//product.hstatic.net/1000075078/product/mocha_da_a2913936f9d84d07b63ac1ddf5dd2d0f_large.jpg',
      name: 'MOCHA',
      price: 49000,
      selling: false,
    },
  ];
  const renderItem = () => {
    return coffeeMilk.map((item, index) => {
      return (
        <div className="menu__item" key={index}>
          <img src={item.image} alt={`image:${item.image}`} />
          {item.selling && (
            <div className="selling">
              <AcUnitIcon />
              <span>BÁN CHẠY NHẤT</span>
            </div>
          )}
          <h1>{item.name}</h1>
          <span>
            {item.price.toLocaleString('vi', {
              style: 'currency',
              currency: 'VND',
            })}
          </span>
          <div className="menu__onSubmit">
            <button className="sell">MUA NGAY</button>
            <button className="research">TÌM HIỂU THÊM</button>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="menu">
      <div className="menu__content">
        <div className="menu__name">
          <h1>MENU</h1>
          <span>XEM TẤT CẢ SẢN PHẨM</span>
        </div>
        <div className="menu__items">{renderItem()}</div>
      </div>
    </div>
  );
}

export default Menu;
