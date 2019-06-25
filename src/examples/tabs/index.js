import React from 'react';

import { Container, Name } from '../common';

import Tab from './basic';
import TabVertical from './vertical';

export default () => (
  <React.Fragment>
    <Name>Tabs</Name>
    <Container>
      <Tab/>
      <br/>
      <TabVertical/>
    </Container>
  </React.Fragment>
);
