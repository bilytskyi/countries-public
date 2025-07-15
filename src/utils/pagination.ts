export const getVisiblePages = (
  current: number,
  lastPage: number
): number[] => {
  const pages = [];
  if (current > 2) pages.push(current - 2);
  if (current > 1) pages.push(current - 1);
  pages.push(current);
  for (let i = 1; i <= 2 && current + i <= lastPage; i++) {
    pages.push(current + i);
  }
  return pages;
};
