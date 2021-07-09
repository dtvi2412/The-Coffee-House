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
        '//product.hstatic.net/1000075078/product/cafe-sua-da_9073dfe2143d428a91a370e79df77e49_large.jpg',
      name: 'CÀ PHÊ SỮA',
      price: 32000,
      selling: true,
    },
    {
      id: 2,
      image:
        '//product.hstatic.net/1000075078/product/ca_phe_goi_the_coffee_house_rich_finish_cc60d3ae46b94696b12856503529b71c_large.jpg',
      name: 'Cà Phê Rich Finish - Gu Đậm Tinh Tế',
      price: 90000,
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
        '//product.hstatic.net/1000075078/product/ca_phe_goi_the_coffee_house_huong_thom_dinh_cao_peak_flavour_c545070f1d654cc7b3256ae145f184a7_large.jpg',
      name: 'Cà phê Peak Flavor - Hương Thơm Đỉnh Cao',
      price: 90000,
      selling: false,
    },
    {
      id: 5,
      image:
        '//product.hstatic.net/1000075078/product/ca_phe_lon_the_coffee_hous_d0fb16a38de14dafbb3fb52ff91c9e20_large.jpg',
      name: 'Combo 4 Lon Cà Phê Sữa Đá',
      price: 56000,
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
