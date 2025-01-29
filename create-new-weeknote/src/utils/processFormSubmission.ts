import { format } from "date-fns";

const testing = false;

import { showHUD } from "@raycast/api";

import { type Values } from "../types";

const testingPathToFolder = "/Users/andrew/Desktop/raycast-testing/";

import { createNewFileWithText } from "./createNewFileWithText";
import { openInVSCode } from "./openInVSCode";

export const processFormSubmission = async (values: Values) => {
  console.log("PROCESSING VALUES", { values });

  const { date, weeknumber, title } = values;
  const year = format(date, "yyyy");
  const month = format(date, "MM");
  const day = format(date, "dd");

  const text = `---
title: "${title}"
date: ${year}-${month}-${day}
draft: false 
tags:
  - "weeknotes"
---

Here's what I got up to last week:
${values.content
  .split("\n")
  .map((line) => `\n- ${line}`)
  .join(" ")}
`;

  const filename = testing
    ? `weeknote-${Date.now() as unknown as string}-${weeknumber}`
    : `weeknotes-${year}-${weeknumber}`;

  const pathToFolder = testing ? testingPathToFolder : `/Users/andrew/Sites/astro-blog/src/content/weeknotes/${year}/`;

  const createdFile = await createNewFileWithText("md", pathToFolder, text, filename);

  await showHUD(`📄 created new file: ${createdFile.fileName}`);

  await openInVSCode(createdFile.filePath);
};
