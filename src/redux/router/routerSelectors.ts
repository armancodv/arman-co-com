import {State} from "../models_d";

const routerSelectors = {
    getPathname: (state: State): string => state?.router?.location?.pathname ?? '',
}

export default routerSelectors