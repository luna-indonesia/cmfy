import { imagesAtom, stylesAtom } from "@/stores/assets";
import { getImage, getStyle } from "../../libs";

export default (props) => {
  return (
    <header class={getStyle(props.class, stylesAtom).blur}>
      <img src={getImage("cmfy.svg", imagesAtom)} class="logo" alt="logo" />
      <div class={getStyle(props.class, stylesAtom).titleBar}>
        <div class={getStyle(props.class, stylesAtom).title}>
          {"description"}
          <span>/ˈkəmfē/</span>
        </div>
        <div class={getStyle(props.class, stylesAtom).version}>
          Current Version :<span>{"version"}</span>
        </div>
      </div>
    </header>
  );
};
