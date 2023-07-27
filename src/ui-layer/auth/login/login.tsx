import { Button, Field, FieldProps, Input } from "@fluentui/react-components";
import VFlex from "../../shared/VFlex/VFlex";
import { useState } from "react";
import { login } from "./service";

const Login = (props: Partial<FieldProps>) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    const token = await login(email, password);
    console.log(token);
    localStorage.setItem("token", token);
    window.location.reload();
  }

  return (
    <VFlex class="gap-2 items-center justify-center flex-1">
      <Field
        label="Login"
        onChange={(e) => {
          setEmail((e.target as HTMLInputElement).value);
        }}
        {...props}
      >
        <Input />
      </Field>
      <Field
        label="Password"
        onChange={(e) => {
          setPassword((e.target as HTMLInputElement).value);
        }}
        {...props}
      >
        <Input type="password" />
      </Field>
      <Button appearance="primary" onClick={handleLogin}>
        Login
      </Button>
    </VFlex>
  );
};

export default Login;
