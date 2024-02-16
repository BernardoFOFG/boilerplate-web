/* eslint-disable react/no-unused-prop-types */
import { Card, CardBody, Stack, Heading } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export interface CardGameProps {
  name?: string;
  description?: string;
  developer?: string;
  publisher?: string;
  release_date?: string;
  id?: string;
}
export const CardGame = ({ name, id }: CardGameProps) => {
  const router = useRouter();
  return (
    <Card
      maxW="sm"
      onClick={() => router.push(`/games/${id}`)}
      backgroundColor="gray.600"
    >
      <CardBody maxH="350">
        <Stack spacing="3">
          <Heading size="md" textColor="gray.200">
            {name}
          </Heading>
        </Stack>
      </CardBody>
    </Card>
  );
};
