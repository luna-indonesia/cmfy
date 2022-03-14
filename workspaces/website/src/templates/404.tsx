import { getImage, getStyle } from "../../libs";
import { stylesAtom, imagesAtom } from "@stores/assets";
import Nav from "@components/Nav";

export default () => {
  return (
    <>
      <Nav />
      <main class={getStyle("404", stylesAtom).container}>
        <img src={getImage("error404.png", imagesAtom)} />
        <a
          onClick={() => {
            history.back();
          }}
          class={getStyle("404", stylesAtom).back}
        >
          Go Back
        </a>
        <a href="https://www.flaticon.com/free-icons/404" title="404 icons">
          404 icons created by Freepik - Flaticon
        </a>
      </main>
    </>
  );
};
