import React, {useEffect} from 'react';
import classNames from 'classnames';

const defaultProps = {
  tag: 'header',
  fixed: false
}

const AppHeader = props => {

  useEffect(() => {
    isFixed(props.fixed);
  }, [])

  const isFixed = (fixed) => {
    if (fixed) { document.body.classList.add('header-fixed'); }
  }

  const { className, children, tag: Tag, ...attributes } = props;

  delete attributes.fixed

  const classes = classNames(className, 'app-header', 'navbar');

  return (
    <Tag className={classes} {...attributes}>
      {children}
    </Tag>
  );
}

AppHeader.defaultProps = defaultProps;

export default AppHeader;
