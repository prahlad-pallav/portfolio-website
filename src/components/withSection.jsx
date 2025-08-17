import React from 'react';
import { useLocation } from 'react-router-dom';

const withSection = (WrappedComponent, sectionId) => {
  return function WithSectionComponent(props) {
    const location = useLocation();
    const isStandalone = location.pathname === `/${sectionId}`;

    return (
      <div className={`section-wrapper ${isStandalone ? 'standalone' : ''}`}>
        <WrappedComponent {...props} isStandalone={isStandalone} />
      </div>
    );
  };
};

export default withSection; 