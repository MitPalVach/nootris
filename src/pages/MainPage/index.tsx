import React from 'react';
import { NextPage } from 'next';
import Layout from '../../components/layout';
import Header from '../../components/Header';
import Top from '../../components/Top';
import Down from '../../components/Down';

const MainPage: NextPage = () => {

  return (
    <Layout>
      <Header/>
      <main>
        <section>
          <Top/>
        </section>
        <section>
          <Down/>
        </section>
      </main>
    </Layout>
  );
};

export default MainPage;