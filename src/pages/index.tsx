import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Button, Container, Group, Paper, Text } from '@mantine/core'
import { sUser } from '@/g_state/g_state'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const onLogOut = () => {
    localStorage.removeItem('user')
    sUser.value = {}
  }
  return (
    <>
    <Group p={40}>
      <Text>Hallo Selamat Datang </Text>
      <Text fw={700}>{sUser.value?.name}</Text>
    </Group>
      <Container size={430} my={40}>
        <Paper  withBorder shadow='md' p={30} mt={30} radius={"md"}>
          <Text fw={700} ta={'center'} fz={20}>Data Diri</Text>
        <Text mt={'md'}>Name :{sUser.value?.name}</Text>
        <Text mt={'md'}>Email :{sUser.value?.email}</Text>
        <Button mt={25} fullWidth onClick={onLogOut}>LogOut</Button>
        </Paper>
      </Container>
    </>
  )
}
