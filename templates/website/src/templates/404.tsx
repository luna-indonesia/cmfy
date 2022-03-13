import { getImage, getStyle } from "../../libs";
import { stylesAtom } from "@stores/assets";
export default () => {
  return (
    <main class={getStyle("404", stylesAtom).container}>
      404
      <a
        onClick={() => {
          history.back();
        }}
      >
        ads
      </a>
    </main>
  );
};
