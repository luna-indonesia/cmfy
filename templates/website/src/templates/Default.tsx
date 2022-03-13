import { Show, Index } from "solid-js";
import { useLocation } from "solid-app-router";
import { pagesAtom, componentsAtom } from "@/stores/assets";
import { getPageConfig, getComponents } from "../../libs";
import routes from "~solid-pages";

import Nav from "@components/Nav";
import { Dynamic } from "solid-js/web";

export default () => {
  const config = getPageConfig(routes, useLocation().pathname, pagesAtom);
  const components = getComponents(config.content, componentsAtom);

  return (
    <div>
      <Show when={config.nav}>
        <Nav />
      </Show>
      <main>
        <Index each={components} fallback={<div>loading</div>}>
          {(component) => (
            <Show when={component} fallback={<div>dfs</div>}>
              <Dynamic
                component={component().component}
                class={component().props.class}
              />
            </Show>
          )}
        </Index>
      </main>
    </div>
  );
};
