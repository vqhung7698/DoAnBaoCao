import classNames from 'classnames/bind';
import styles from './ProductsHome.module.scss';
import CardBody from '../../CardBody/CardBody';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { requestGetProducts } from '../../../Config/request';

const cx = classNames.bind(styles);

function ProductsHome() {
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [newProducts, setNewProducts] = useState([]);
    const [bestSellingProducts, setBestSellingProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await requestGetProducts(); // Lấy toàn bộ sản phẩm

            // Xáo trộn danh sách sản phẩm
            const shuffled = [...res.metadata].sort(() => 0.5 - Math.random());

            // Lấy 4 sản phẩm đầu tiên cho "nổi bật"
            const featured = shuffled.slice(0, 4);

            // Lấy 4 sản phẩm tiếp theo cho "mới"
            const newOnes = shuffled.slice(4, 8);

            // Lấy 4 sản phẩm tiếp theo cho "bán chạy"
            const bestSelling = shuffled.slice(8, 12);

            setFeaturedProducts(featured);
            setNewProducts(newOnes);
            setBestSellingProducts(bestSelling);
        };
        fetchData();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Sản phẩm nổi bật */}
                <div>
                    <div className={cx('title')}>
                        <h2>Sản phẩm nổi bật</h2>
                    </div>
                    <div className={cx('card-body')}>
                        {featuredProducts.map((item) => (
                            <CardBody key={item._id} item={item} />
                        ))}
                    </div>
                </div>
                <br />
                {/* Sản phẩm mới */}
                <div>
                    <div className={cx('title')}>
                        <h2>Sản phẩm mới</h2>
                    </div>
                    <div className={cx('card-body')}>
                        {newProducts.map((item) => (
                            <CardBody key={item._id} item={item} />
                        ))}
                    </div>
                </div>
                <br />
                {/* Sản phẩm bán chạy */}
                <div>
                    <div className={cx('title')}>
                        <h2>Sản phẩm bán chạy</h2>
                    </div>
                    <div className={cx('card-body')}>
                        {bestSellingProducts.map((item) => (
                            <CardBody key={item._id} item={item} />
                        ))}
                    </div>
                </div>

                {/* Button xem tất cả */}
                <div className={cx('button-group')}>
                    <Link to="/category">
                        <button>Xem tất cả</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProductsHome;
