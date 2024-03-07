export const filterDataAsync = async (
  data: Data[],
  searchText: string
): Promise<string[]> => {
  return new Promise((resolve) => {
    // simulating a fake API call here with a delay of 200ms
    setTimeout(() => {
      const filteredData = data
        .filter((item) =>
          item.name.common.toLowerCase().startsWith(searchText.toLowerCase())
        )
        .map((item) => item.name.common);

      resolve(filteredData);
    }, 200);
  });
};
