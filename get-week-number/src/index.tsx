import { Detail, ActionPanel, Action } from "@raycast/api";
import { useFetch } from "@raycast/utils";

// const url = "http://localhost:8888/api/date/week-number";
const url = "https://bigandy-astro.netlify.app/.netlify/functions/week";

interface WeekNumber {
  weekNumber: string;
}

export default function Command() {
  const { isLoading, data, revalidate } = useFetch<WeekNumber>(url);

  return (
    <Detail
      isLoading={isLoading}
      markdown={`Week Number: ${data?.weekNumber}`}
      actions={
        <ActionPanel>
          <Action.CopyToClipboard title="Copy" content={data?.weekNumber as string} />
          <Action title="Reload" onAction={() => revalidate()} />
        </ActionPanel>
      }
    />
  );
}
