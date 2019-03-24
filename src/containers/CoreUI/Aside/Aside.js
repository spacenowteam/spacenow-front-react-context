import React, { useEffect } from 'react';
import classNames from 'classnames';
import { asideMenuCssClasses, checkBreakpoint, validBreakpoints } from '../Shared';
import toggleClasses from '../Shared/toggle-classes';

const defaultProps = {
  tag: 'aside',
  display: '',
  fixed: false,
  isOpen: false,
  offCanvas: true
};

const AppAside = props => {

  useEffect(() => {
    isFixed(props.fixed);
    isOffCanvas(props.offCanvas);
    displayBreakpoint(props.display);
  }, [])

  const isFixed = (fixed) => {
    if (fixed) { document.body.classList.add('aside-menu-fixed'); }
  }

  const isOffCanvas = (offCanvas) => {
    if (offCanvas) { document.body.classList.add('aside-menu-off-canvas'); }
  }

  const displayBreakpoint = (display) => {
    if (display && checkBreakpoint(display, validBreakpoints)) {
      const cssClass = `aside-menu-${display}-show`
      toggleClasses(cssClass, asideMenuCssClasses, true)
    }
  }

    const { className, children, tag: Tag, ...attributes } = props;

    delete attributes.display
    delete attributes.fixed
    delete attributes.offCanvas
    delete attributes.isOpen

    const classes = classNames(className, 'aside-menu');

    return (
      <Tag {...attributes} className={classes}>
        {children}
      </Tag>
    );
}

AppAside.defaultProps = defaultProps;

export default AppAside;
