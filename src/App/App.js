import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import LocalizationProvider from '../localization/LocalizationProvider';
import SimpleComponent from '../components/SimpleComponent';
import AdvancedLocalization from '../components/AdvancedLocalization';
import ComponentInjection from '../components/ComponentInjection';
import { commonModule } from '../localization/i18n';

const App = () => {
  return (
    <LocalizationProvider locale="de">
      {/* Add your first translated text */}
      {/* <select value={locale} onChange={onLocaleChange}>
          <option value="en">English</option>
          <option value="it">Italian</option>
          <option value="de">German</option>
      </select> */}
      <FormattedMessage {...commonModule.welcome} />
      {/* <SimpleComponent /> */}
      {/* <AdvancedLocalization /> */}
      <ComponentInjection />
    </LocalizationProvider>
  );
}

export default App;
