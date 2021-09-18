import React, { useState } from 'react';

import {
  EuiHeader,
  EuiHeaderLogo,
  EuiSwitch,
  EuiSpacer,
} from '@elastic/eui';

const Header = () => {
  const [position, setPosition] = useState('static');

  const sections = [
    {
      items: [<EuiHeaderLogo>Elastic</EuiHeaderLogo>],
      borders: 'right',
    },
  ];

  return (
    <div>
     
  
      <EuiSpacer />
      <EuiHeader position={position}>
          <h1>Camp Destinations</h1>
      </EuiHeader>
    </div>
  );
};

export default Header;



