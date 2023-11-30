import { CloseCircleFilled } from '@ant-design/icons';
import { Button, Card } from 'antd';
import { ID } from '../../../lib/types';

export const UserManagementItem = ({
  id,
  onClose,
}: {
  id: ID;
  onClose: any;
}) => {
  getUser

  return (
    <Card
      title="User"
      extra={
        <Button
          type="link"
          shape="circle"
          onClick={onClose}
          icon={<CloseCircleFilled color="#aaa" />}
        />
      }
    ></Card>
  );
};
