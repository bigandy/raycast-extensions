import { Detail, ActionPanel, Action } from "@raycast/api";

const useWeekNumber = () => {
  const currentDate = new Date();
  const startDate = new Date(currentDate.getFullYear(), 0, 1);
  const dateDifference: number = (currentDate as unknown as number) - (startDate as unknown as number);
  const days = Math.floor(dateDifference / (24 * 60 * 60 * 1000));

  const weekNumber = Math.ceil(days / 7);
  return weekNumber;
};

export default function Command() {
  const weekNumber = useWeekNumber();

  return (
    <Detail
      markdown={`Week Number: ${weekNumber}`}
      actions={
        <ActionPanel>
          <Action.CopyToClipboard title="Copy" content={weekNumber} />
        </ActionPanel>
      }
    />
  );
}
