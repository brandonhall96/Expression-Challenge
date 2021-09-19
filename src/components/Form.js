import ReactDOM from 'react-dom';
import '@elastic/eui/dist/eui_theme_amsterdam_light.css';
import React from 'react';

import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiFormRow,
  EuiButton,
  EuiFieldText,
} from '@elastic/eui';

const Form = () => (
  <EuiFlexGroup style={{ maxWidth: 600 }}>
    <EuiFlexItem>
      <EuiFormRow label="Title" >
        <EuiFieldText />
      </EuiFormRow>
      <EuiFormRow label="City" >
        <EuiFieldText />
      </EuiFormRow>
      <EuiFormRow label="State" >
        <EuiFieldText />
      </EuiFormRow>
      <EuiFormRow label="Date" >
        <EuiFieldText />
      </EuiFormRow>
      <EuiFormRow label="Site Number" >
        <EuiFieldText />
      </EuiFormRow>
    </EuiFlexItem>
   
    <EuiFlexItem grow={false}>
      <EuiFormRow hasEmptyLabelSpace>
        <EuiButton>Submit</EuiButton>
      </EuiFormRow>
    </EuiFlexItem>
  </EuiFlexGroup>
);

export default Form;