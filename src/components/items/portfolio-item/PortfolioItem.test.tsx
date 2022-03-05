import React from 'react';
import { render, screen } from '@testing-library/react';
import PortfolioItem from './PortfolioItem';
import { Portfolio } from '../../../redux/portfolio/models_d';

const portfolio: Portfolio = {
  id: '1',
  title: 'Title',
  description: 'Description',
  link: 'Link',
  icon: 'github',
  tags: ['tag_1', 'tag_2'],
};

describe('portfolio item', () => {
  beforeEach(() => {
    render(<PortfolioItem portfolio={portfolio} />);
  });

  test('should portfolio contains title', () => {
    const element = screen.getByText(portfolio.title);
    expect(element).toBeInTheDocument();
  });

  test('should portfolio contains description', () => {
    const element = screen.getByText(portfolio.description);
    expect(element).toBeInTheDocument();
  });

  test('should portfolio contains tags', () => {
    portfolio.tags.forEach((tag) => {
      const element = screen.getByText(tag);
      expect(element).toBeInTheDocument();
    });
  });
});
