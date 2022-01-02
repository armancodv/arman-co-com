import {configureStore} from '@reduxjs/toolkit';
import profileReducers from './profile/profileReducers';
import experienceReducers from './experience/experienceReducers';
import highlightsReducers from './highlights/highlightsReducers';
import portfoliosReducers from './portfolio/portfolioReducers';
import createSagaMiddleware from 'redux-saga';
import saga from './saga';
import {initializeApp} from 'firebase/app';
import {firebaseConfig} from '../config/firebaseConfig';
import {getAnalytics} from 'firebase/analytics';

const firebaseApp = initializeApp(firebaseConfig);
getAnalytics(firebaseApp);

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    profile: profileReducers,
    experience: experienceReducers,
    highlights: highlightsReducers,
    portfolio: portfoliosReducers,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(saga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
