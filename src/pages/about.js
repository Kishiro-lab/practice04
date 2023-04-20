import React from "react";
import { Helmet } from 'react-helmet-async'
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { Footer } from '../components/Footer';

export const About = (props) => {
  return (
    <div>      
      <Helmet>
        <title>{props.title}</title>       
      </Helmet>
      <Header />
      <Main />
      <h2>About</h2>
      <Footer />
    </div>
  );
};