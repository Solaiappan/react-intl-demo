import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import { module3 } from '../../localization/i18n';

const MyComponent = () => {
  return (
    <div>
      {/* Inject a double break and a link to Google */}
      <FormattedMessage
          {...module3.componentInjection}
          values={{
              break2: (
                  <Fragment>
                      <br />
                      <br />
                  </Fragment>
              ),
              'link-to-google': (...chunks) => (
                  <a href="https://www.google.com">{chunks}</a>
              )
          }}
      />
  </div>
  );
}

export default MyComponent;
