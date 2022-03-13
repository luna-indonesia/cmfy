import { imagesAtom, stylesAtom } from "@/stores/assets";
import { getImage, getStyle } from "../../libs";

export default (props) => {
  return (
    <main class={getStyle(props.class, stylesAtom).container}>
      <p class={getStyle(props.class, stylesAtom).welcome}>
        Hey, How are you ?
      </p>
      <img src={getImage("sakura", imagesAtom)} />
      <p>
        You can start creating your next
        <span>masterpiece</span>
        by checking
        <code>./src</code>
        and edit some stuff
      </p>
      <p class={getStyle(props.class, stylesAtom).ps}>
        <b>PS :</b>Don't forget to change the
        <code>index.html</code>
        inside the
        <code>./public</code>
        folder
        <span>:3</span>
      </p>
    </main>
  );
};
