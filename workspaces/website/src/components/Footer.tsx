import { imagesAtom, stylesAtom } from "@/stores/assets";
import { getImage, getStyle } from "../../libs";

export default (props) => {
  return (
    <footer class={getStyle(props.class, stylesAtom).container}>
      <div class={getStyle(props.class, stylesAtom).footer}>
        <div>
          CMFY is
          <a href="https://github.com/tsanyqudsi/cmfy/blob/master/LICENSE">
            MIT LICENSE
          </a>
          <span>
            Background pictures taken from
            <a href="https://unsplash.com/">Unsplash</a>
          </span>
        </div>
        <a href="https://github.com/tsanyqudsi/cmfy">
          <img src={getImage("github.svg", imagesAtom)} alt="Github" />
        </a>
      </div>
    </footer>
  );
};
