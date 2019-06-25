import * as React from 'react';
import {FormControl} from 'baseui/form-control';
import {StatefulInput, SIZE} from 'baseui/input';
import {StatefulTextarea} from 'baseui/textarea';
import {StatefulCheckbox} from 'baseui/checkbox';
import {StatefulRadioGroup, Radio} from 'baseui/radio';
import {StatefulPhoneInput} from 'baseui/phone-input';
import {StatefulSlider, Slider} from 'baseui/slider';
import { styled } from 'baseui';

const Container = styled('div', {
  width: '600px'
});

export default () => (
  <React.Fragment>
    <Container>
      <FormControl label="Input label" caption="Input caption">
        <StatefulInput size={SIZE.compact} />
      </FormControl>

      <FormControl label="Phone" caption="Phone number">
        <StatefulPhoneInput size={SIZE.compact} />
      </FormControl>

      <FormControl label="Slider" caption="Slider">
        <StatefulSlider />
      </FormControl>
      <FormControl label="Slider" caption="Slider">
        <Slider value={[25, 75]} />
      </FormControl>


    </Container>
    <Container>
      <FormControl label="Textarea label" caption="Textarea caption">
        <StatefulTextarea size={SIZE.compact} />
      </FormControl>
    </Container>
    <Container>
      <FormControl label="Checkbox label" caption="Checkbox caption">
        <StatefulCheckbox>Checkbox control</StatefulCheckbox>
      </FormControl>
    </Container>
    <Container>
      <FormControl label="RadioGroup label" caption="RadioGroup caption">
        <StatefulRadioGroup>
          <Radio value="red">Red</Radio>
          <Radio value="green">Green</Radio>
          <Radio value="blue">Blue</Radio>
        </StatefulRadioGroup>
      </FormControl>
    </Container>

  </React.Fragment>
);
