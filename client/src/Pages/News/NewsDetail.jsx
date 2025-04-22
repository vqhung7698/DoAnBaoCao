import { useParams, Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './NewsDetails.module.scss';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { useEffect } from 'react';
import Chatbot from '../../utils/chatbot';
import BackToTop from '../../utils/BackToTop';

const cx = classNames.bind(styles);

// Dữ liệu tin tức mẫu
const newsData = [
    {
        id: 1,
        title: 'OPPO Find N5 ra mắt: Thiết kế gập ngang mỏng nhất thế giới, hiệu năng hàng đầu',
        date: '07/04/2025',
        image: 'https://resource.kinhtedothi.vn/2024/09/05/oppo-find-n5-leak.jpg',
        content: [
            'OPPO Find N5 nổi bật với danh hiệu smartphone gập ngang mỏng nhất thế giới hiện nay, sở hữu độ dày chỉ 8,93mm và trọng lượng 229g, tạo cảm giác cầm nắm tương đồng với các thiết bị dạng thanh truyền thống.',
            'Để đạt được sự mỏng nhẹ này, OPPO đã trang bị cho Find N5 bộ khung hợp kim nhôm series 7, không chỉ mang lại sự chắc chắn mà còn tăng 30% độ bền so với thế hệ tiền nhiệm.',
            'Màn hình ngoài của Find N5 được bảo vệ bởi kính nanocrystal siêu bền, nâng cao khả năng chống chịu va đập lên tới 20%. Điểm nhấn đáng chú ý khác là công nghệ bản lề uốn cong hợp kim titan thế hệ mới.',
            'Theo OPPO, bản lề này có kích thước nhỏ hơn 26% nhưng độ cứng cáp tăng 36% so với thế hệ trước, đảm bảo sự ổn định và chắc chắn trong quá trình gập mở.',
            'Bản lề của Find N5 sử dụng Titanium cấp độ 5, một loại hợp kim cao cấp với ưu điểm về độ bền cao, trọng lượng nhẹ và khả năng chống biến dạng tốt hơn nhôm.',
            'Hãng cũng ứng dụng công nghệ in 3D để chế tạo các chi tiết bản lề với độ chính xác cao, mang lại trải nghiệm đóng mở mượt mà và vừa khít.',
            'Về khả năng hiển thị, khi mở ra, Find N5 sở hữu màn hình chính kích thước 8,12 inch. Màn hình ngoài có kích thước 6,62 inch với tỷ lệ 20,7:9, tương đồng với tỷ lệ của nhiều smartphone dạng thanh trên thị trường.',
            'OPPO Find N5 là smartphone gập đầu tiên trên thế giới được trang bị vi xử lý Snapdragon 8 Elite, tích hợp Hexagon NPU giúp cải thiện hiệu suất AI lên tới 45%.',
            'Thiết bị còn được trang bị RAM 16GB và bộ nhớ trong 512GB, đáp ứng nhu cầu đa nhiệm và lưu trữ lớn của người dùng. Về năng lượng, Find N5 sở hữu viên pin Silicon-carbon dung lượng 5.600mAh, hỗ trợ công nghệ sạc nhanh Super VOOC 80W.',
            'Bên cạnh đó, máy cũng hỗ trợ sạc nhanh không dây 50W và sạc ngược không dây 10W cho các thiết bị khác. Tại thị trường Việt Nam, OPPO Find N5 được niêm yết với mức giá 44,99 triệu đồng, kèm theo bộ quà tặng đặt trước trị giá 15 triệu đồng.',
            'Sản phẩm được định vị cạnh tranh trực tiếp với các đối thủ trong phân khúc smartphone gập cao cấp như Samsung Galaxy Z Fold6 và Honor Magic V3. Với thiết kế mỏng nhẹ kỷ lục, độ bền cải tiến, bản lề tiên tiến và hiệu năng mạnh mẽ hàng đầu, OPPO Find N5 hứa hẹn sẽ là một đối thủ đáng gờm trong phân khúc smartphone gập cao cấp tại thị trường Việt Nam.',
            'Mức giá và các ưu đãi đi kèm cũng sẽ là yếu tố quan trọng quyết định sức cạnh tranh của sản phẩm.',
        ],
    },
    {
        id: 2,
        title: 'Laptop mạnh mẽ nhất Bản cập nhật iOS 18.4 đang làm phiền người dùng iPhone',
        date: '05/04/2025',
        image: 'https://media.vov.vn/sites/default/files/styles/large/public/2025-04/1_20.jpg',
        content: [
            '<h3>Apple đã phải đối mặt với sự thất vọng từ người dùng khi bản cập nhật iOS 18.4 gây ra hiện tượng cài đặt ngẫu nhiên các ứng dụng trên iPhone.</h3>',
            'iOS 18.4 là bản cập nhật mới nhất cho iPhone mà Apple phát hành vào đầu tuần này. Ban đầu, iOS 18.4 được kỳ vọng sẽ đi kèm với Siri cải tiến và bộ tính năng Apple Intelligence, tuy nhiên điều này vẫn chưa xảy ra do Apple chưa thể hoàn thiện chúng.',
            'Nhưng có lẽ khó chịu hơn hết là nhiều người dùng iPhone bỗng nhiên phát hiện ứng dụng lạ xuất hiện trên thiết bị của mình. Mọi thứ bắt đầu khi một người dùng iPhone 13 mini trên diễn đàn trực tuyến cho biết rằng họ thấy một số ứng dụng lạ xuất hiện trên thiết bị của mình.',
            'Ban đầu, một số người bình luận cho rằng người dùng này có thể đã thực hiện một hành động không bình thường. Tuy nhiên ngay sau đó, nhiều bài đăng khác cũng xuất hiện với nội dung tương tự, cho thấy đây không phải là sự cố đơn lẻ.',
            'Nhiều người dùng iPhone khác đã chia sẻ trải nghiệm với nội dung cho biết họ cũng gặp phải tình trạng cài đặt ứng dụng ngẫu nhiên sau khi cập nhật lên iOS 18.4. Đáng chú ý, một số ứng dụng được cài đặt là giống nhau giữa các thiết bị.',
            '<h3>Sự cố với iOS 18.3 "không quá nghiêm trọng"</h3>',
            'Hiện tại, Apple vẫn chưa đưa ra tuyên bố chính thức về lỗi này. Sự cố gợi nhớ đến một lỗi trước đây khi người dùng iPhone bất ngờ phát hiện những bức ảnh cũ đã xóa xuất hiện trở lại sau khi cập nhật.',
            'Mặc dù tình huống có phần kỳ lạ nhưng theo đánh giá không gây nguy hiểm nghiêm trọng. Trong năm 2024, Apple đã gặp phải một loạt vấn đề với các bản cập nhật phần mềm, trong đó có sự cố nghiêm trọng với iPadOS làm hỏng các mẫu iPad M4. Sau khi sự cố này trở nên nghiêm trọng, Apple đã phải đưa ra tuyên bố và cung cấp thiết bị thay thế cho người dùng bị ảnh hưởng.',
            'Với lỗi trong iOS 18.4, sự cố này được coi là nhẹ hơn. Người dùng hy vọng rằng Apple sẽ sớm phát hành bản sửa lỗi cho vấn đề này, đồng thời mong muốn công ty cải thiện chất lượng các tính năng AI của mình.',
        ],
    },
    {
        id: 3,
        title: 'Microsoft Surface Laptop 7 15 - Đánh giá chi tiết về hiệu năng và thiết kế',
        date: '01/04/2025',
        image: 'https://cdn-media.sforum.vn/storage/app/media/haianh/icemag/danh-gia-microsoft-surface-laptop-7-15-1.jpg',
        content: [
            '<h3>Thiết kế cao cấp, tối giản trên Microsoft Surface</h3>',
            'Microsoft cung cấp hai lựa chọn màu sắc: Bạch kim (Platinum) và Đen (Black). Chất lượng hoàn thiện sản phẩm ở mức cao cấp, các chi tiết lắp ráp tỉ mỉ. Tuy nhiên, phiên bản màu Đen có nhược điểm là bề mặt dễ bám dấu vân tay.',
            'Về khả năng kết nối, phiên bản Intel vượt trội hơn nhờ trang bị hai cổng USB-C Thunderbolt 4. Các cổng này hỗ trợ tốc độ truyền dữ liệu cao, xuất hình ảnh chất lượng cao qua DisplayPort 2.1 và sạc thiết bị qua Power Delivery 3.0.',
            'Ngoài ra, máy vẫn giữ lại các cổng kết nối cơ bản khác như USB-A 3.2 Gen 1, jack tai nghe 3.5mm, đầu đọc thẻ microSD và cổng Surface Connect. Mặc dù đáp ứng đủ nhu cầu cơ bản, việc thiếu cổng HDMI hoặc USB-C trên Microsoft Surface Laptop 7 15 có thể là hạn chế với một số người dùng.',
            '<h3>Bàn phím và touchpad tốt, hoạt động hiệu quả</h3>',
            'Bàn phím của Surface Laptop 7 15 Intel tương tự phiên bản ARM, mang lại trải nghiệm gõ phím thoải mái. Các phím có hành trình vừa phải, độ nảy tốt và đèn nền hỗ trợ làm việc trong điều kiện thiếu sáng.',
            'Touchpad haptic hoạt động hiệu quả, bề mặt mịn và phản hồi nhấp chuột chính xác.',
            '<h3>Màn hình với màu sắc sống động</h3>',
            'Màn hình IPS cảm ứng 15 inch là một điểm mạnh của Surface Laptop 7 15. Chất lượng hiển thị tốt với màu sắc sống động, tần số quét 120Hz mượt mà và tỷ lệ 3:2 lý tưởng cho công việc. Độ sáng màn hình cao, gần 600 nit và độ phân giải 2496 x 1664 pixel đảm bảo hình ảnh sắc nét.',
            'Khả năng tái tạo màu sắc chính xác, phù hợp cho các công việc liên quan đến đồ họa. Dù vậy, màn hình gương này có thể gây phản xạ ánh sáng và có độ tương phản, độ đen không bằng tấm nền OLED.',
            '<h3>Cấu hình phần cứng đáp ứng tốt công việc văn phòng</h3>',
            'Một phần quan trọng của việc đánh giá Microsoft Surface Laptop 7 15 chính là xem xét cấu hình phần cứng bên trong. Surface Laptop 7 15 Intel sở hữu bộ vi xử lý Intel Core Ultra 7 268V với kiến trúc Lunar Lake. Chipset này có 8 nhân, xung nhịp tối đa 5.0 GHz và TDP 30W / 37W. Hiệu năng đơn nhân của chip đáp ứng tốt các tác vụ hàng ngày, nhưng hiệu năng đa nhân có phần thua kém so với các đối thủ ARM như Snapdragon X Elite và Apple M4 trong các tác vụ nặng.',
            'Đồ họa tích hợp Intel Arc Graphics 140V mang lại hiệu năng đồ họa cải thiện đáng kể so với phiên bản ARM, đủ sức xử lý các tác vụ đồ họa nhẹ và game không đòi hỏi cấu hình cao.',
            'Máy trang bị 32GB RAM LPDDR5x - 8533 kênh đôi, tuy nhiên RAM được hàn chết và không nâng cấp được. Ổ cứng SSD NVMe Samsung PM9C1a 1TB chuẩn PCIe 4.0 đảm bảo tốc độ truy xuất dữ liệu nhanh. Kết nối không dây Wi-Fi 7 và Bluetooth 5.4 được tích hợp, mang lại tốc độ kết nối và độ ổn định cao.',
            '<h3>Hiệu năng đánh bại phiên bản ARM</h3>',
            'Surface Laptop 7 15 phiên bản Intel này mang đến hiệu năng tổng thể tốt, thể hiện qua điểm số 7236 trong PCMark 10, đảm bảo trải nghiệm mượt mà cho các tác vụ hàng ngày và công việc văn phòng.',
            'Bộ xử lý Intel Core Ultra 7 268V chứng minh sức mạnh đơn nhân ấn tượng với 123.3 điểm Cinebench 2024, đủ sức đáp ứng nhanh chóng các tác vụ thông thường.',
            'Tuy nhiên, hiệu năng đa nhân của chip (600 điểm Cinebench 2024 đa nhân, 1435 - 1615 điểm Cinebench R15 liên tục) có phần lép vế hơn so với các đối thủ dùng chip Snapdragon hay Apple M4 trong các tình huống tải nặng trong thời gian dài. Mặc dù vậy, với nhu cầu sử dụng phổ thông, hiệu năng CPU này vẫn hoàn toàn đáp ứng tốt.',
            'Điểm cần lưu ý là hệ thống tản nhiệt của Surface Laptop 7 15 khá yên tĩnh khi chạy các tác vụ nhẹ, nhưng sẽ có tiếng quạt khi xử lý các tác vụ nặng.',
            '<h3>Thời lượng pin chưa quá ấn tượng</h3>',
            'Trong thử nghiệm lướt web Wi-Fi, Surface Laptop 7 15 Intel cho thời lượng pin tốt hơn phiên bản Snapdragon. Máy đạt gần 18 giờ ở độ sáng 150 nit và khoảng 9 giờ ở độ sáng tối đa. Thời lượng pin này đủ cho một ngày làm việc thông thường, nhưng có thể không phải là tốt nhất trong phân khúc máy tính xách tay siêu di động.',
        ],
    },
];

function NewsDetail() {
    const { id } = useParams();
    const article = newsData.find((news) => news.id === Number(id));

    useEffect(() => {
        window.scrollTo(0, 0); // Cuộn trang lên đầu mỗi khi URL thay đổi
    }, [location]);

    if (!article) {
        return <h2>Tin tức đã bị xóa!</h2>;
    }

    return (
        <div className={cx('wrapper')}>
            <Header />

            <main className={cx('main')}>
                <div className={cx('news-detail')}>
                    <h1>{article.title}</h1>
                    <p className={cx('news-date')}>{article.date}</p>
                    <img src={article.image} alt={article.title} className={cx('news-detail-image')} />

                    <div className={cx('news-detail-content')}>
                        {article.content.map((paragraph, index) => (
                            <div key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
                        ))}
                    </div>

                    <Link to="/news" className={cx('back-link')}>
                        ← Quay lại danh sách tin tức
                    </Link>
                </div>
            </main>

            <Chatbot />
            <BackToTop />

            <Footer />
        </div>
    );
}

export default NewsDetail;
