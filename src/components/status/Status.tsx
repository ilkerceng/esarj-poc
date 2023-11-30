export type StatusType = 'error' | 'warning' | 'success';

export type StatusProps = {
  status?: StatusType;
};

export const Status = ({ status }: StatusProps) => {
  let bgColor = 'bg-red';
  switch (status) {
    case 'error':
      bgColor = 'bg-red';
      break;
    case 'warning':
      bgColor = 'bg-yellow';
      break;
    case 'success':
      bgColor = 'bg-green';
      break;

    default:
      break;
  }

  return status ? (
    <div className={`w-[30px] h-[30px] ${bgColor} rounded-full`} />
  ) : null;
};
