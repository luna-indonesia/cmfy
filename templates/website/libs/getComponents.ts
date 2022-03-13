import pascalCase from "just-pascal-case";

export const getComponents = (
  list: { [key: string]: string }[],
  components: { [key: string]: any }
) => {
  const array = list.map((item) => {
    const component = Object.keys(components.value).find((key) =>
      key.includes(pascalCase(item.name.toString()))
    );
    if (component)
      return {
        component: components.value[component].default,
        props: item,
      };
    else return undefined;
  });
  return array.filter((element) => element !== undefined);
};
