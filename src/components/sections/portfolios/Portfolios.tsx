import React from 'react';
import './Portfolios.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import portfoliosSelectors from '../../../redux/portfolio/portfolioSelectors';
import {faFolder} from '@fortawesome/free-solid-svg-icons';
import PortfolioItem from '../../items/portfolio-item/PortfolioItem';
import {useAppSelector} from '../../../redux/hooks';

const Portfolios: React.FC = () => {
  const portfolioSections =
        useAppSelector(portfoliosSelectors.getPortfolioSections);
  if (!portfolioSections || !portfolioSections.length) return null;
  return (
    <section className="portfolio">
      <h2 className="portfolio-title">
        <FontAwesomeIcon icon={faFolder} className="portfolio-title-icon"/>
                Portfolio
      </h2>
      {portfolioSections.map((portfolioSection) => (
        <div className="portfolio-section" key={portfolioSection?.id}>
          <h3 className="portfolio-section-title">
            {portfolioSection?.title}
          </h3>
          <ul className="portfolio-section-container">
            {portfolioSection?.portfolio?.map((portfolio) => (
              <PortfolioItem key={portfolio?.id}
                portfolio={portfolio}/>
            ))}
          </ul>
        </div>
      ))}

    </section>
  );
};

export default Portfolios;
