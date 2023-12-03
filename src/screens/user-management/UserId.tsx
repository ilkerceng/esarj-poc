import { useMemo } from 'react';
import { ID } from '../../lib/types';

const leadingZerosPattern = '[^0]+';

export const splitWithLeadingPattern = (
  value: string,
  pattern = leadingZerosPattern,
): { leadingStr: string; otherPart: string } | undefined => {
  if (value) {
    const idStr = value.toString();
    const firstNonZeroNumIndex = value.toString().search(pattern);
    const leadingStr = idStr.substring(0, firstNonZeroNumIndex);
    const otherPart = idStr.substring(firstNonZeroNumIndex);

    return { leadingStr, otherPart };
  }
};

export const UserID = ({ id }: { id: ID }) => {
  const result = useMemo(() => {
    return splitWithLeadingPattern(id?.toString());
  }, [id]);

  return result ? (
    <>
      <span className="opacity-20">{result.leadingStr}</span>
      <span>{result.otherPart}</span>
    </>
  ) : null;
};
