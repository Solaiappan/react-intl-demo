import { defineMessages } from 'react-intl';

const loadMessages = (localizationJson) => {
  if (localizationJson.localization_modules) {
    const localizations = localizationJson.localization_modules.reduce((r, module) => {
        return { 
            ...r, 
            [module.name]: module.localization_keys.reduce((r2, key) => {
                return { 
                    ...r2, 
                    [key.key]: {
                        id: `${module.name}.${key.key}`,
                        defaultMessage: key.default_value,
                        description: key.description
                    }};
                }, {})
            };
        }, {});
    return defineMessages(localizations);
  }
  throw new Error('The format of your localizations.json file seems to be wrong!');
};

export default loadMessages;
