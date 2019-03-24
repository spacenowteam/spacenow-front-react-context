import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

const defaultProps = {
  color: 'secondary',
  label: false,
  outline: false,
  size: '',
  checked: false,
  defaultChecked: false,
  disabled: false,
  required: false,
  type: 'checkbox',
  variant: '',
  dataOn: 'On',
  dataOff: 'Off',
};

const AppSwitch = props => {

  const [_checked, _setChecked] = useState(
    props.defaultChecked || props.checked
  )
  
  // eslint-disable-next-line
  const [_selected, _setSelected] = useState([])

  useEffect(() => {
    _setChecked(props.checked)
  }, [])

  const onChange = (event) => {
    _setChecked(event.target.checked)
    if(props.onChange)
      props.onChange(event)
  }

    const { className, disabled, color, name, label, outline, size, required, type, value, dataOn, dataOff, variant, ...attributes } = props;

    delete attributes.checked
    delete attributes.defaultChecked
    delete attributes.onChange

    const classes = classNames(
      className,
      'switch',
      label ? 'switch-label' : false,
      size ? `switch-${size}` : false,
      variant ? `switch-${variant}` : false,
      `switch${outline ? '-outline' : ''}-${color}${outline==='alt' ? '-alt' : ''}`,
      'form-check-label',
    );

    const inputClasses = classNames(
      'switch-input',
      'form-check-input',
    );

    const sliderClasses = classNames(
      'switch-slider',
    );

    return (
      <label className={classes}>
        <input type={type} className={inputClasses} onChange={onChange} checked={_checked} name={name} required={required} disabled={disabled} value={value} {...attributes} />
        <span className={sliderClasses} data-checked={dataOn} data-unchecked={dataOff}></span>
      </label>
    );
}

AppSwitch.defaultProps = defaultProps;

export default AppSwitch;
