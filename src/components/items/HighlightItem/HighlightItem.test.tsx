import React from 'react';
import { render, screen } from '@testing-library/react';
import HighlightItem from './HighlightItem';
import { Highlight } from '../../../redux/highlights/models_d';

const highlight: Highlight = {
  id: '1',
  title: 'Title',
  description: 'Description',
};

describe('highlight item', () => {
  beforeEach(() => {
    render(<HighlightItem highlight={highlight} />);
  });

  test('should highlight contains title', () => {
    const element = screen.getByText(highlight.title);
    expect(element).toBeInTheDocument();
  });

  test('should highlight contains description', () => {
    const element = screen.getByText(highlight.description);
    expect(element).toBeInTheDocument();
  });
});
