import React, { useState, useEffect } from 'react';
import { IntlProvider } from 'react-intl';

const LocalizationProvider = ({ locale, children }) => {
  const [messages, setMessages] = useState({});
  const [currentLocale, setCurrentLocale] = useState(locale);
    useEffect(() => {
        fetch(`https://localization-schema-service.herokuapp.com/${locale}.json`)
            .then(response => response.json())
            .then(data => setMessages(data.modules[0]))
            .catch((E) => console.log('Error in fetching localization.json', E));
    }, []);
    useEffect(() => {
        fetch(`https://localization-schema-service.herokuapp.com/${locale}.json`)
            .then(response => response.json())
            .then(data => {
                setMessages(data.modules[0]);
                setCurrentLocale(locale);
            })
            .catch((E) => console.log('Error in fetching localization.json', E));
    }, [locale, children]);
  return (
    <IntlProvider locale={currentLocale} defaultLocale={currentLocale} messages={messages}>
        {children}
    </IntlProvider>
  );
}

export default LocalizationProvider;
