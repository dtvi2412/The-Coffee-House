import React from 'react';
import './Blog.css';
function Blog() {
  const dataCardNews = [
    {
      id: 0,
      title: 'The Coffee House ra mắt phiên bản App mới',
      contentText:
        'Ngày 15/01/2021, The Coffee House chính thức ra mắt phiên bản App mới với mong muốn tối ưu trải nghiệm người dùng. Bạn cập nhật phiên bản App mới theo...',
      image:
        'http://file.hstatic.net/1000075078/article/banner_web1200x450_26e181d63dc34e33957c3a658f4844d6_c8a1633c7fa944b0ab4b22f265265f31_grande.jpg',
    },
    {
      id: 1,
      title: 'Chuỗi cửa hàng The Coffee House mới tinh, đợi bạn check-in!',
      contentText:
        'Team 3 miền đã cập nhật những cửa hàng The Coffee House mới mở gần bạn chưa?“Nghi thức” chào đón năm mới không thể thiếu những cuộc hẹn tổng kết...',
      image:
        'http://file.hstatic.net/1000075078/article/hinode_-_img_9322_4442b5f89bca4ff491f0444336b3f393_grande.jpg',
    },
    {
      id: 2,
      title: 'The Coffee House: Điểm lại những tin đáng chú ý trong năm 2020',
      contentText:
        'Khép lại 2020 - một năm tuy không dễ dàng nhưng The Coffee House tự hào vì luôn có bạn đồng hành để làm nên những con số không thể tuyệt...',
      image:
        'http://file.hstatic.net/1000075078/article/1200x450-1231-tch_f253e52a25d74445bf7261b6c46b7af1_c263ff8eb866450cb653796191ed4ade_grande.jpg',
    },
  ];
  const renderBlogCard = () => {
    return dataCardNews.map((item) => {
      return (
        <div className="blog__card" key={item.id}>
          <img src={item.image} alt={`hinh ${item.id}}`} />
          <div className="blog__card__text">
            <h2>TIN TỨC</h2>
            <h1>{item.title}</h1>
            <p>{item.contentText}</p>
            <button>XEM THÊM</button>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="blog">
      <div className="blog__content">
        <div className="blog__content__title">
          <h1>BLOG</h1>
          <span>XEM THÊM</span>
        </div>
        <div className="blog__bgImage">
          <img
            src="http://file.hstatic.net/1000075078/article/1120-tch-p1_1200x450_cf6d3a26460a400f87873f102b3c46e3_debed83e1e16465c85aa30918a8e04a8_1024x1024.jpg"
            alt="bgBlog"
          />
          <div className="blog__bgImage__title">
            <h5>TIN TỨC</h5>
            <h3>TASTE OF XMAS - CHẠM VỊ GIÁNG SINH</h3>
            <p>
              Không khí se lạnh lôi khắp ngõ ngách phố phường báo hiệu một mùa
              Giáng sinh nữa lại về. Giáng sinh năm nay có thể sẽ khác hơn, đặc
              biệt...
            </p>
            <button>XEM THÊM</button>
          </div>
        </div>
        <div className="blog__card__content">{renderBlogCard()}</div>
      </div>
    </div>
  );
}

export default Blog;
