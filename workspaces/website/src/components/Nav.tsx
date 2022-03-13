import nav from "@config/nav.yaml";
import { Index, Show } from "solid-js";
import { getImage, getStyle } from "../../libs";
import { imagesAtom, stylesAtom } from "@/stores/assets";
import { Link } from "solid-app-router";

export default () => {
  return (
    <header class={getStyle(nav.class, stylesAtom).container}>
      <Show when={nav.logo} fallback={<div>loading</div>}>
        <img src={getImage(nav.logo.name, imagesAtom)} alt={nav.logo.alt} />
      </Show>
      <nav>
        <Index each={nav.list as any[]} fallback={<div>loading</div>}>
          {(item) => (
            <Show
              when={item().img}
              fallback={
                <li>
                  <Link href={item().url ?? "/"}>{item().name}</Link>
                </li>
              }
            >
              <li>
                <Link href={item().url ?? "/"}>
                  <img
                    src={getImage(item().img.name, imagesAtom)}
                    alt={item().img.alt}
                  />
                </Link>
              </li>
            </Show>
          )}
        </Index>
      </nav>
    </header>
  );
};
