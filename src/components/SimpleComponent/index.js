import React from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import { module1 } from '../../localization/i18n';

const MyComponent = () => {
  // Get react-intl service
  const intl = useIntl();
  
  // Get the formatted button title
  const translatedTitle = intl.formatMessage(module1['button-title']);

  // Inject your translations
  return (
    <div>
    <div><FormattedMessage {...module1.simpleExample} /></div>
      <button title={translatedTitle}>
        <FormattedMessage {...module1['button-title']} />
      </button>
    </div>
  );
}

export default MyComponent;
