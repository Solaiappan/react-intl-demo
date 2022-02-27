import React from 'react';
import { FormattedMessage } from 'react-intl';
import Code from './code';
import { module2 } from '../../localization/i18n';

const MyComponent = () => {
  return (
      <div className="container">
          <div className="messages">
      <div><FormattedMessage {...module2.advancedExample} /></div>
      <div><FormattedMessage {...module2.message1} values={{ catCount: 3, dogCount: 2 }} /></div>
      <div><FormattedMessage {...module2.message2} values={{ pctBlack: 0.2 }} /></div>
      <div><FormattedMessage {...module2.message3} values={{ expires: new Date() }} /></div>
      <div><FormattedMessage {...module2.message4} values={{ gender: 'male' }} /></div>
      <div><FormattedMessage {...module2.message5} values={{ itemCount: 3 }} /></div>
    </div>
    <div className="line"></div>
    <div className="code">
        <Code />
    </div>
    </div>
  );
}

export default MyComponent;
