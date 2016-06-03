import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {
   return (
      <div>Hello there!</div>
   );
};

// After Meteor loads, render ap to dropdown-menu

Meteor.startup(() => {
   // React render call
   ReactDOM.render(<App />, document.querySelector('.container'))
});
