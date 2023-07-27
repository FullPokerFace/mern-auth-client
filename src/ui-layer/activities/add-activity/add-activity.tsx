import {
  Button,
  Field,
  FieldProps,
  Input,
  Toast,
  ToastBody,
  ToastTitle,
  Toaster,
  useId,
  useToastController,
} from "@fluentui/react-components";
import VFlex from "../../shared/VFlex/VFlex";
import { useState } from "react";
import { addActivity } from "./service";

const AddActivity = (props: Partial<FieldProps>) => {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");

  async function handleAddActivity() {
    const newActivity = await addActivity(name, time);
    if (newActivity?._id) {
      notify();
    }
  }

  const toasterId = useId("toaster");
  const { dispatchToast } = useToastController(toasterId);
  function notify() {
    setName("");
    setTime("");
    dispatchToast(
      <Toast>
        <ToastTitle>Activity created</ToastTitle>
        <ToastBody>
          {name}, {time}
        </ToastBody>
      </Toast>,
      { intent: "success" }
    );
  }

  return (
    <VFlex class="gap-2">
      <Toaster toasterId={toasterId} />
      <Field
        onChange={(e) => {
          setName((e.target as HTMLInputElement).value);
        }}
        label="Activity name"
        {...props}
      >
        <Input />
      </Field>
      <Field
        onChange={(e) => {
          setTime((e.target as HTMLInputElement).value);
        }}
        label="Time"
        {...props}
      >
        <Input />
      </Field>
      <Button appearance="primary" onClick={handleAddActivity}>
        Add activity
      </Button>
    </VFlex>
  );
};

export default AddActivity;
