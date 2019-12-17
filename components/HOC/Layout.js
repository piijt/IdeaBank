import React from 'react';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';
import Sidebar from '../UI/Sidebar';


export default props => {
  return (
    <div>
      <Container>
        <Head>
          <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
        </Head>
        <Sidebar />
        {props.children}
      </Container>
    </div>

  );
};
