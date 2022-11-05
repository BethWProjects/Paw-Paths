export const fetchAllPaths = async () => {
  return await fetch("httpfs://paw-paths.herokuapp.com/api/v1/pathData");
};
