import React from 'react';

import { styled } from 'baseui';
// import {Block} from 'baseui/block';

import { Centered } from '../common';

import CheckBox from './basic-uncontrolled';
import CheckBoxControlled from './basic-controlled';
import CheckBoxAlignment from './alignment';
import CheckBoxToggle from './toggle';
import CheckBoxError from './error';


const Name = styled('span', {
  marginRight: '10px'
});

export default () => (
  <React.Fragment>
    <Name>CheckBoxes</Name>
    <Centered>
      <CheckBox />
      <CheckBoxControlled/>
      <CheckBoxAlignment/>
    </Centered>
    <Centered>
      <CheckBoxToggle/>
      <CheckBoxError/>
    </Centered>
   
  </React.Fragment>
);
