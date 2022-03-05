import { Action } from '../models_d';
import generalTypes from './generalTypes';

const generalActions = {
  pageLoad: (): Action => ({
    type: generalTypes.PAGE_LOAD,
  }),
};

export default generalActions;
