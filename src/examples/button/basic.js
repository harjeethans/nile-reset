import * as React from 'react';
import {Button, KIND, SIZE} from 'baseui/button';
import {Block} from 'baseui/block';

export default () => (
  <React.Fragment>
    <Button size={SIZE.compact}>Primary</Button>
    <Block as="span" marginLeft="scale300" />
    <Button size={SIZE.compact} kind={KIND.secondary}>Secondary</Button>
    <Block as="span" marginLeft="scale300" />
    <Button size={SIZE.compact} kind={KIND.tertiary}>Tertiary</Button>
    <Block as="span" marginLeft="scale300" />
    <Button size={SIZE.compact} kind={KIND.minimal}>Minimal</Button>
  </React.Fragment>
);
