import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

import logo from '../../assets/images/logo.png';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('info')}>
                    <img src={logo} alt="" />
                    <ul>
                        <li>
                            Hệ thống bán lẻ smartphone, máy tính bảng, MacBook, thiết bị công nghệ chính hãng với giá
                            tốt, có trả góp 0%, giao hàng nhanh miễn phí.
                        </li>

                        <li>Email: Dahu123@gmail.com</li>
                        <li>Hotline tư vấn: 0296.345.696</li>
                        <li>Thời gian làm việc: 8h30 – 21h30</li>
                    </ul>
                </div>
                <div className={cx('support')}>
                    <h4>HỖ TRỢ KHÁCH HÀNG</h4>
                    <ul>
                        <li>Giới thiệu</li>
                        <li>Hướng dẫn mua hàng</li>
                        <li>Bán hàng Doanh Nghiệp</li>
                        <li>Mua trả góp</li>
                        <li>Tin công nghệ</li>
                        <li>Trung tâm dịch vụ sửa chữa</li>
                        <li>Liên hệ</li>
                    </ul>
                </div>
                <div className={cx('policy')}>
                    <h4>CHÍNH SÁCH</h4>
                    <ul>
                        <li>Chính sách Bảo Hành & Đổi Trả</li>
                        <li>Chính sách đặt hàng</li>
                        <li>Chính sách vận chuyển</li>
                        <li>Chính sách bảo mật thông tin</li>
                        <li>Chính sách thanh toán</li>
                    </ul>
                </div>
                <div className={cx('address')}>
                    <h4>Cần Thơ:</h4>
                    <ul>
                        <li>Cơ sở 1: 113 Hưng Lợi, Quận Ninh Kiều, Cần Thơ. <br /> SĐT: 0296.998.877</li>
                        <li>Cơ sở 2: 99 Nguyễn Trãi, Rạch Giá, Kiên Giang. <br /> SĐT: 0296.123.666</li>
                        <li>Cơ sở 3: 99 Lê Lợi, Châu Đốc, An Giang. <br /> SĐT: 0296.232.431</li>
                        <li>Cơ sở 4: 186 Võ Văn Kiệt, Quận 3, TP Hồ Chí Minh. <br />SĐT: 0296.667.899</li>
                    </ul>
                </div>
            </div>

            <p className={cx('copyright')}>Niên Luận Ngành - CT250 - 2025</p>
        </div>
    );
}

export default Footer;
