export const getImage = (file: string, images: { [key: string]: any }) => {
  const image = Object.keys(images.value).find((key) =>
    key.includes(file.toString())
  );
  if (image) return images.value[image].default;
  else return "none";
};
