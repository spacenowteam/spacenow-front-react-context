import React, { useEffect } from 'react';
import classNames from 'classnames';

const defaultProps = {
  tag: 'footer',
  fixed: false
};

const AppFooter = props => {

  useEffect(() => {
    isFixed(props.fixed);
  }, [])

  const isFixed = (fixed) => {
    if (fixed) { document.body.classList.add('footer-fixed'); }
  }

  const { className, children, tag: Tag, ...attributes } = props;

  delete attributes.fixed

  const classes = classNames(className, 'app-footer');

  return (
    <Tag className={classes} {...attributes}>
      {children}
    </Tag>
  );
}

AppFooter.defaultProps = defaultProps;

export default AppFooter;
