import React from 'react';
import {connect} from 'react-redux';
import {makeHandler} from 'utilities';
import {map, prop} from 'ramda';

// Builds an inactive button which when clicked dispatches the given action.
export const InactiveButton = connect()(({dispatch, toNode, text, action}) => <input
  type="button"
  className="nav-button"
  value={text}
  onClick={() => dispatch(toNode(action))}
  />);

// Builds an active button.
export const ActiveButton = ({text}) => <input
  type="button"
  className="nav-button active"
  value={text}
  />;

export const makeNavigationButtonsView = ({UI, show}) => () => ({

  handler: makeHandler({
    // When we dispatch NAVIGATE_TO_ALL, 
    // the node which handles this call follows the 'navigating to all arrow'.
    NAVIGATE_TO_ALL: () => ({arrow: 'navigating to all'}),
    NAVIGATE_TO_DONE: () => ({arrow: 'navigating to done'}),
    NAVIGATE_TO_UNDONE: () => ({arrow: 'navigating to undone'}),

    RENDER: ({toNode}) => ({
      // How does it *look*.
      UI: UI({toNode}),
      // A function which is going to pick just selected items.
      show: map(prop(show))
    })

  }),

});