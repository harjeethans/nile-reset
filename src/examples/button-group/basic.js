import * as React from 'react';
import {Button} from 'baseui/button';
import {ButtonGroup} from 'baseui/button-group';
import Upload from 'baseui/icon/upload.js';
import {Block} from 'baseui/block';


export default () => (
  <React.Fragment>
    <ButtonGroup>
      <Button>Label</Button>
      <Button>Label</Button>
      <Button>Label</Button>
    </ButtonGroup>
    <Block as="span" marginLeft="scale300" />
    <ButtonGroup>
      <Button>
        <Upload size={24} />
      </Button>
      <Button>
        <Upload size={24} />
      </Button>
      <Button>
        <Upload size={24} />
      </Button>
    </ButtonGroup>
    <Block as="span" marginLeft="scale300" />
    <ButtonGroup>
      <Button startEnhancer={() => <Upload size={24} />}>Label</Button>
      <Button startEnhancer={() => <Upload size={24} />}>Label</Button>
      <Button startEnhancer={() => <Upload size={24} />}>Label</Button>
    </ButtonGroup>
  </React.Fragment>
);
