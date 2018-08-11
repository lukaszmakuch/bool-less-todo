import {callChildren} from 'rosmaro-binding-utils';
import {makeHandler} from 'utilities';
import {keys, reverse, map, prop, values} from 'ramda';

// A list of all items.
export default () => ({

  // The children are named after indexes of items.
  nodes: ({context}) => keys(context.items),

  handler: makeHandler({
    RENDER: ({children, action, context}) => {
      const childrenResults = callChildren({action, context, children});
      // New items are added at the end of the list 
      // (see the NewItemForm/View comments for more details),
      // but we want the recent item to be at the top. 
      // That's why we render them in the reversed order.
      return map(prop('data'), reverse(values(childrenResults.result)));
    }
  }),

});