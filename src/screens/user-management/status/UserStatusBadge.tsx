import { Badge, BadgeProps } from 'antd';
import { Status } from '../../../api/generated/model';

type UserStatusBadgeProps = {
  status: Status;
} & Omit<BadgeProps, 'status'>;

/**
 * Renders Badge according to User status Passive|Active.
 * @readonly
 * @param props
 * @example
 * <UserStatusBadge status={Status.Active} />
 */
export const UserStatusBadge = ({
  status,
  ...otherProps
}: UserStatusBadgeProps) => {
  return status ? (
    <Badge
      status={status === Status.Active ? 'success' : 'error'}
      classNames={{ indicator: '!w-[15px] !h-[15px]', root: '!mr-2' }}
      {...otherProps}
    />
  ) : null;
};
