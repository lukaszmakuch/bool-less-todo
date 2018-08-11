import {
  typeHandler,
  defaultHandler,
  partialReturns,
  targetedActions,
} from 'rosmaro-binding-utils';

export const makeHandler = handlerPlan => targetedActions()(partialReturns(typeHandler({defaultHandler})(handlerPlan)));