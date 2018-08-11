import React from 'react';
import {makeNavigationButtonsView, InactiveButton, ActiveButton} from './../utils';

export default makeNavigationButtonsView({
  // How does it *look*.
  UI: ({toNode}) => <div>
    <InactiveButton {...{toNode, text: 'All', action: {type: 'NAVIGATE_TO_ALL'}}}/>
    <ActiveButton text="Done"/>
    <InactiveButton {...{toNode, text: 'Undone', action: {type: 'NAVIGATE_TO_UNDONE'}}}/>
  </div>,
  // Pick just selected items.
  show: 'done'
});
