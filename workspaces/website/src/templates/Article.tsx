import { useLocation } from "solid-app-router";
import { markdownAtom } from "@/stores/assets";
import { getMarkdown } from "../../libs";
import { Dynamic } from "solid-js/web";
import Nav from "@components/Nav";
import routes from "~solid-pages";

export default () => {
  const content = getMarkdown(routes, useLocation().pathname, markdownAtom);
  console.log(content.title);
  return (
    <div>
      <Nav />
      <main>
        <Dynamic component={content.default} />
      </main>
    </div>
  );
};
