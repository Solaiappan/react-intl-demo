import React from 'react';

const MyComponent = () => {
  return (
    <code>
      {"const intl = useIntl();"}
      <br/>      
      {"const translatedTitle = intl.formatMessage(module1['button-title']);"}
      <br/>
      {"<FormattedMessage {...module1.simpleExample} />"}
      <br/>
      {"<button title={translatedTitle}><FormattedMessage {...module1['button-title']} /></button>"}
    </code>
  );
}

export default MyComponent;
