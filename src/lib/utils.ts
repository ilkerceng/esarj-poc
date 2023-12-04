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

export function sum(a: number, b: number) {
  return a + b;
}
