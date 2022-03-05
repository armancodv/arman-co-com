import React from 'react';
import { render, screen } from '@testing-library/react';
import EducationItem from './EducationItem';
import { Education } from '../../../redux/profile/models_d';

const education: Education = {
  id: '1',
  level: 'Level',
  university: 'University',
  image: 'image.png',
  duration: '2 years',
};

describe('education item', () => {
  beforeEach(() => {
    render(<EducationItem education={education} />);
  });

  test('should education contains image', () => {
    const imageElement = screen.getByRole('img') as HTMLImageElement;
    expect(imageElement.src).toContain(education.image);
  });

  test('should education contains level', () => {
    const element = screen.getByText(education.level);
    expect(element).toBeInTheDocument();
  });

  test('should education contains university', () => {
    const element = screen.getByText(education.university);
    expect(element).toBeInTheDocument();
  });

  test('should education contains duration', () => {
    const element = screen.getByText(education.duration);
    expect(element).toBeInTheDocument();
  });
});
