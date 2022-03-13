import yaml from "js-yaml";
import fs from "fs";

export const loadYaml = (
  configDir: string,
  fileName: string,
  keyFunctions: string[] = []
) => {
  const JSONData = yaml.load(
    fs.readFileSync(`./${configDir}/${fileName}.yaml`, "utf8")
  );
  keyFunctions.map((key) => {
    if (JSONData[key]) JSONData[key] = Function(JSONData[key]);
  });
  return JSONData;
};
