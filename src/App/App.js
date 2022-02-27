import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import LocalizationProvider from '../localization/LocalizationProvider';
import SimpleComponent from '../components/SimpleComponent';
import AdvancedLocalization from '../components/AdvancedLocalization';
import ComponentInjection from '../components/ComponentInjection';
import { commonModule } from '../localization/i18n';
import './App.css';

const App = () => {
    const [locale, setLocale] = useState('en');
  return (
    <LocalizationProvider locale={locale}>
      <h1 className="welcome"><FormattedMessage {...commonModule.welcome} /></h1>
      <div className="buttons">
        <input className={`locale-button ${locale === 'en' ? 'selected' : ''}`} type="button" value="Default (English)" onClick={() => setLocale('en')}/>
        <input className={`locale-button ${locale === 'it' ? 'selected' : ''}`} type="button" value="Italian" onClick={() => setLocale('it')}/>
        <input className={`locale-button ${locale === 'de' ? 'selected' : ''}`} type="button" value="German" onClick={() => setLocale('de')} />
        <input className={`locale-button ${locale === 'es' ? 'selected' : ''}`} type="button" value="Spanish" onClick={() => setLocale('es')} />
      </div>
      <SimpleComponent />
      <AdvancedLocalization />
      <ComponentInjection />
    </LocalizationProvider>
  );
}

export default App;
