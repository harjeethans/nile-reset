import * as React from 'react';
import {Button} from 'baseui/button';
import Upload from 'baseui/icon/upload';
import ArrowRight from 'baseui/icon/arrow-right';
import {Block} from 'baseui/block';


export default () => (
  <React.Fragment>
    <Block as="span" marginLeft="scale300" />
    <Button startEnhancer={() => <ArrowRight size={24} />}>
      Start Enhancer
    </Button>
    <Block as="span" marginLeft="scale300" />
    <Button endEnhancer={() => <Upload size={24} />}>End Enhancer</Button>
  </React.Fragment>
);
