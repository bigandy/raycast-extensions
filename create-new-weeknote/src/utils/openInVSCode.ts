import { getApplications, getPreferenceValues, open } from "@raycast/api";

// inspired by this extension: https://github.com/raycast/extensions/blob/4978a558a7bf210f3f3e503f5d37beaf3ef9af8c/extensions/open-in-visual-studio-code/src/index.ts
export const openInVSCode = async (filePath: string) => {
  try {
    const preferences = getPreferenceValues();
    const applications = await getApplications();
    const vscodeApplication = applications.find((app) => app.bundleId === preferences.VSCodeVariant);

    if (!vscodeApplication) {
      console.log("VS Code not installed");
    }
    await open(filePath, vscodeApplication);
  } catch (error) {
    console.error({ error });
  }
};
