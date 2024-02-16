import { Box, Flex } from '@chakra-ui/react';
import type { ReactNode } from 'react';

import { Sidebar } from './sidebar';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box margin="0 auto" transition="0.5s ease-out">
      <Box>
        <Flex as="main" flex={1} w="100%" minHeight="100vh" height="100%">
          <Sidebar />
          <Box
            width="calc(100% - 8rem)"
            backgroundColor="gray.800"
            textColor="white"
            padding={8}
          >
            {children}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
