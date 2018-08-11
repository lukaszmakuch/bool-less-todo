import React from 'react';
import {initialValueLens, callChildren} from 'rosmaro-binding-utils';
import {makeHandler} from 'utilities';

// The main (most outer) node of the Rosmaro model.
export default () => ({

  // When the app starts, there are no items and the entered text is empty.
  lens: () => initialValueLens({
    newItemText: '',
    items: []
  }),

  handler: makeHandler({
    RENDER: ({children, action, context}) => {
      const childrenResults = callChildren({action, context, children});
      return <div className="container">
        {childrenResults.result.NewItemForm.data}
        <ul className="todos">
          {
            // Navigation provides a function which 
            // given all items (from the *Items* dynamic composite) 
            // extracts only these ones 
            // which are meant to be displayed.
            childrenResults.result.Navigation.data.show(childrenResults.result['Items'].data)
          }
        </ul>
        {childrenResults.result.Navigation.data.UI}
        <p className="footer">
          This is an example of a To-Do application implemented <b>without&nbsp;boolean&nbsp;values</b>&nbsp;and&nbsp;<b>without&nbsp;variables</b>.<br/>
          It's built using <a href="https://rosmaro.js.org">visual automata-based programming</a>.
        </p>
      </div>;
    }
  }),
  
});