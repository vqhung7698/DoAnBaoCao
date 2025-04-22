import classNames from 'classnames/bind';
import styles from './Introduce.module.scss';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Chatbot from '../../utils/chatbot';
import BackToTop from '../../utils/BackToTop';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function Introduce() {
    useEffect(() => {
        window.scrollTo(0, 0); // Cuộn trang lên đầu mỗi khi URL thay đổi
    }, [location]);

    return (
        <div className={cx('wrapper')}>
            <header>
                <Header />
            </header>

            <main className={cx('main')}>
                <div>
                    <h1>Giới thiệu về DaHu</h1>
                    <h3>1. Thương hiệu điện thoại</h3>
                    <h4> Apple (iPhone):</h4>
                    <p>
                        Các mẫu iPhone từ phiên bản mới nhất cho đến những dòng sản phẩm kinh điển, luôn được cập nhật
                        với công nghệ tiên tiến, thiết kế tinh tế và hệ sinh thái độc đáo.
                    </p>
                    <h4> Samsung:</h4>
                    <p>
                        Sản phẩm thuộc dòng Galaxy S, Galaxy Note hay Galaxy A, nổi bật với công nghệ màn hình, camera
                        và hiệu năng vượt trội, phục vụ nhiều nhu cầu từ giải trí đến công việc chuyên sâu. Huawei: Các
                        mẫu điện thoại với thiết kế hiện đại, tích hợp nhiều công nghệ AI, khả năng chụp ảnh ấn tượng và
                        hiệu suất ổn định, phù hợp với những khách hàng đòi hỏi sự sáng tạo và chất lượng.
                    </p>
                    <h4> Xiaomi:</h4>
                    <p>
                        Những sản phẩm cân bằng giữa giá trị và hiệu năng, được ưa chuộng nhờ tính năng hiện đại, thiết
                        kế trẻ trung và mức giá cạnh tranh, phù hợp với đa dạng đối tượng người dùng.
                    </p>
                    <h4> Oppo</h4>
                    <p>
                        Những thương hiệu tiên phong trong việc tích hợp công nghệ camera tiên tiến, mang đến trải
                        nghiệm người dùng mượt mà với thiết kế tinh tế và nhiều lựa chọn về mẫu mã.
                    </p>
                    <h3>2. Thương hiệu laptop</h3>
                    <h4> Apple (MacBook):</h4>
                    <p>
                        Các dòng MacBook Air và MacBook Pro luôn được đánh giá cao về thiết kế, hiệu năng và hệ sinh
                        thái phần mềm độc quyền, phù hợp cho cả công việc lẫn giải trí.
                    </p>
                    <h4> Dell:</h4>
                    <p>
                        Dòng laptop như Inspiron và XPS cung cấp hiệu năng mạnh mẽ, độ bền cao và thiết kế chuyên
                        nghiệp, đáp ứng nhu cầu của người dùng doanh nghiệp lẫn cá nhân.
                    </p>
                    <h4> Lenovo: </h4>
                    <p>
                        Các dòng ThinkPad nổi tiếng với độ bền và khả năng xử lý mạnh mẽ, cùng với các dòng IdeaPad thân
                        thiện với người dùng, phù hợp cho cả môi trường công sở và giải trí.
                    </p>
                    <h4>Asus:</h4>
                    <p>
                        Được biết đến với những sản phẩm gaming laptop và ultrabook thời thượng, Asus mang đến thiết kế
                        trẻ trung, hiệu năng cao và trải nghiệm người dùng tuyệt vời.
                    </p>

                    <hr />

                    <h3>Cam kết của DaHu dù bạn lựa chọn thương hiệu nào, DaHu luôn đảm bảo:</h3>
                    <p>
                        Chất lượng sản phẩm: Mỗi thiết bị đều là hàng chính hãng, được kiểm định nghiêm ngặt để đảm bảo
                        hiệu suất và độ bền. Dịch vụ tư vấn: Đội ngũ nhân viên giàu kinh nghiệm luôn sẵn sàng hỗ trợ
                        khách hàng lựa chọn sản phẩm phù hợp với nhu cầu và ngân sách. Hậu mãi chuyên nghiệp: Chính sách
                        bảo hành và dịch vụ sửa chữa, bảo dưỡng nhanh chóng giúp khách hàng yên tâm sử dụng sản phẩm
                        trong thời gian dài. Với mục tiêu mang đến trải nghiệm mua sắm toàn diện, DaHu không chỉ là nơi
                        cung cấp các sản phẩm công nghệ đẳng cấp mà còn là đối tác tin cậy đồng hành cùng những tín đồ
                        công nghệ. Hãy đến với DaHu để khám phá thêm nhiều lựa chọn đa dạng và nhận được sự tư vấn nhiệt
                        tình từ đội ngũ chuyên gia của chúng tôi!
                    </p>
                </div>
            </main>

            <Chatbot />
            <BackToTop />

            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Introduce;
