import React from 'react';

import { styled } from 'baseui';
// import {Block} from 'baseui/block';

import { Centered } from '../common';

import FormControl from './basic';
import FormControlKinds from './kinds';
import DateTime from './datetime';

const Name = styled('span', {
  marginRight: '10px'
});

export default () => (
  <React.Fragment>
    <Name>Form Controls</Name>
    <FormControl />
    <FormControlKinds/>
    <DateTime/>
  </React.Fragment>
);
