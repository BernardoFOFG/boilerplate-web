/* eslint-disable react-hooks/exhaustive-deps */
import { Grid, useToast } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';

import { CardGame, type CardGameProps } from '~/lib/components/Card';
import { Header } from '~/lib/components/Header';
import { Layout } from '~/lib/layout';

export const Games = () => {
  const [data, setData] = useState<CardGameProps[]>([]);

  const toast = useToast();
  const getGames = async () => {
    try {
      const response = await axios.get('https://zelda.fanapis.com/api/games');
      setData(response.data.data);
    } catch {
      toast({
        title: 'Erro na busca de Games',
        status: 'error',
      });
    }
  };

  useEffect(() => {
    getGames();
  }, []);
  return (
    <Layout>
      <Header title="Games" />
      <Grid templateColumns="repeat(5, 1fr)" gap={4}>
        {data.map((value) => (
          <CardGame id={value.id} name={value.name} />
        ))}
      </Grid>
    </Layout>
  );
};
