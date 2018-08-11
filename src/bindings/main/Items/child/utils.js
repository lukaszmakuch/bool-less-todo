import React from 'react';
import {makeHandler} from 'utilities';
import {connect} from 'react-redux';

export const makeItemBinding = ({whenToRender, itemView}) => {
  // This is how does it look and behave, when it's rendered.
  const View = connect()(itemView);

  return () => ({

    handler: makeHandler({

      CLICK_ITEM:  () => ({'arrow': 'clicked'}),

      // Navigation returns a function, which picks one of these.
      // An undone item doesn't render when we want to display just done ones.
      RENDER: ({context: {title, id}, toNode}) => {
        const view = <View {...{title, id, toNode}} key={id}/>;
        return whenToRender(view);
      }

    }),

  });
};