/* eslint-disable @typescript-eslint/no-explicit-any */
// TODO: Check TypeScript
// export const debounce = (cb: any, delay: number) => {
//   let timeoutId: number;

//   return (...args: any) => {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => {
//       cb(...args);
//     }, delay);
//   };
// };

export const debounce = (cb: any, delay: number) => {
  let timeoutId: number | null = null;

  return (...args: any) => {
    clearTimeout(timeoutId as number);
    timeoutId = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};
