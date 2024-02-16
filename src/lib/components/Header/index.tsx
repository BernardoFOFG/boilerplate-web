import { HStack, Heading } from '@chakra-ui/react';

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <HStack marginBottom={12}>
      <Heading fontSize={24}>{title}</Heading>
    </HStack>
  );
};
