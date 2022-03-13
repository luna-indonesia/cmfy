import fs from "fs";
import yaml from "js-yaml";
import pascalCase from "just-pascal-case";
import mime from "mime-types";

const data = (value: string, path?: string) => {
  const templateName = () => {
    if (
      mime.lookup(`.${value}`) === "text/markdown" ||
      mime.lookup(`.${value}`) === "text/mdx"
    )
      return path ?? "article";
    else return yaml.load(fs.readFileSync(`.${value}`, "utf8")).template;
  };
  if (
    fs.existsSync(
      `./src/templates/${pascalCase(templateName().toString())}.tsx`
    )
  )
    return templateName();
  else return "none";
};

export const setNewRoutes = (routes: any[], path?: string) => {
  return routes.map((value) => {
    if (value.children)
      return {
        path: value.path,
        children: setNewRoutes(value.children, path ? path : value.path),
      };
    else {
      return {
        path: value.path,
        element: `/src/templates/${pascalCase(
          data(value.component, path).toString()
        )}.tsx`,
        component: `/src/templates/${pascalCase(
          data(value.component, path).toString()
        )}.tsx`,
        config: value.component.replace("/src", ""),
      };
    }
  });
};
