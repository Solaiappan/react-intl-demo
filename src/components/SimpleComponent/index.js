// Copyright 2022 srajendran
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
import React from 'react';
import { useIntl, FormattedMessage } from 'react-intl';

const MyComponent = () => {
  // Get react-intl service
  const intl = useIntl();
  
  // Get the formatted button title
  const translatedTitle = intl.formatMessage({ id: 'module.button-title' })

  // Inject your translations
  return (
    <div>
    <div><FormattedMessage id="module.simpleExample" /></div>
      <button title={translatedTitle}>
        <FormattedMessage id="module.button-text" />
      </button>
    </div>
  );
}

export default MyComponent;
