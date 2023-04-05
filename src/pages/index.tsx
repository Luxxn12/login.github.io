import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Avatar, Box, Button, Container, Flex, Group, Menu, Paper, Text } from '@mantine/core'
import { sUser } from '@/g_state/g_state'
import { IconLogout } from "@tabler/icons-react"
import Pesanbarang from '@/Pesan/PesanBarang'
import { useShallowEffect } from '@mantine/hooks'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const onLogOut = () => {
    localStorage.removeItem('user')
    sUser.value = {}
  }

  
  return (
    <>
      <Flex
        direction={{ base: 'column', sm: 'row' }}
        gap={{ base: 'sm', sm: 'lg' }}
        justify={{ sm: 'flex-end' }}
      >
        <Group p={20}>
          <Menu>
            <Menu.Target>
              <Group style={{cursor: "pointer"}}>

                <Avatar radius="xl" />
                <Text fw={700}>{sUser.value?.name}</Text>
              </Group>
              {/* <Button variant='subtle'></Button> */}
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item icon={<IconLogout size="0.9rem" stroke={1.5} />} onClick={onLogOut} color='red'>Logout</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Flex>
        <Pesanbarang/>
    </>
  )
}
