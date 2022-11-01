export const fetchAllPaths = async () => {
  return await fetch("http://localhost:8080/api/v1/pathData");
};
