import classNames from 'classnames/bind';
import styles from './DetailProduct.module.scss';

// Layout & Components
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Autoplay, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/thumbs';

// React & Hooks
import { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

// API
import { requestAddToCart, requestGetProductById } from '../../Config/request';

// UI Libraries
import { message } from 'antd';
import Rating from '@mui/material/Rating';

const cx = classNames.bind(styles);

function DetailProduct() {
    const ref = useRef();
    const { id } = useParams();
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);

    // Dữ liệu sản phẩm
    const [dataProduct, setDataProduct] = useState(null);

    // Tab hiển thị
    const [activeTab, setActiveTab] = useState(0);

    // Danh sách đánh giá mẫu
    const [reviews, setReviews] = useState([
        { name: 'Vương Quốc Hùng', rating: 5, comment: 'Sản phẩm rất đẹp, chất lượng tốt!', date: '20/02/2025' },
        {
            name: 'Huỳnh Minh Đăng',
            rating: 4,
            comment: 'Mình rất thích nhưng giao hàng hơi chậm.',
            date: '19/02/2025',
        },
    ]);

    // State cho form đánh giá
    const [newName, setNewName] = useState('');
    const [newComment, setNewComment] = useState('');
    const [newRating, setNewRating] = useState(0);

    // Xử lý thêm đánh giá
    const submitReview = () => {
        if (newName && newComment && newRating > 0) {
            const newReview = {
                name: newName,
                rating: newRating,
                comment: newComment,
                date: new Date().toLocaleDateString('vi-VN'),
            };

            setReviews([newReview, ...reviews]);
            setNewName('');
            setNewComment('');
            setNewRating(0);
        } else {
            alert('Vui lòng điền đầy đủ thông tin và chọn số sao!');
        }
    };

    // Lấy dữ liệu sản phẩm từ API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await requestGetProductById(id);
                setDataProduct(res.metadata);
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu sản phẩm:', error);
            }
        };
        fetchData();
        // Scroll lên đầu trang
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    }, [id]);

    // Xử lý thêm vào giỏ hàng
    const handleAddToCart = async () => {
        try {
            await requestAddToCart({ productId: id, quantity: 1 });
            message.success('Thêm vào giỏ hàng thành công');
        } catch (error) {
            message.error('Thêm vào giỏ hàng thất bại');
        }
    };

    // Nếu chưa có dataProduct thì hiển thị loading
    if (!dataProduct) return <div>Đang tải...</div>;

    return (
        <div className={cx('wrapper')}>
            <Header />

            <main className={cx('main')} ref={ref}>
                <div className={cx('inner')}>
                    {/* Khu vực hiển thị chi tiết sản phẩm */}
                    <div className={cx('detail-product-container')}>
                        {/* Cột bên trái: Hình ảnh sản phẩm */}
                        <div className={cx('left-col')}>
                            {/* Slider chính sử dụng tính năng thumbs */}
                            <Swiper
                                slidesPerView={1}
                                autoplay={{ delay: 2000, disableOnInteraction: false }}
                                loop
                                speed={1000}
                                effect="fade"
                                navigation
                                pagination={{ clickable: true }}
                                modules={[EffectFade, Navigation, Pagination, Autoplay, Thumbs]}
                                thumbs={{ swiper: thumbsSwiper }}
                                className="mainSwiper"
                            >
                                {dataProduct.images?.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <img src={item} alt={`Product Image ${index}`} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            {/* Slider thumbnails */}
                            <Swiper
                                onSwiper={setThumbsSwiper}
                                slidesPerView={4}
                                spaceBetween={10}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[Thumbs]}
                                className="thumbsSwiper"
                                style={{ marginTop: '10px' }}
                            >
                                {dataProduct.images?.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <img src={item} alt={`Thumbnail ${index}`} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        {/* Cột bên phải: Thông tin, giá, khuyến mãi, ... */}
                        <div className={cx('right-col')}>
                            <h1 className={cx('product-name')}>{dataProduct.name}</h1>
                            <p className={cx('product-price')}>{dataProduct.price?.toLocaleString()}đ</p>

                            {/* Hiển thị sao đánh giá */}
                            {/* <h4>Đánh giá: </h4>
                            <div className={cx('rating')}>
                                <Rating
                                    name="read-only"
                                    value={dataProduct.rating || 4} // Giá trị từ API
                                    precision={0.1} // Hiển thị dấu thập phân
                                    readOnly
                                />
                                <span className={cx('rating-value')}>{dataProduct.rating?.toFixed(1) || '20'}k</span>
                            </div> */}

                            <h4>Đánh giá: </h4>
                            <div className={cx('rating')}>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <span key={index} className={cx('star-icon')}>
                                        {index < Math.floor(dataProduct.rating || 5) ? '⭐' : '☆'}
                                    </span>
                                ))}
                                <span className={cx('rating-value')}>{dataProduct.rating?.toFixed(1) || 'Lượt đánh giá: 2'}</span>
                            </div>

                            {/* Lựa chọn màu sắc */}
                            {/* <div className={cx('colors')}>
                                <h4>Màu sắc</h4>
                                <div className={cx('color-list')}>
                                    {(dataProduct.colors && dataProduct.colors.length > 0
                                        ? dataProduct.colors
                                        : ['black', 'white', 'gray', 'blue']
                                    ) // Nếu chưa có dữ liệu, dùng màu mẫu
                                        .map((color, idx) => (
                                            <div
                                                key={idx}
                                                className={cx('color-item', { active: selectedColor === color })}
                                                style={{ backgroundColor: color }}
                                                onClick={() => setSelectedColor(color)}
                                            />
                                        ))}
                                </div>
                            </div> */}

                            <br />

                            {/* Ví dụ bullet mô tả */}
                            <ul className={cx('benefits')}>
                                <li>Tặng bảo hành full 1 đổi 1 trong 30 ngày , bảo hành 06 tháng</li>
                                <li>Tặng khách hàng mua máy vào đúng ngày sinh nhật voucher 1.000.000đ</li>
                                <li>Tặng 01 lần thay pin trị giá tới 1 triệu</li>
                                <li>Hỗ trợ thu lại lên đời giá cao, kiểm tra nhanh, có thương lượng</li>
                                <li>Hỗ trợ giao hàng nhanh, ship hoả tốc, miễn phí giao hàng (*)</li>
                            </ul>
                            {/* Khối khuyến mãi hoặc gói bảo hành */}
                            <div className={cx('warranty')}>
                                <h4>Khuyến mãi nổi bật</h4>
                                <p>- Giảm ngay 1,500,000đ áp dụng đến 18/04 </p>
                                <p>- Trả góp 0%</p>
                            </div>
                            {/* Button mua ngay và thêm giỏ hàng */}
                            <div className={cx('button-group')}>
                                <Link to="/checkout">
                                    <button className={cx('buy-now')}>Mua ngay</button>
                                </Link>

                                <button className={cx('add-cart')} onClick={handleAddToCart}>
                                    Thêm vào giỏ hàng
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Tabs Thông tin, Thông số, Đánh giá, Chi nhánh */}
                    <div className={cx('tabs')}>
                        <div className={cx('tab-buttons')}>
                            {[
                                // 'Thông tin chi tiết',
                                'Thông số kĩ thuật',
                                `Đánh giá (${reviews.length || 0})`,
                            ].map((label, index) => (
                                <span
                                    key={index}
                                    className={activeTab === index ? cx('active') : ''}
                                    onClick={() => setActiveTab(index)}
                                >
                                    {label}
                                </span>
                            ))}
                        </div>

                        {/* Nội dung từng tab */}
                        {/* Tab Thông tin */}
                        {/* {activeTab === 0 && (
                            <div className={cx('tab-content')}>
                                <p>
                                    {dataProduct.description ||
                                        'Cộng sự bền bỉ với thiết kế chắc chắn iPhone 16e được chế tác từ nhôm chuẩn hàng không vũ trụ, đảm bảo độ nhẹ nhàng khi cầm nắm, đồng thời rất bền bỉ trước các sự cố bất ngờ. Toàn bộ màn hình đều được bảo vệ bởi kính Ceramic Shield nhằm giảm thiểu hư hại do va đập. Ngoài ra, sản phẩm còn đạt chuẩn chống nước và bụi, sẵn sàng đồng hành cùng bạn trong mọi điều kiện môi trường. Apple trang bị nút thêm Tác Vụ tiện dụng bên cạnh iPhone 16e nhằm giúp bạn nhanh chóng khởi chạy ứng dụng yêu thích, kích hoạt chế độ im lặng hoặc truy cập Apple Intelligence chỉ với một thao tác. Cổng USB-C hỗ trợ sạc nhanh và truyền dữ liệu tốc độ cao, giúp bạn kết nối thiết bị theo cách dễ dàng hơn bao giờ hết..'}
                                </p>
                            </div>
                        )} */}

                        {/* Tab Thông số kĩ thuật */}
                        {activeTab === 0 && (
                            <div className={cx('specs')}>
                                <div>
                                    <h5>Bộ xử lý CPU</h5>
                                    <p>{dataProduct.cpu}</p>
                                </div>
                                <div>
                                    <h5>GPU</h5>
                                    <p>{dataProduct.gpu}</p>
                                </div>
                                <div>
                                    <h5>RAM</h5>
                                    <p>{dataProduct.ram}</p>
                                </div>
                                <div>
                                    <h5>Ổ cứng</h5>
                                    <p>{dataProduct.storage}</p>
                                </div>
                                <div>
                                    <h5>Màn hình</h5>
                                    <p>{dataProduct.screen}</p>
                                </div>
                                <div>
                                    <h5>Tần số màn hình</h5>
                                    <p>{dataProduct.screenHz}</p>
                                </div>
                                <div>
                                    <h5>Camera</h5>
                                    <p>{dataProduct.camera}</p>
                                </div>
                                <div>
                                    <h5>Kích thước</h5>
                                    <p>{dataProduct.weight}</p>
                                </div>
                                <div>
                                    <h5>Pin</h5>
                                    <p>{dataProduct.battery}</p>
                                </div>
                            </div>
                        )}

                        {/* Tab Đánh giá */}
                        {activeTab === 1 && (
                            <div className={cx('review-wrapper')}>
                                {/* Danh sách đánh giá */}
                                <div className={cx('review-list')}>
                                    {reviews.length > 0 ? (
                                        reviews.map((review, index) => (
                                            <div key={index} className={cx('review-item')}>
                                                <div className={cx('review-head')}>
                                                    <span className={cx('reviewer')}>{review.name}</span>
                                                    <Rating
                                                        name="read-only"
                                                        value={review.rating}
                                                        size="small"
                                                        readOnly
                                                    />
                                                </div>
                                                <p className={cx('review-comment')}>{review.comment}</p>
                                                <span className={cx('review-date')}>{review.date}</span>
                                            </div>
                                        ))
                                    ) : (
                                        <p className={cx('no-review')}>Chưa có đánh giá nào.</p>
                                    )}
                                </div>

                                {/* Form đánh giá */}
                                <div className={cx('review-form')}>
                                    <h4>Viết đánh giá của bạn</h4>
                                    <Rating
                                        name="user-rating"
                                        value={newRating}
                                        onChange={(event, newValue) => setNewRating(newValue)}
                                    />
                                    <input
                                        type="text"
                                        className={cx('input')}
                                        placeholder="Nhập tên của bạn"
                                        value={newName}
                                        onChange={(e) => setNewName(e.target.value)}
                                    />
                                    <textarea
                                        className={cx('textarea')}
                                        placeholder="Nhập đánh giá của bạn"
                                        rows="3"
                                        value={newComment}
                                        onChange={(e) => setNewComment(e.target.value)}
                                    ></textarea>
                                    <button className={cx('submit-btn')} onClick={submitReview}>
                                        Gửi đánh giá
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default DetailProduct;
