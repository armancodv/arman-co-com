import React from 'react';
import { render, screen } from '@testing-library/react';
import PublicationItem from './PublicationItem';
import { Publication } from '../../../redux/profile/models_d';

const publication: Publication = {
  id: '1',
  title: 'Title',
  journal: 'Journal',
  date: 'Date',
  link: 'github',
};

describe('publication item', () => {
  beforeEach(() => {
    render(<PublicationItem publication={publication} />);
  });

  test('should publication contains title', () => {
    const element = screen.getByText(publication.title);
    expect(element).toBeInTheDocument();
  });

  test('should publication contains journal', () => {
    const element = screen.getByText(publication.journal);
    expect(element).toBeInTheDocument();
  });
});
