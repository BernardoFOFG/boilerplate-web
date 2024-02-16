/* eslint-disable react-hooks/exhaustive-deps */
import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import type { CardGameProps } from '~/lib/components/Card';

interface GameIdProps {
  success: boolean;
  data: CardGameProps[];
}

export const GameId = () => {
  const router = useRouter();
  const toast = useToast();
  const [gameData, setGameData] = useState<GameIdProps | null>(null);

  const getGameById = async () => {
    try {
      const response = await axios.get(
        `https://zelda.fanapis.com/api/games/${router.query.id}`
      );
      setGameData(response.data);
    } catch (error) {
      toast({
        title: 'Game não encontrado',
        status: 'error',
      });
      router.push('/games');
    }
  };

  useEffect(() => {
    if (router.query.id) {
      getGameById();
    }
  }, [router.query.id]);

  if (!gameData) {
    return <div>Carregando...</div>;
  }

  return <div>{JSON.stringify(gameData)}</div>;
};
