import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './News.module.scss';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { useEffect } from 'react';
import Chatbot from '../../utils/chatbot';
import BackToTop from '../../utils/BackToTop';

const cx = classNames.bind(styles);

const newsData = [
    {
        id: 1,
        title: 'OPPO Find N5 ra mắt',
        date: '07/04/2025',
        summary: 'OPPO Find N5 tại Việt Nam: Thiết kế siêu mỏng, chip Snapdragon 8 Elite và pin lớn 5.600 mAh',
        image: 'https://resource.kinhtedothi.vn/2024/09/05/oppo-find-n5-leak.jpg',
    },
    {
        id: 2,
        title: 'Bản cập nhật iOS 18.4 đang làm phiền người dùng iPhone',
        date: '05/04/2025',
        summary:
            'Apple đã phải đối mặt với sự thất vọng từ người dùng khi bản cập nhật iOS 18.4 gây ra hiện tượng cài đặt ngẫu nhiên các ứng dụng trên iPhone.',
        image: 'https://media.vov.vn/sites/default/files/styles/large/public/2025-04/1_20.jpg',
    },
    {
        id: 3,
        title: 'Microsoft Surface Laptop 7 15',
        date: '28/03/2025',
        summary: 'Đánh giá Microsoft Surface Laptop 7 15: Bản Intel có đủ sức cạnh tranh hiệu năng với ARM?',
        image: 'https://cdn-media.sforum.vn/storage/app/media/haianh/icemag/danh-gia-microsoft-surface-laptop-7-15-1.jpg',
        content: 'iPad Pro 2025 được Apple giới thiệu với màn hình OLED chất lượng cao...',
    },
    {
        id: 4,
        title: 'Samsung chuẩn bị cho chiếc điện thoại “phá vỡ mọi nguyên tắc”',
        date: '27/01/2025',
        summary:
            'Samsung vừa đăng ký bằng sáng chế cho một mẫu smartphone có khả năng gập lại bốn lần để khẳng định tính sáng tạo của mình.',
        image: 'https://cdn.24h.com.vn/upload/2-2025/images/2025-04-03/1-1743651693-702-width740height495.jpg',
    },
];

function News() {
    const featuredNews = newsData[0]; // Tin nổi bật
    const otherNews = newsData.slice(1); // Các tin còn lại

    useEffect(() => {
        window.scrollTo(0, 0); // Cuộn trang lên đầu mỗi khi URL thay đổi
    }, [location]);

    return (
        <div className={cx('wrapper')}>
            <Header />

            <main className={cx('main')}>
                <h2>TIN MỚI NHẤT</h2>

                {/* Tin nổi bật */}
                <Link to={`/news/${featuredNews.id}`} className={cx('featured-news')}>
                    <img src={featuredNews.image} alt={featuredNews.title} className={cx('featured-image')} />
                    <h2 className={cx('featured-title')}>{featuredNews.title}</h2>
                    <p className={cx('news-date')}>{featuredNews.date}</p>
                    <p className={cx('featured-summary')}>{featuredNews.summary}</p>
                </Link>

                {/* Danh sách tin tức ô vuông */}
                <div className={cx('news-list')}>
                    {otherNews.map((news) => (
                        <Link to={`/news/${news.id}`} key={news.id} className={cx('news-item')}>
                            <img src={news.image} alt={news.title} className={cx('news-image')} />
                            <h2 className={cx('news-title')}>{news.title}</h2>
                            <p className={cx('news-date')}>{news.date}</p>
                            <p className={cx('news-summary')}>{news.summary}</p>
                        </Link>
                    ))}
                </div>
            </main>

            <Chatbot />
            <BackToTop />

            <Footer />
        </div>
    );
}

export default News;
