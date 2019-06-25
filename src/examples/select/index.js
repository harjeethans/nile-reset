import React from 'react';

import { styled } from 'baseui';
// import {Block} from 'baseui/block';

import { Name, Container } from '../common';

import Select from './sizes';
import SelectMiltiPick from './search-multi-pick';

export default () => (
  <React.Fragment>
    <Name>Select Control</Name>
    <Container>
      <Select/>
      <br/>
      <SelectMiltiPick/>
    </Container>
  </React.Fragment>
);
