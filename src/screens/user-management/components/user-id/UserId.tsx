import { HTMLProps, useMemo } from 'react';
import { ID } from '../../../../lib/types';
import { splitWithLeadingPattern } from '../../../../lib/utils';

type UserIDProps = {
  id: ID;
  leadingZerosContainerProps?: HTMLProps<HTMLSpanElement>;
  numericIdContainerProps?: HTMLProps<HTMLSpanElement>;
};

/**
 * Renders user id with less opacity leading zeros.
 */
export const UserID = ({
  id,
  leadingZerosContainerProps,
  numericIdContainerProps,
}: UserIDProps) => {
  const result = useMemo(() => {
    return splitWithLeadingPattern(id?.toString());
  }, [id]);

  return result ? (
    <>
      <span className="opacity-20" {...leadingZerosContainerProps}>
        {result.leadingStr}
      </span>
      <span {...numericIdContainerProps} >{result.otherPart}</span>
    </>
  ) : null;
};
