import React from 'react';
import {render, screen} from '@testing-library/react';
import ExperienceItem from './ExperienceItem';
import {Experience} from '../../../redux/experience/models_d';

const experience: Experience = {
  id: '1',
  title: 'Title',
  description: 'Description',
  company: {
    id: '2',
    title: 'companyname',
    image: 'image.png',
    link: 'linktocompany',
  },
  location: 'Here',
  duration: '2 years',
};

describe('experience item', ()=> {
  beforeEach(() => {
    render(<ExperienceItem experience={experience} />);
  });

  test('should experience contains image', () => {
    const imageElement = screen.getByRole('img') as HTMLImageElement;
    expect(imageElement.src).toContain(experience.company.image);
  });

  test('should experience contains title', () => {
    const element = screen.getByText(experience.title);
    expect(element).toBeInTheDocument();
  });

  test('should experience contains description', () => {
    const element = screen.getByText(experience.description);
    expect(element).toBeInTheDocument();
  });

  test('should experience contains location', () => {
    const element = screen.getByText(experience.location);
    expect(element).toBeInTheDocument();
  });

  test('should experience contains duration', () => {
    const element = screen.getByText(experience.duration);
    expect(element).toBeInTheDocument();
  });

  test('should experience contains company title', () => {
    const element = screen.getByText(experience.company.title);
    expect(element).toBeInTheDocument();
  });
});
