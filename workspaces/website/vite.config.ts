import { defineConfig } from "vite";
import { VitePWA as vitePWA } from "vite-plugin-pwa";
import { ViteAliases as viteAliases } from "vite-aliases";
import { getRemadeRoutes } from "./libs";
import solidPlugin from "vite-plugin-solid";
import eslintPlugin from "vite-plugin-eslint";
import pages from "vite-plugin-pages";
import compress from "vite-plugin-compress";
import viteYaml from "@modyfi/vite-plugin-yaml";

export default defineConfig(async () => {
  const mdx = await import("@mdx-js/rollup");
  const remarkGFM = await import("remark-gfm");
  const remarkFM = await import("remark-frontmatter");
  const remarkMDXFM = await import("remark-mdx-frontmatter");
  return {
    plugins: [
      mdx.default({
        jsxImportSource: "solid-jsx",
        remarkPlugins: [
          remarkGFM.default,
          remarkFM.default,
          remarkMDXFM.remarkMdxFrontmatter,
        ],
      }),
      solidPlugin(),
      eslintPlugin(),
      vitePWA(),
      viteYaml(),
      compress(),
      viteAliases({
        useConfig: true,
        useTypescript: true,
        useIndexes: true,
      }),
      pages({
        extensions: ["yaml", "yml", "md", "mdx"],
        dirs: [
          { dir: "src/pages", baseRoute: "" },
          { dir: "src/articles", baseRoute: "articles" },
        ],
        onRoutesGenerated(routes) {
          return getRemadeRoutes(routes);
        },
      }),
    ],
    build: {
      target: "esnext",
      polyfillDynamicImport: false,
    },
  };
});
