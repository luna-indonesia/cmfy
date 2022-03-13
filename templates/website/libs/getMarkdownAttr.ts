import { Component } from "solid-js";
import yaml from "js-yaml";

export const getMarkdownAttr = (markdown: Component) => {
  return yaml.loadAll(markdown)[0];
};
