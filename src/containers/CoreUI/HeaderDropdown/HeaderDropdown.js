import React, { useState } from 'react';
import { Dropdown } from 'reactstrap';

const defaultProps = {
  direction: 'down'
};

const AppHeaderDropdown = props => {

  const [_dropdown, _setDropdown] = useState(false)

  const toggle = () => _setDropdown(!_dropdown)

  const { children, ...attributes } = props;

  return (
    <Dropdown nav isOpen={_dropdown} toggle={toggle} {...attributes}>
      {children}
    </Dropdown>
  );

}

AppHeaderDropdown.defaultProps = defaultProps;

export default AppHeaderDropdown;
