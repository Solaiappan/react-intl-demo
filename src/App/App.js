import React from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import MyFirstComponent from '../components/SimpleComponent';
import AdvancedLocalization from '../components/AdvancedLocalization';
import ComponentInjection from '../components/ComponentInjection';
import appLocales from '../locales';

const App = () => {
  // Get the locale to use. You could use Redux, useContext, URL params or local storage
  // to manage this value.
  const locale = 'en';

  // Load the language configuration
  const localeConfig = appLocales[locale];

  // Application top component (entrypoint)
  return (
    <IntlProvider locale={localeConfig.locale} messages={localeConfig.messages}>
      {/* Add your first translated text */}
      <FormattedMessage id="module.welcome" />
      <MyFirstComponent />
      <AdvancedLocalization />
      <ComponentInjection />
    </IntlProvider>
  );
}

export default App;
