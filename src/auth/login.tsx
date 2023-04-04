import {
  Button,
  Container,
  Group,
  Modal,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import Register from "./register";
import { useForm } from "@mantine/form";
// import toast from "react-simple-toasts";
import toast from 'react-hot-toast'
import { sUser } from "@/g_state/g_state";

const Login = () => {
  const formData = useForm({
    initialValues: {
      data: {
        email: "",
        password: "",
      },
    },
  });

  const onLogin = () => {
    if (Object.values(formData.values.data).includes(""))
      return  toast.error("Data tidak boleh kosong");
    fetch("api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData.values.data),
    }).then(async (v) => {
      if (v.status === 200) {
        const data = await v.json();
        localStorage.setItem("user", JSON.stringify(data));
        sUser.value = data;
      } else {
        toast.error("Email dan Password salah");
      }
    });
  };

  return (
    <Container size={430} my={40} pt={100}>
      <Text fz={25} fw={700} ta={"center"}>Welcome to Login</Text>
      <Paper withBorder shadow="md" p={30} mt={30} radius={"md"}>
        <TextInput {...formData.getInputProps("data.email")} label="Email" placeholder="email" required />
        <PasswordInput
          {...formData.getInputProps("data.password")}
          label="Password"
          placeholder="password"
          required
          mt={"md"}
        />
        <Button mt={25} fullWidth onClick={onLogin}>
          Login
        </Button>
        <Group pt={10}>
          <Text fz={13}>Dont have an account?</Text>
          <ButtonRegister />
        </Group>
      </Paper>
    </Container>
  );
};

const ButtonRegister = () => {
  const [open, setOpen] = useDisclosure(false);
  return (
    <>
      <Button variant="subtle" onClick={setOpen.open} size="xs">
        Register
      </Button>
      <Modal fullScreen opened={open} onClose={setOpen.close}>
        <Register />
      </Modal>
    </>
  );
};

export default Login;
