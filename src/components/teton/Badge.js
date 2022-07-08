import React, { useState, useEffect, Children } from 'react'
import PropTypes from 'prop-types';

Badge.propTypes = {
  rounded: PropTypes.bool,
  size: PropTypes.string,
  suffixClasses: PropTypes.string,
  variant: PropTypes.string, 
}

Badge.defaultProps = {
  rounded: false,
  size: '',
  suffixClasses: '',
  variant: 'secondary', 
};

function Badge({ children, size, variant, rounded, suffixClasses })  {

  var _base = "inline-flex items-center font-medium";
  let _rounded = rounded ? "rounded-full": "rounded"
  let _suffixClasses = suffixClasses
  let _variant, _size, _final

  switch(variant) {
    case 'primary':
      _variant = "bg-blue-100 text-blue-800"
      break
    case 'secondary':
      _variant = "bg-gray-200 text-gray-800"
      break
    case 'success':
      _variant = "bg-green-100 text-green-800"
      break
    case 'warning':
      _variant ="bg-yellow-100 text-yellow-800"
      break
    case 'danger':
      _variant = "bg-red-100 text-red-800"
      break
    case 'info':
      _variant = "bg-purple-100 text-purple-800"
      break
    case 'light':
      _variant = "bg-gray-100 text-gray-800"
      break
    case 'dark':
      _variant = "bg-gray-800 text-gray-100"
      break
    default:
      break
  }

  switch (size) {
    case 'xs':
      _size = "text-xs px-2.5 py-0.5"
      break;
    case 'sm':
      _size = "text-sm px-2.5 py-0.5"
      break;
    case 'md':
      _size = "text-base px-2.5 py-0.5"
      break;
    case 'lg':
      _size = "text-lg px-2.5 py-0.5"
      break;
    case 'xl':
      _size = "text-xl px-3 py-1"
      break;
    case 'xxl':
      _size = "text-2xl px-3.5 py-1.5"
      break;
    default:
      _size = "px-2.5 py-0.5"
      break;
  }

  _final = _base + " " + _variant + " " + _size + " " + _rounded + " " + _suffixClasses


  return (
    <span 
      className={_final} 
    >
      {children}
    </span>
  )
}

export default Badge;