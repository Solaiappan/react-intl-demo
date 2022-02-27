import React, { useState, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import { transformLocalizationJSON } from './utils';

const LocalizationProvider = ({ locale, children }) => {
  const [messages, setMessages] = useState({});
  const [currentLocale, setCurrentLocale] = useState(locale);
    useEffect(() => {
        fetch(`https://localization-schema-service.herokuapp.com/${locale}.json`)
            .then(response => response.json())
            .then(data => {
                setMessages(transformLocalizationJSON(data.modules));
                setCurrentLocale(locale);
            })
            .catch((E) => {
                setMessages({});
            });
    }, [locale, children]);
  return (
    <IntlProvider locale={currentLocale} defaultLocale={currentLocale} messages={messages}>
        {children}
    </IntlProvider>
  );
}

export default LocalizationProvider;
