import './Recommendations.scss';

import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import recommendations from '../../../../data/recommendations';


function Recommendations() {
  const listRecommendations = () => {
    return recommendations.map(recommendation => (
      <div key={recommendation.author} className="recommendation-wrapper">
        <p className="recommendation-text">"{recommendation.text}"</p>
        <p className="recommendation-author">{recommendation.author}</p>
        <p className="recommendation-position">{recommendation.position}</p>
      </div>
    ));
  }

  return (
    <div id="recommendations" className="section">
      <ScrollAnimation animateIn="bounceIn">
        <h2 className="chat-box chat-box-arrow-left">Why choose him?</h2>
      </ScrollAnimation>

      <h2 className="section-title">I'm recommended!</h2>
      <div className="recommendations-grid">
        {listRecommendations()}

      </div>

    </div>
  )
}


export default React.memo(Recommendations);