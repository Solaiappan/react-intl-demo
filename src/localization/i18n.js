import loadMessages from './loadMessages';

import commonModuleLocalization from '../locales/commonModule/i18n.json';
import module1Localization from '../locales/module1/i18n.json';
import module2Localization from '../locales/module2/i18n.json';
import module3Localization from '../locales/module3/i18n.json';

let messages = loadMessages(commonModuleLocalization);
export const commonModule = messages.commonModule;

messages = loadMessages(module1Localization);
export const module1 = messages.module1;

messages = loadMessages(module2Localization);
export const module2 = messages.module2;

messages = loadMessages(module3Localization);
export const module3 = messages.module3;
