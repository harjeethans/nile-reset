import React from 'react';

import { styled } from 'baseui';

import { Centered } from '../common';

import Buttons from './basic';
import Buttons1 from './basic-compact';
import ButtonStates from './states';
import DropdownButton from './dropdown';
import WithEnhancers from './with-enhancers';

const Name = styled('span', {
  marginRight: '10px'
});

export default () => (
  <React.Fragment>
    <Name>Buttons</Name>
    <Centered>
      <Buttons />
      <Buttons1 />
      <ButtonStates />
    </Centered>
    <Centered>
      <DropdownButton/>
      <WithEnhancers/>
    </Centered>
  </React.Fragment>
);
