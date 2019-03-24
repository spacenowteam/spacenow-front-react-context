import React from 'react';
import classNames from 'classnames';

const AppNavbarBrand = props => {

  const imgSrc = (brand) => {
    return brand.src ? brand.src : '';
  }

  const imgWidth = (brand) => {
    return brand.width ? brand.width : 'auto';
  }

  const imgHeight = (brand) => {
    return brand.height ? brand.height : 'auto';
  }

  const imgAlt = (brand) => {
    return brand.alt ? brand.alt : '';
  }

  const navbarBrandImg = (props, classBrand, key) => {
    return (
      <img
          src={imgSrc(props)}
          width={imgWidth(props)}
          height={imgHeight(props)}
          alt={imgAlt(props)}
          className={classBrand}
          key={key.toString()}
      />
    );
  }

  const { className, children, tag: Tag, ...attributes } = props;
  const classes = classNames(className, 'navbar-brand');

  const img = [];
  if (props.brand) {
    const classBrand = 'navbar-brand';
    img.push(navbarBrandImg(props.brand, classBrand, img.length + 1));
  }
  if (props.full) {
    const classBrand = 'navbar-brand-full';
    img.push(navbarBrandImg(props.full, classBrand, img.length + 1));
  }
  if (props.minimized) {
    const classBrand = 'navbar-brand-minimized';
    img.push(navbarBrandImg(props.minimized, classBrand, img.length + 1));
  }

  return (
    <Tag {...attributes} className={classes}>
      {children || img}
    </Tag>
  );
}

AppNavbarBrand.defaultProps = {
  tag: 'a'
};

export default AppNavbarBrand;
