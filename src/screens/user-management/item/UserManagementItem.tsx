import { CloseCircleFilled, EditFilled } from '@ant-design/icons';
import {
  Button,
  Card,
  Col,
  Divider,
  Form,
  Input,
  Row,
  Select,
  Skeleton,
  Tabs,
  notification,
} from 'antd';
import { useEffect, useRef, useState } from 'react';
import {
  useGetEnums,
  useGetUserById,
  usePostUser,
} from '../../../api/generated/esarj-api';
import {
  PostUserBody,
  User
} from '../../../api/generated/model';
import { ID } from '../../../lib/types';

type PostUserBodyType = PostUserBody;

export enum FormPermissionMode {
  Read = 1,
  Edit,
}

export const UserManagementItem = ({
  id,
  onClose,
  onSuccessUpdateUser, // mode,
}: {
  id: ID;
  onClose: () => void;
  onSuccessUpdateUser?: () => void;
}) => {
  const { data: { accountTypes = [], statuses = [] } = {} } = useGetEnums();
  const isNewItem = !id;
  const [formPermissionMode, setFormPermissionMode] =
    useState<FormPermissionMode>(
      isNewItem ? FormPermissionMode.Edit : FormPermissionMode.Read,
    );
  const { data: userData, isFetching: isFetchingUserData } = useGetUserById(
    id,
    {
      query: { enabled: !!id },
    },
  );
  const userServerDataRef = useRef<User | null>();

  const [form] = Form.useForm<PostUserBodyType>();
  const { mutate: postUser, isPending: isPendingPostUser } = usePostUser({
    mutation: {
      onSuccess: () => {
        notification.success({ message: 'Updated Successfully' });
        onSuccessUpdateUser?.();
      },
    },
  });

  useEffect(() => {
    if (!id) {
      form.resetFields();
    }
    if (userData) {
      form.setFieldsValue({
        ...userData,
      });
    }
  }, [userData, form]);

  useEffect(() => {
    userServerDataRef.current = userData;

    return () => {};
  }, [userData]);

  // useEffect(() => {
  //   console.log('on form changes');

  //   return () => {};
  // }, [form.getFieldsError()]);

  const onFinish = async (values: PostUserBodyType) => {
    const formatString = (str: string) => str?.replace(/\s+/g, ' ');
    postUser({
      data: {
        ...values,
        firstName: formatString(values.firstName),
        lastName: formatString(values.firstName),
      },
    });
  };

  const onFinishFailed = () => {
    console.log('ererrre');
  };
  const isFormEditable = formPermissionMode === FormPermissionMode.Edit;

  return (
    <Card
      loading={isFetchingUserData}
      title={
        id === 0 ? (
          'New User'
        ) : isFetchingUserData ? (
          <Skeleton title className="mt-4" />
        ) : (
          `${userData?.firstName || ''} ${userData?.lastName || ''} `
        )
      }
      extra={
        <Button
          type="link"
          shape="circle"
          onClick={onClose}
          icon={<CloseCircleFilled color="#aaa" />}
        />
      }
    >
      <Form
        form={form}
        disabled={!isFormEditable}
        className="w-full"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        // onInvalid={(...args) => {}}
      >
        <Tabs
          defaultActiveKey="details"
          destroyInactiveTabPane={false}
          items={[
            {
              key: 'details',
              label: <div>Details </div>,
              children: (
                <Row gutter={16}>
                  <Col span={8}>
                    <Form.Item
                      name="accountType"
                      label="Account Type"
                      rules={[{ required: true }]}
                    >
                      <Select className="" placeholder={'Select'}>
                        {accountTypes?.map(({ id, label }) => (
                          <Select.Option key={id} value={id}>
                            {label}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      name="userName"
                      label="User Name"
                      rules={[
                        { required: true, min: 4 },
                        {
                          pattern: new RegExp('^[A-Za-z0-9]+$'),
                          message: 'only alphanumeric characters are accepted',
                        },
                      ]}
                    >
                      <Input placeholder={''} />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      name="status"
                      label="Status"
                      rules={[{ required: true }]}
                    >
                      <Select className="" placeholder={'Select'}>
                        {statuses?.map(({ id, label }) => (
                          <Select.Option key={id} value={id}>
                            {label}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      name="firstName"
                      label="First Name"
                      rules={[{ required: true, min: 2 }]}
                    >
                      <Input placeholder={''} />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      name="lastName"
                      label="Last Name"
                      rules={[
                        { required: true, min: 2 },
                        {
                          pattern: new RegExp('^[A-Za-z /s]+$'),
                          message: 'only alphabetic characters are accepted',
                        },
                      ]}
                    >
                      <Input placeholder={''} />
                    </Form.Item>
                  </Col>{' '}
                </Row>
              ),
            },
            {
              key: 'contact',
              label: 'Contact',
              children: (
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      name="mobile"
                      label="Mobile"
                      rules={[{ required: true }]}
                    >
                      <Input placeholder={''} />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      name="email"
                      label="Email"
                      rules={[{ required: true }]}
                    >
                      <Input placeholder={''} />
                    </Form.Item>
                  </Col>
                </Row>
              ),
            },
          ]}
        />
        <Divider />
        <Row gutter={16}>
          <Col span={12}>
            {isNewItem ? null : isFormEditable ? (
              <Button
                onClick={() => {
                  setFormPermissionMode(FormPermissionMode.Read);
                  if (id === 0) {
                    form.resetFields();
                  } else {
                    form.setFieldsValue(userServerDataRef.current || {});
                  }
                }}
                disabled={isPendingPostUser}
                icon={<CloseCircleFilled />}
              >
                Cancel
              </Button>
            ) : (
              <Button
                disabled={false}
                icon={<EditFilled />}
                onClick={() => {
                  setFormPermissionMode(FormPermissionMode.Edit);
                }}
                type="primary"
              >
                Edit
              </Button>
            )}
          </Col>
          <Col span={12}>
            <Form.Item className="flex justify-end">
              <Button
                disabled={!isFormEditable || isPendingPostUser}
                loading={isPendingPostUser}
                type="primary"
                htmlType="submit"
              >
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};
