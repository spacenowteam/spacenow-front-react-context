import React, { useEffect } from 'react';
import classNames from 'classnames';
import { asideMenuCssClasses, validBreakpoints, checkBreakpoint } from '../Shared/index';
import toggleClasses from '../Shared/toggle-classes';

const defaultProps = {
  defaultOpen: false,
  display: 'lg',
  mobile: false,
  tag: 'button',
  type: 'button'
};

const AppAsideToggler = props => {
  
  useEffect(() => {
    toggle(props.defaultOpen)
  }, [])

  const toggle = (force) => {
    const [display, mobile] = [props.display, props.mobile];
    let cssClass = asideMenuCssClasses[0];
    if (!mobile && display && checkBreakpoint(display, validBreakpoints)) {
      cssClass = `aside-menu-${display}-show`
    }
    toggleClasses(cssClass, asideMenuCssClasses, force)
  }

  const asideToggle = (e) => {
    e.preventDefault();
    toggle()
  }

    const { className, children, type, tag: Tag, ...attributes } = props;

    delete attributes.defaultOpen;
    delete attributes.display;
    delete attributes.mobile;

    const classes = classNames(className, 'navbar-toggler');

    return (
      <Tag
          type={type}
          className={classes}
          {...attributes}
          onClick={(event)=>asideToggle(event)}
      >
        {children || <span className="navbar-toggler-icon" />}
      </Tag>
    );
}

AppAsideToggler.defaultProps = defaultProps;

export default AppAsideToggler;
