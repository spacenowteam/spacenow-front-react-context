import React from 'react';

const defaultProps = {};

const DefaultFooter = props => {

  // eslint-disable-next-line
  const { children, ...attributes } = props;

  return (
    <React.Fragment>
      <span>&copy;<a href="http://localhost:3000">Spacenow</a> 2019</span>
    </React.Fragment>
  );
  
}

DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
