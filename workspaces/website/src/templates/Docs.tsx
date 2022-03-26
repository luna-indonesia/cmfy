import { useLocation } from "solid-app-router";
import { markdownAtom } from "@/stores/assets";
import { getMarkdown } from "../../libs";
import { Dynamic } from "solid-js/web";
import Nav from "@components/Nav";
import routes from "~solid-pages";

export default () => {
  const component = getMarkdown(routes, useLocation().pathname, markdownAtom);

  return (
    <div>
      <Nav />
      <main>
        <Dynamic component={component.default} />
      </main>
    </div>
  );
};
