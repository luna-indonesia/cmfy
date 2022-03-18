import _ from "lodash";

export const getMarkdown = (
  routes: any[],
  pathname: string,
  markdowns: { [key: string]: any }
) => {
  const config =
    _.find(routes, { config: `${pathname}.mdx` }) ??
    _.find(routes, { config: `${pathname}.md` });
  if (config) {
    const path = Object.keys(markdowns.value).find((key) =>
      key.includes(config.config)
    );
    return markdowns.value[path];
  } else {
    const temp = routes.map((value) => {
      if (value.children)
        return getMarkdown(value.children, pathname, markdowns);
    });
    return temp.filter((value) => value !== undefined)[0];
  }
};
