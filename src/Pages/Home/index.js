import React from 'react';

import dadosIniciais from '../../data/dados_iniciais.json'
import Carousel from '../../components/Carousel';
import BannerMain from '../../components/BannerMain'
import PageDefault from '../PageDefault';

function ListCarousel() {
  return (
    dadosIniciais.categorias.map((categoria) => {
      Carousel({
        ignoreFirstVideo: 'any',
        category: categoria
      })
    }) 
  )
}

function Home() {
  return (
    <PageDefault>
      
      <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo} 
        videoDescription={"O que é Front-End?"} 
        url={dadosIniciais.categorias[0].videos[0].url} 
      />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[1]} />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[2]} />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[3]} />

  
    </PageDefault>
  );
}

export default Home;
