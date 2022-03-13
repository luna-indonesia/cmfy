export const getStyle = (
  file: string | undefined,
  styles: { [key: string]: any }
) => {
  if (file !== undefined) {
    const style = Object.keys(styles.value).find((key) =>
      key.includes(file.toString())
    );
    if (style) return styles.value[style].default;
    else return "";
  } else return "";
};
