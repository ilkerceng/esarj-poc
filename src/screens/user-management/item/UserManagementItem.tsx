import {
  CloseCircleFilled,
  CloseOutlined,
  EditFilled,
  InfoCircleOutlined,
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
import { ValidateErrorEntity } from 'rc-field-form/es/interface';

import { useEffect, useMemo, useState } from 'react';
import {
  EnumsAccountTypesItem,
  EnumsStatusesItem,
  User,
} from '../../../api/generated/model';
import { EMAIL_REGEX } from '../../../lib/constants';
import { ID } from '../../../lib/types';
import { UserStatusBadge } from '../components/status/UserStatusBadge';
import { UserID } from '../components/user-id/UserId';
import { FormPermissionMode, PostUserBodyType } from '../types';
import { getAccountTypeModel } from '../utils';

type ActiveTabKey = 'details' | 'contact';
type TabErrorStateType = Record<ActiveTabKey, boolean>;
const contactTabFormNamesMap: Record<keyof PostUserBodyType, ActiveTabKey> = {
  phone: 'contact',
  email: 'contact',
  accountType: 'details',
  firstName: 'details',
  lastName: 'details',
  status: 'details',
  userName: 'details',
};

const initialErrorTabState = {} as TabErrorStateType;

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
  const [activeTab, setActiveTab] = useState<ActiveTabKey>('details');
  const [errorTab, setErrorTab] =
    useState<TabErrorStateType>(initialErrorTabState);
  const [formPermissionMode, setFormPermissionMode] =
    useState<FormPermissionMode>();

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

  const setErrorIndicator = (errorFieldNames: string[]) => {
    if (!errorFieldNames.length) {
      setErrorTab(initialErrorTabState);
    } else {
      const tabErrorState: Record<ActiveTabKey, boolean> = {
        contact: false,
        details: false,
      };
      errorFieldNames.forEach(name => {
        tabErrorState[
          contactTabFormNamesMap[name as keyof typeof contactTabFormNamesMap]
        ] = true;
      });
      setErrorTab(tabErrorState);
    }
  };

  const getErrors = () => {
    return form
      .getFieldsError()
      .filter(item => item.errors.length)
      .map(errorField => errorField.name?.[0]) as string[];
  };

  useEffect(() => {
    setErrorIndicator(getErrors());
  }, [activeTab]);

  const onFinishFailed = async (
    errorInfo: ValidateErrorEntity<PostUserBodyType>,
  ) => {
    const errorFieldNames = errorInfo.errorFields.map(
      errorField => errorField.name[0],
    );
    setErrorIndicator(errorFieldNames as string[]);
  };

  if (isLoadingItem) {
    return (
      <Card loading={true} title={<Skeleton title active className="mt-4" />} />
    );
  }

  const onChangeTab = (activeKey: ActiveTabKey) => {
    setActiveTab(activeKey);
  };

  const RenderTabTitleWithErrorState = ({
    tabKey,
    label,
  }: {
    tabKey: ActiveTabKey;
    label: string;
  }) => {
    return (
      <span>
        {label}
        {errorTab[tabKey] && activeTab !== tabKey ? (
          <InfoCircleOutlined style={{color: "red"}} />
        ) : null}
      </span>
    );
  };

  const isFormEditable = formPermissionMode === FormPermissionMode.Edit;

  return (
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
        disabled={!isFormEditable && !isNewItem}
        className="w-full"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Tabs
          activeKey={activeTab}
          onChange={activeKey => {
            onChangeTab(activeKey as ActiveTabKey);
          }}
          destroyInactiveTabPane={false}
          items={[
            {
              key: 'details',
              tabKey: 'details',
              label: (
                <RenderTabTitleWithErrorState
                  label="Details"
                  tabKey="details"
                />
              ),
              forceRender: true,
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
                      <Input />
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
                      <Input />
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
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
              ),
            },
            {
              key: 'contact',
              tabKey: 'contact',
              label: (
                <RenderTabTitleWithErrorState
                  label="Contact"
                  tabKey="contact"
                />
              ),
              forceRender: true,
              children: (
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      name="phone"
                      label="Mobile"
                      rules={[{ required: true }]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      name="email"
                      label="Email"
                      rules={[
                        { required: true },
                        { pattern: EMAIL_REGEX, message: 'email is not valid' },
                      ]}
                    >
                      <Input />
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
                disabled={isPendingPostUser}
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
