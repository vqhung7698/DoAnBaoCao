import React, { useState } from 'react';
import { Form, Input, InputNumber, Upload, Button, Card, message, Space } from 'antd';
import { UploadOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import axios from 'axios';
import { requestAddProduct, requestUploadImage } from '../../../Config/request';

const AddProduct = ({ setActiveComponent }) => {
    const [form] = Form.useForm();
    const [imageFiles, setImageFiles] = useState([]);

    const handleUpload = async (files) => {
        try {
            const formData = new FormData();

            // Thêm tất cả files vào formData
            files.forEach((file) => {
                formData.append('images', file.originFileObj);
            });

            const res = await requestUploadImage(formData);
            return res.metadata;
        } catch (error) {
            console.error('Upload failed:', error);
            message.error('Upload ảnh thất bại!');
            throw error;
        }
    };

    // const onFinish = async (values) => {
    //     try {
    //         // Upload ảnh trước
    //         const imageUrls = await handleUpload(values.image);

    //         // Tạo dữ liệu sản phẩm với URLs ảnh
    //         const productData = {
    //             ...values,
    //             images: imageUrls,
    //         };

    //         // Gửi dữ liệu sản phẩm
    //         await requestAddProduct(productData);

    //         message.success('Thêm sản phẩm thành công');
    //         form.resetFields();
    //         setImageFiles([]);
    //     } catch (error) {
    //         message.error('Có lỗi xảy ra khi thêm sản phẩm!');
    //         console.error(error);
    //     }
    // };

    const onFinish = async (values) => {
        try {
            let imageUrls = [];
            if (values.image && values.image.length > 0) {
                imageUrls = await handleUpload(values.image);
            }

            const productData = {
                ...values,
                images: imageUrls,
            };

            await requestAddProduct(productData);
            message.success('Thêm sản phẩm thành công');
            form.resetFields();
            setImageFiles([]);
        } catch (error) {
            message.error('Có lỗi xảy ra khi thêm sản phẩm!');
            console.error(error);
        }
    };


    const handleBack = () => {
        setActiveComponent('products'); // Quay lại trang quản lý sản phẩm
    };

    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };

    return (
        <Card
            title={
                <Space>
                    <Button icon={<ArrowLeftOutlined />} onClick={handleBack}>
                        Quay lại
                    </Button>
                    <span>Thêm Sản Phẩm Mới</span>
                </Space>
            }
        >
            <Form form={form} layout="vertical" onFinish={onFinish} autoComplete="off">
                <Form.Item
                    name="name"
                    label="Tên sản phẩm"
                    rules={[{ required: true, message: 'Vui lòng nhập tên sản phẩm!' }]}
                >
                    <Input placeholder="Nhập tên sản phẩm" />
                </Form.Item>

                <Form.Item name="price" label="Giá gốc" rules={[{ required: true, message: 'Vui lòng nhập giá!' }]}>
                    <InputNumber
                        style={{ width: '100%' }}
                        formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                        placeholder="Nhập giá gốc"
                    />
                </Form.Item>

                <Form.Item
                    name="priceDiscount"
                    label="Giá khuyến mãi"
                    rules={[{ required: true, message: 'Vui lòng nhập giá khuyến mãi!' }]}
                >
                    <InputNumber
                        style={{ width: '100%' }}
                        formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                        placeholder="Nhập giá khuyến mãi"
                    />
                </Form.Item>

                <Form.Item
                    name="stock"
                    label="Số lượng trong kho"
                    rules={[{ required: true, message: 'Vui lòng nhập số lượng!' }]}
                >
                    <InputNumber style={{ width: '100%' }} placeholder="Nhập số lượng" />
                </Form.Item>

                <Form.Item
                    name="image"
                    label="Hình ảnh"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                    rules={[{ required: true, message: 'Vui lòng tải lên hình ảnh!' }]}
                >
                    <Upload
                        name="images"
                        listType="picture-card"
                        multiple
                        maxCount={10}
                        beforeUpload={() => false} // Ngăn upload tự động
                    >
                        <div>
                            <UploadOutlined />
                            <div style={{ marginTop: 8 }}>Tải ảnh lên</div>
                        </div>
                    </Upload>
                </Form.Item>

                <Form.Item name="cpu" label="CPU" rules={[{ required: true, message: 'Vui lòng nhập thông tin CPU!' }]}>
                    <Input placeholder="Ví dụ: Intel Core i7-11800H" />
                </Form.Item>

                <Form.Item
                    name="gpu"
                    label="Card đồ họa | GPU"
                    rules={[{ required: true, message: 'Vui lòng nhập thông tin GPU!' }]}
                >
                    <Input placeholder="Ví dụ: NVIDIA RTX 3060" />
                </Form.Item>

                <Form.Item name="ram" label="RAM" rules={[{ required: true, message: 'Vui lòng nhập thông tin RAM!' }]}>
                    <Input placeholder="Ví dụ: 16GB DDR4 3200MHz" />
                </Form.Item>

                <Form.Item
                    name="storage"
                    label="Ổ cứng | Dung lượng"
                    rules={[{ required: true, message: 'Vui lòng nhập thông tin ổ cứng!' }]}
                >
                    <Input placeholder="Ví dụ: 512GB SSD NVMe" />
                </Form.Item>

                <Form.Item
                    name="camera"
                    label="Camera"
                    rules={[{ required: true, message: 'Vui lòng nhập thông tin camera!' }]}
                >
                    <Input placeholder="Ví dụ: HD 720p" />
                </Form.Item>

                <Form.Item
                    name="screen"
                    label="Màn hình"
                    rules={[{ required: true, message: 'Vui lòng nhập thông tin màn hình!' }]}
                >
                    <Input placeholder="Ví dụ: 15.6 inch FHD" />
                </Form.Item>

                <Form.Item
                    name="screenHz"
                    label="Tần số màn hình"
                    rules={[{ required: true, message: 'Vui lòng nhập tần số màn hình!' }]}
                >
                    <Input placeholder="Ví dụ: 144Hz" />
                </Form.Item>

                <Form.Item
                    name="battery"
                    label="Pin & Sạc"
                    rules={[{ required: true, message: 'Vui lòng nhập thông tin pin!' }]}
                >
                    <Input placeholder="Ví dụ: 4 Cell 90WHr" />
                </Form.Item>

                <Form.Item
                    name="weight"
                    label="Kích thước & Khối lượng"
                    rules={[{ required: true, message: 'Vui lòng nhập cân nặng!' }]}
                >
                    <Input placeholder="Ví dụ: 2.3 kg" />
                </Form.Item>

                <Form.Item>
                    <Space>
                        <Button type="primary" htmlType="submit">
                            Thêm sản phẩm
                        </Button>
                        <Button onClick={handleBack}>Hủy</Button>
                    </Space>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default AddProduct;
