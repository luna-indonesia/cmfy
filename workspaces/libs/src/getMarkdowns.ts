export const getMarkdowns = (
  pathname: string,
  markdowns: { [key: string]: any }
) => {
  const keys = Object.keys(markdowns.value).filter((value) =>
    value.includes(pathname)
  );
  return keys.map((value) => markdowns.value[value]);
};
