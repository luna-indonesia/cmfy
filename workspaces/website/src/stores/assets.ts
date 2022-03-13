import { atom } from "nanostores";

export const pagesAtom = atom<{ [key: string]: any }>(
  import.meta.globEager("../pages/**/*.yaml")
);

export const imagesAtom = atom<{ [key: string]: any }>(
  import.meta.globEager(
    "../assets/images/**/*.(svg|SVG|jpg|jpeg|JPG|JPEG|PNG|png|gif|GIF)"
  )
);

export const markdownAtom = atom<{ [key: string]: any }>(
  import.meta.globEager("../articles/**/*.(md|mdx)")
);

export const componentsAtom = atom<{ [key: string]: any }>(
  import.meta.globEager("../components/**/*.tsx")
);

export const stylesAtom = atom<{ [key: string]: any }>(
  import.meta.globEager("../assets/styles/**/*.module.css")
);
