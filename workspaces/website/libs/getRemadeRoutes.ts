import fs from "fs";
import yaml from "js-yaml";
import pascalCase from "just-pascal-case";
import mime from "mime-types";

export const getRemadeRoutes = (routes: any[]) => {
  return routes.map((value) => {
    if (value.children)
      return { path: value.path, children: getRemadeRoutes(value.children) };
    else {
      const data = (value: string) => {
        const templateName = () => {
          if (
            mime.lookup(`.${value}`) === "text/markdown" ||
            mime.lookup(`.${value}`) == "text/mdx"
          )
            return "article";
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

      return {
        path: value.path,
        element: `/src/templates/${pascalCase(
          data(value.component).toString()
        )}.tsx`,
        component: `/src/templates/${pascalCase(
          data(value.component).toString()
        )}.tsx`,
        config: value.component.replace("/src", ""),
      };
    }
  });
};
