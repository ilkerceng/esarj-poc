import { useMemo } from 'react';
import { ID } from '../../lib/types';

const leadingZerosPattern = '[^0]+';

export const splitWithLeadingPattern = (
  value: string,
  pattern = leadingZerosPattern,
) => {
  const idStr = value.toString();
  const firstNonZeroNumIndex = value.toString().search(pattern);
  const leadingZerosStr = idStr.substring(0, firstNonZeroNumIndex);
  const cardinalNumberStr = idStr.substring(firstNonZeroNumIndex);

  return { leadingZerosStr, cardinalNumberStr };
};

export const UserID = ({ id }: { id: ID }) => {
  const { leadingZerosStr, cardinalNumberStr } = useMemo(() => {
    return splitWithLeadingPattern(id.toString());
  }, [id]);

  return (
    <>
      <span className="opacity-20">{leadingZerosStr}</span>
      <span>{cardinalNumberStr}</span>
    </>
  );
};
