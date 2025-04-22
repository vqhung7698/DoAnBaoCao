import { Modal, Form, Input, message } from 'antd';
import { useState } from 'react';
import { requestUpdatePassword } from '../../../../../Config/request';

function ModalUpdatePassword({ isOpen, setIsOpen }) {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (values) => {
        try {
            setLoading(true);
            const data = {
                oldPassword: values.oldPassword,
                newPassword: values.newPassword,
            };
            await requestUpdatePassword(data);
            message.success('Đổi mật khẩu thành công!');
            form.resetFields();
            setIsOpen(false);
        } catch (error) {
            message.error(error.response.data.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal
            title="Đổi mật khẩu"
            open={isOpen}
            onCancel={() => setIsOpen(false)}
            onOk={() => form.submit()}
            confirmLoading={loading}
            okText="Đổi mật khẩu"
            cancelText="Hủy"
        >
            <Form form={form} layout="vertical" onFinish={handleSubmit}>
                <Form.Item
                    name="oldPassword"
                    label="Mật khẩu hiện tại"
                    rules={[{ required: true, message: 'Vui lòng nhập mật khẩu hiện tại!' }]}
                >
                    <Input.Password placeholder="Nhập mật khẩu hiện tại" />
                </Form.Item>

                <Form.Item
                    name="newPassword"
                    label="Mật khẩu mới"
                    rules={[
                        { required: true, message: 'Vui lòng nhập mật khẩu mới!' },
                        { min: 6, message: 'Mật khẩu phải có ít nhất 6 ký tự!' },
                    ]}
                >
                    <Input.Password placeholder="Nhập mật khẩu mới" />
                </Form.Item>

                <Form.Item
                    name="confirmPassword"
                    label="Xác nhận mật khẩu mới"
                    dependencies={['newPassword']}
                    rules={[
                        { required: true, message: 'Vui lòng xác nhận mật khẩu mới!' },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('newPassword') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('Mật khẩu xác nhận không khớp!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password placeholder="Xác nhận mật khẩu mới" />
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default ModalUpdatePassword;
