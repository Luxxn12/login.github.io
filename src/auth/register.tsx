import { Button, Container, Paper, PasswordInput, Text, TextInput, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useRouter } from 'next/router';
import React from 'react';
import toast from 'react-simple-toasts';

const Register = () => {
  const router = useRouter()
  const formRegister = useForm({
    initialValues: {
      data: {
        name: "",
        email: "",
        password: "",
      }
    }
  })

  const onRegister = () => {
    if (Object.values(formRegister.values.data).includes("")) {
      return toast("Lengkapi Data Diri")
    }

    fetch('api/auth/register', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formRegister.values.data)
    }).then(v => {
      if (v.status === 201) {
        toast("Success")
        router.reload()
      } else {
        toast("Email Telah digunakan")
      }
    })
  }
  return (
    <>
    <Container size={430} my={40} >
      <Text fz={25} fw={700} ta={'center'}>Welcome to Register</Text>
      <Paper withBorder shadow='md' p={30} mt={30} radius={"md"}>
        <TextInput {...formRegister.getInputProps("data.name")} label="Username" placeholder='username' required/>
        <TextInput {...formRegister.getInputProps("data.email")} label="Email" placeholder='email' required mt={"md"}/>
        <PasswordInput {...formRegister.getInputProps("data.password")} label="Password" placeholder='password' required  mt={"md"}/>
        <Button fullWidth mt={25} onClick={onRegister}>Register</Button>
      </Paper>
    </Container>
    </>
  );
}

export default Register;
