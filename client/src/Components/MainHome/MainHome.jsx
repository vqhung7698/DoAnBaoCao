import classNames from 'classnames/bind';
import styles from './MainHome.module.scss';
import SlideHome from './SlideHome/SlideHome';
import ProductsHome from './ProductsHome/ProductsHome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { faDollarSign, faRotateRight, faThumbsUp, faTruck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function MainHome() {
    useEffect(() => {
        window.scrollTo(0, 0); // Cuộn trang lên đầu mỗi khi URL thay đổi
    }, [location]);

    return (
        <div className={cx('wrapper')}>
            <div>
                <SlideHome />
            </div>
            <div className={cx('title')}>
                <h3>DaHu - Hệ thống bán lẻ smartphone, máy tính bảng, MacBook, thiết bị công nghệ chính hãng.</h3>
            </div>

            <div>
                <ProductsHome />
            </div>

            <div className={cx('delivery')}>
                <div className={cx('inner-item')}>
                    <div className={cx('delivery-item')}>
                        <FontAwesomeIcon icon={faTruck} />
                        <div>
                            <h4>GIAO HÀNG TẬN NƠI</h4>
                            <p>Miễn phí giao hàng nội thành</p>
                        </div>
                    </div>

                    <div className={cx('delivery-item')}>
                        <FontAwesomeIcon icon={faRotateRight} />
                        <div>
                            <h4>ĐỔI TRẢ DỄ DÀNG</h4>
                            <p>Miễn phí đổi trong 10 ngày</p>
                        </div>
                    </div>

                    <div className={cx('delivery-item')}>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        <div>
                            <h4>HÀNG CHÍNH HÃNG</h4>
                            <p>Cam kết hàng chính hãng 100%</p>
                        </div>
                    </div>

                    <div className={cx('delivery-item')}>
                        <FontAwesomeIcon icon={faDollarSign} />
                        <div>
                            <h4>NHẬN HÀNG TRẢ TIỀN</h4>
                            <p>Tiền mặt, quẹt thẻ, chuyển khoản</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainHome;
