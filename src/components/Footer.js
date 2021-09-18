import { EuiBottomBar, EuiSpacer, EuiText } from '@elastic/eui';
import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <EuiText>
        Follow us on Facebook!
      </EuiText>
      <EuiSpacer size="xl" />
      <EuiSpacer size="xl" />
      <EuiBottomBar style={{position: 'sticky'}}  bottom={10}>
      </EuiBottomBar>
    </div>
  );
};

export default Footer;