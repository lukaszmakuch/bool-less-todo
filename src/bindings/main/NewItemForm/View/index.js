import React from 'react';
import {initialValueLens} from 'rosmaro-binding-utils';
import {makeHandler} from 'utilities';
import {connect} from 'react-redux';

const View = connect()(({dispatch, newItemText}) => 
  <form>
    <input
      type="text"
      className="item-form-field"
      value={newItemText}
      onChange={e => dispatch({type: 'TYPE', newItemText: e.target.value})}
      />
    <input
      type="button"
      className="item-form-button"
      value="Add"
      onClick={() => dispatch({type: 'ADD_ITEM'})}
      />
  </form>
);

// The form used to add a new item.
export default () => ({

  // When the app starts, there are no items and the entered text is empty.
  lens: () => initialValueLens({
    newItemText: '',
    items: []
  }),

  handler: makeHandler({

    // A transition is the only way how the context of the model may change.
    // That's why when the user types something, 
    // we follow an arrow to update the context.
    TYPE: ({context, action: {newItemText}}) => ({
      arrow: 'typed',
      context: {...context, newItemText}
    }),

    // Adding an item means erasing the entered text (newItemText)
    // and adding it to the list of items.
    // It's added at the end, because indexes of this array are used
    // as node names in the *Items* dynamic composite. 
    ADD_ITEM: ({context}) => ({
      arrow: 'item added',
      context: {
        ...context,
        newItemText: '',
        items: [...context.items, context.newItemText]
      }
    }),

    RENDER: ({context: {newItemText}}) => <View newItemText={newItemText}/>
  }),

});