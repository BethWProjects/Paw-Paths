export const fetchAllPaths = async () => {
  return await fetch("https://paw-paths.herokuapp.com/api/v1/pathData");
};
