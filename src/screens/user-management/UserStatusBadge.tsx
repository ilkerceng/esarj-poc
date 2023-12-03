import { Badge, BadgeProps } from 'antd';
import { Status } from '../../api/generated/model';

type UserStatusBadgeProps = { status: Status } & Omit<BadgeProps, 'status'>;

export const UserStatusBadge = (props: UserStatusBadgeProps) => {
  return (
    <Badge
      status={props.status === Status.Active ? 'success' : 'error'}
      classNames={{ indicator: '!w-[15px] !h-[15px]', root: '!mr-2' }}
    />
  );
};
