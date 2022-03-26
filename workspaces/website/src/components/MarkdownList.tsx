import { Index, Show } from "solid-js";
import { markdownAtom, stylesAtom } from "@stores/assets";
import { useLocation } from "solid-app-router";
import { getMarkdowns, getStyle } from "../../libs";
import { Dynamic } from "solid-js/web";

export default () => {
  const markdowns = getMarkdowns(useLocation().pathname, markdownAtom);

  return (
    <div class={getStyle("markdown", stylesAtom).container}>
      <Index each={markdowns} fallback={<div>loading</div>}>
        {(component) => (
          <Show when={component} fallback={<div>dfs</div>}>
            <Dynamic component={component().default} />
          </Show>
        )}
      </Index>
    </div>
  );
};
