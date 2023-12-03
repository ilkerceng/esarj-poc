import { notification } from 'antd';
import {
  useGetEnums,
  useGetUserById,
  usePostUser,
} from '../../../api/generated/esarj-api';
import { ID } from '../../../lib/types';
import { UserManagementItem } from './UserManagementItem';
import { PostUserBodyType } from './types';
import { queryClient } from '../../../queryClient';

export const UserManagementItemContainer = ({
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
  const { data: userData, isFetching: isFetchingUserData } = useGetUserById(
    id,
    {
      query: { enabled: !!id },
    },
  );

  const { mutate: postUser, isPending: isPendingPostUser } = usePostUser({
    mutation: {
      onSuccess: () => {
        notification.success({ message: 'Updated Successfully' });
        onSuccessUpdateUser?.();
      },
    },
  });

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

  const handleClose = () => {
    // in-validate cache for users-data and data selected user by id
    queryClient.invalidateQueries({
      queryKey: ['/users', `/users/${id}`],
    });
    onClose();
  };

  return (
    <UserManagementItem
      id={id}
      onClose={handleClose}
      onFinish={onFinish}
      accountTypes={accountTypes}
      statuses={statuses}
      isNewItem={isNewItem}
      isLoadingItem={isFetchingUserData}
      isPendingPostUser={isPendingPostUser}
      userData={userData}
    />
  );
};
