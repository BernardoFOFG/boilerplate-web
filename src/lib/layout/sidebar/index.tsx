import { Flex, Stack, Button, Icon, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { CgGames } from 'react-icons/cg';
import { HiArrowRightCircle, HiArrowLeftCircle } from 'react-icons/hi2';

import Logo from 'assets/logo.webp';

export const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();
  const options = [
    {
      id: crypto.randomUUID(),
      icon: CgGames,
      router: '/games',
      name: 'Games',
    },
    {
      id: crypto.randomUUID(),
      icon: CgGames,
      router: '/staff',
      name: 'Staff',
    },
    {
      id: crypto.randomUUID(),
      icon: CgGames,
      router: '/characters',
      name: 'Characters',
    },
    {
      id: crypto.randomUUID(),
      icon: CgGames,
      router: '/monsters',
      name: 'Monster',
    },
    {
      id: crypto.randomUUID(),
      icon: CgGames,
      router: '/dungeons',
      name: 'Dungeons',
    },
    {
      id: crypto.randomUUID(),
      icon: CgGames,
      router: '/places',
      name: 'Places',
    },
    {
      id: crypto.randomUUID(),
      icon: CgGames,
      router: '/items',
      name: 'Items',
    },
  ];

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <Stack
      as="article"
      width={openMenu ? 64 : 32}
      padding={8}
      backgroundColor="gray.700"
      transition="1s all"
      justifyContent="space-between"
      boxShadow="dark-lg"
    >
      <Stack gap={8}>
        <Flex>
          <Image src={Logo} alt="Logo" />
        </Flex>

        <Stack gap={4}>
          {options.map((value) => (
            <Button
              onClick={() => router.push(value.router)}
              variant="solid"
              backgroundColor={
                router.pathname === value.router ? 'yellow.500' : 'gray.800'
              }
              key={value.id}
              _hover={{ opacity: 0.7 }}
              gap={4}
              justifyContent="start"
            >
              <Icon
                as={value.icon}
                width={8}
                height={8}
                color="gray.200"
                _hover={{ opacity: 0.7 }}
              />
              {openMenu && <Text textColor="gray.200">{value.name}</Text>}
            </Button>
          ))}
        </Stack>
      </Stack>

      <Button
        onClick={handleOpenMenu}
        variant="unstyled"
        display="flex"
        justifyContent={openMenu ? 'flex-end' : 'center'}
        transition="1s all"
      >
        {!openMenu ? (
          <HiArrowRightCircle size={32} color="white" />
        ) : (
          <HiArrowLeftCircle size={32} color="white" />
        )}
      </Button>
    </Stack>
  );
};
