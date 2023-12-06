import fse from "fs-extra";

const isEmpty = (string: string | null | undefined) => {
  return !(string != null && String(string).length > 0);
};

function buildFileName(path: string, name: string, extension: string) {
  const directoryExists = fse.existsSync(path + name + "." + extension);
  if (!directoryExists) {
    return name + "." + extension;
  } else {
    let index = 2;
    while (directoryExists) {
      const newName = name + " " + index + "." + extension;
      const directoryExists = fse.existsSync(path + newName);
      if (!directoryExists) {
        return newName;
      }
      index++;
    }
    return name + "-" + index + "." + extension;
  }
}

export async function createNewFileWithText(
  fileExtension: string,
  saveDirectory: string,
  fileContent = "",
  fileName = "",
) {
  isEmpty(fileName)
    ? (fileName = buildFileName(saveDirectory, "Untitled", fileExtension))
    : (fileName = buildFileName(saveDirectory, fileName, fileExtension));
  const filePath = saveDirectory + fileName;
  fse.writeFileSync(filePath, fileContent);
  return { fileName: fileName, filePath: filePath };
}
