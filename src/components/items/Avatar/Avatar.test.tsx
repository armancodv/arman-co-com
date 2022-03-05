import React from 'react';
import { render, screen } from '@testing-library/react';
import Avatar from './Avatar';

test('should avatar contains image', () => {
  const testSrc = 'test.png';
  render(<Avatar src={testSrc} />);
  const imageElement = screen.getByRole('img') as HTMLImageElement;
  expect(imageElement.src).toContain(testSrc);
});
