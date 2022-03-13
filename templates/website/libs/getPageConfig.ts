import _ from "lodash";

export const getPageConfig = (
  routes: any[],
  pathname: string,
  pages: { [key: string]: any }
) => {
  const config = () => {
    const data = _.find(routes, { config: `/pages${pathname}.yaml` });
    if (data) return data;
    else
      return _.find(routes, {
        config:
          pathname.length > 1
            ? `/pages${pathname}/index.yaml`
            : `/pages/index.yaml`,
      });
  };
  if (config()) {
    const path = Object.keys(pages.value).find((key) =>
      key.includes(config().config)
    );
    return pages.value[path].default;
  } else {
    const temp = routes.map((value) => {
      if (value.children) return getPageConfig(value.children, pathname, pages);
    });
    return temp.filter((value) => value !== undefined)[0];
  }
};
