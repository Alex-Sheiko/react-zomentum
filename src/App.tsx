import React from 'react';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Offer } from './components/Offer/Offer';

export const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Offer />
    </div>
  );
};
