import React from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import { module1 } from '../../localization/i18n';
import Code from './code';

const MyComponent = () => {
  // Get react-intl service
  const intl = useIntl();
  
  // Get the formatted button title
  const translatedTitle = intl.formatMessage(module1['button-title']);

  // Inject your translations
  return (
            <div className="container">
          <div className="messages">
    <div><FormattedMessage {...module1.simpleExample} /></div>
      <button title={translatedTitle}>
        <FormattedMessage {...module1['button-text']} />
      </button>
            </div>
        <div className="line"></div>
        <div className="code">
            <Code />
        </div>
    </div>
  );
}

export default MyComponent;
