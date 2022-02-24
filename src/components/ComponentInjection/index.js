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
import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';

const MyComponent = () => {
  return (
    <div>
      {/* Inject a double break and a link to Google */}
      <FormattedMessage
          id="module.componentInjection"
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
