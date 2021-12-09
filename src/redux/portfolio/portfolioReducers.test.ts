import {Portfolio, PortfolioSection} from './models_d';
import {FetchState} from '../models_d';
import portfoliosActions from './portfolioActions';
import portfoliosReducers from './portfolioReducers';

const portfolio: Portfolio = {
  id: '1',
  title: 'Title',
  description: 'Description',
  link: 'Link',
  icon: 'github',
  tags: ['tag_1', 'tag_2'],
};

const portfolioSection: PortfolioSection = {
  id: '',
  title: '',
  description: '',
  portfolio: [portfolio],
};

test('set portfolio should update state', () => {
  const portfolioSections = [portfolioSection];
  const action = portfoliosActions.setPortfolios(portfolioSections);
  const state = portfoliosReducers(undefined, action);
  expect(state.data).toEqual(portfolioSections);
});

test('set portfolio state should update state', () => {
  const fetchState = FetchState.SUCCESS;
  const action = portfoliosActions.setPortfoliosState(fetchState);
  const state = portfoliosReducers(undefined, action);
  expect(state.dataState).toEqual(fetchState);
});
