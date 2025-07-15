export const truncate = (text: string, max: number): string => {
  return text.length > max ? text.slice(0, max - 1) + '…' : text;
};

export const getBorderNames = (
  bordersArray: string[],
  countriesNames: Record<string, string>
): string[] => {
  return bordersArray.map(cca3 => countriesNames[cca3]).filter(Boolean);
};
