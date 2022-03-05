import React from 'react';
import { render, screen } from '@testing-library/react';
import State from './State';
import { FetchState } from '../../../redux/models_d';

describe('state', () => {
  test('should loading show spinner', () => {
    render(<State fetchState={FetchState.LOADING} />);
    const element = screen.getByTestId('state-loading');
    expect(element).toBeInTheDocument();
  });

  test('should fail show fail icon', () => {
    render(<State fetchState={FetchState.FAIL} />);
    const element = screen.getByTestId('state-fail');
    expect(element).toBeInTheDocument();
  });
});
