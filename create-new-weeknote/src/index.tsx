import { Form, ActionPanel, Action, showToast, popToRoot } from "@raycast/api";
import { useWeekNumber } from "./hooks/useWeeknumber";

import { processFormSubmission } from "./utils/processFormSubmission";
import { type Values } from "./types";

export default function Command() {
  const defaultWeeknumber = useWeekNumber();

  async function handleSubmit(values: Values) {
    await processFormSubmission(values);

    showToast({ title: "Submitted form", message: "See logs for submitted values" });
    // TODO Clear the form
  }

  return (
    <Form
      actions={
        <ActionPanel>
          <Action.SubmitForm onSubmit={handleSubmit} />
        </ActionPanel>
      }
    >
      <Form.Description text="Compose a weeknote here." />

      <Form.TextField id="title" title="Weeknote Title" placeholder="Enter text" defaultValue="Weeknote title" />

      <Form.TextArea id="content" title="This week was mostly..." placeholder="This week was mostly..." />

      <Form.Separator />

      <Form.DatePicker id="date" title="Date picker" defaultValue={new Date()} />

      <Form.Dropdown id="weeknumber" title="Weeknumber" defaultValue={defaultWeeknumber.toString()}>
        {[...new Array(52)]
          .map((_, i) => i + 1)
          .map((weekNumber) => {
            return <Form.Dropdown.Item key={weekNumber} value={weekNumber.toString()} title={`week ${weekNumber}`} />;
          })}
      </Form.Dropdown>
    </Form>
  );
}
