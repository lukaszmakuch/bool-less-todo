import React from 'react';
import {makeNavigationButtonsView, InactiveButton, ActiveButton} from './../utils';

export default makeNavigationButtonsView({
  // How does it *look*.
  UI: ({toNode}) => <div>
    <InactiveButton {...{toNode, text: 'All', action: {type: 'NAVIGATE_TO_ALL'}}}/>
    <InactiveButton {...{toNode, text: 'Done', action: {type: 'NAVIGATE_TO_DONE'}}}/>
    <ActiveButton text="Undone"/>
  </div>,
  // Pick just selected items.
  show: 'undone'
});