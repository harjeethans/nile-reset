import React from 'react';

import { styled } from 'baseui';
import {Block} from 'baseui/block';

import { Centered } from '../common';

import ButtonGroup from './basic';
import ButtonGroupCB from './checkbox-mode';
import ButtonGroupRadioMode from './radio-mode';
import DisabledButtonGroup from './disabled';
import ButtonGroupDropDown from './dropdown';
import ButtonGroupControlled from './controlled';

const Name = styled('span', {
  marginRight: '10px'
});

export default () => (
  <React.Fragment>
    <Name>ButtonGroup</Name>
    <Centered>
      <ButtonGroup />
      <Block as="span" marginLeft="scale300" />
      <ButtonGroupCB />
    </Centered>
    <Block as="span" marginLeft="scale300" />
    <Centered>
      <ButtonGroupRadioMode />
      <Block as="span" marginLeft="scale300" />
      <DisabledButtonGroup/>
      <Block as="span" marginLeft="scale300" />
     <ButtonGroupDropDown/>
    </Centered>
    <Centered>
    <Block as="span" marginLeft="scale300" />
    <ButtonGroupControlled/>

    </Centered>
  </React.Fragment>
);
