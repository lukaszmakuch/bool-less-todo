import React from 'react';
import {makeNavigationButtonsView, InactiveButton, ActiveButton} from './../utils';

export default makeNavigationButtonsView({
  // How does it *look*.
  UI: ({toNode}) => <div>
    <ActiveButton text="All"/>
    <InactiveButton {...{toNode, text: 'Done', action: {type: 'NAVIGATE_TO_DONE'}}}/>
    <InactiveButton {...{toNode, text: 'Undone', action: {type: 'NAVIGATE_TO_UNDONE'}}}/>
  </div>,
  // Pick just selected items.
  show: 'all'
});
