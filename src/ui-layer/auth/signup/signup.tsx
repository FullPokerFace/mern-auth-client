import { Button, Field, FieldProps, Input } from "@fluentui/react-components";
import VFlex from "../../shared/VFlex/VFlex";

const Signup = (props: Partial<FieldProps>) => {
  return (
    <VFlex>
      <Field label="Signup" {...props}>
        <Input />
      </Field>
      <Field label="Password" {...props}>
        <Input type="password" />
      </Field>
      <Button appearance="primary">Signup</Button>
    </VFlex>
  );
};

export default Signup;
