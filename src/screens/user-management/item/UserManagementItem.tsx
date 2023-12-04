import {
  CloseCircleFilled,
  CloseOutlined,
  EditFilled,
} from '@ant-design/icons';
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
} from 'antd';

import { useEffect, useMemo, useState } from 'react';
import {
  EnumsAccountTypesItem,
  EnumsStatusesItem,
  User,
} from '../../../api/generated/model';
import { ID } from '../../../lib/types';
import { UserID } from '../components/user-id/UserId';
import { UserStatusBadge } from '../components/status/UserStatusBadge';
import { getAccountTypeModel } from '../utils';
import { FormPermissionMode, PostUserBodyType } from '../types';

export const UserManagementItem = ({
  id,
  onClose,
  onFinish,
  isNewItem = false,
  userData,
  isLoadingItem = false,
  isPendingPostUser = false,
  accountTypes = [],
  statuses = [],
}: {
  id: ID;
  onClose: () => void;
  onFinish?: (user: PostUserBodyType) => void;
  isNewItem?: boolean;
  isLoadingItem?: boolean;
  isPendingPostUser?: boolean;
  userData?: User;
  accountTypes: EnumsAccountTypesItem[];
  statuses: EnumsStatusesItem[];
}) => {
  const [form] = Form.useForm<PostUserBodyType>();
  const [initialUserData, setInitialUserData] = useState<User>();

  const [formPermissionMode, setFormPermissionMode] =
    useState<FormPermissionMode>(
      isNewItem ? FormPermissionMode.Edit : FormPermissionMode.Read,
    );

  useEffect(() => {
    setInitialUserData(userData);
  }, [userData]);

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

  const accountTypeModel = useMemo(
    () =>
      userData?.accountType ? getAccountTypeModel(userData?.accountType) : null,
    [userData],
  );

  const onFinishFailed = () => {
    console.log('on finish falied');
  };

  if (isLoadingItem) {
    return (
      <Card loading={true} title={<Skeleton title active className="mt-4" />} />
    );
  }

  const isFormEditable = formPermissionMode === FormPermissionMode.Edit;

  return isNewItem || userData ? (
    <Card
      title={
        id === 0 ? (
          'New User'
        ) : (
          <div>
            {userData ? (
              <>
                {!isNewItem ? (
                  <UserStatusBadge status={userData.status} />
                ) : null}
                <span>
                  {`${userData.firstName || ''} ${userData.lastName || ''}`}
                </span>
              </>
            ) : null}
          </div>
        )
      }
      extra={
        <div className="in">
          {!isNewItem && userData ? (
            <>
              <span className="mr-2">
                <UserID id={userData.id} />
              </span>
              {accountTypeModel ? (
                <accountTypeModel.Icon className="mr-2" />
              ) : null}
            </>
          ) : null}
          <Button
            shape="circle"
            color="#aaa"
            onClick={onClose}
            icon={<CloseOutlined color="red" />}
          />
        </div>
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
                  </Col>
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
                    form.setFieldsValue(initialUserData || {});
                  }
                }}
                disabled={isLoadingItem}
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
  ) : null;
};
