import React from 'react';

const MyComponent = () => {
  return (
    <code>
      {"<FormattedMessage {...module2.advancedExample} />"}
      <br />
      {"<FormattedMessage {...module2.message1} values={{ catCount: 3, dogCount: 2 }} />"}
      <br />
      {"<FormattedMessage {...module2.message2} values={{ pctBlack: 0.2 }} />"}
      <br />
      {"<FormattedMessage {...module2.message3} values={{ expires: new Date() }} />"}
      <br />
      {"<FormattedMessage {...module2.message4} values={{ gender: 'male' }} />"}
      <br />
      {"<FormattedMessage {...module2.message5} values={{ itemCount: 3 }} />"}
    </code>
  );
}

export default MyComponent;
