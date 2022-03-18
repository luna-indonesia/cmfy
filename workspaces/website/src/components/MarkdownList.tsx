import { Index, Show } from "solid-js";
import { markdownAtom } from "@stores/assets";
import { useLocation } from "solid-app-router";
import { getMarkdowns } from "../../libs";
import { Dynamic } from "solid-js/web";

export default () => {
  const markdowns = getMarkdowns(useLocation().pathname, markdownAtom);

  return (
    <div>
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
