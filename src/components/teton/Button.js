import React, { useState, useEffect, Children } from 'react'
import PropTypes from 'prop-types';

Button.propTypes = {
  active: PropTypes.bool,
  block: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.object,
  iconSize: PropTypes.string,
  loading: PropTypes.bool,
  rounded: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.string,
  suffixClasses: PropTypes.string,
  secondaryIcon: PropTypes.object,
  text: PropTypes.string,
  variant: PropTypes.string, 
}

Button.defaultProps = {
  active: false,
  block: false,
  disabled: false,
  icon: null,
  iconSize: 'md',
  loading: false,
  rounded: false,
  onClick: null,
  size: 'md',
  suffixClasses: '',
  secondaryIcon: null,
  text: '',
  variant: 'secondary', 
};

function Button(props) {

  var _base = "inline-flex relative align-middle justify-center items-center font-medium content-center leading-4 text-center shadow-sm disabled:opacity-40 transform active:scale-95";
  let _focus = "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";
  let _transition = "transition duration-300 ease-in-out";

  let _primary = ((props.active || props.loading ? "border-blue-800 bg-blue-800 shadow-inner" : "border-blue-600 bg-blue-600 hover:bg-blue-700 active:bg-blue-800") + " text-white")
  let _secondary = ((props.active || props.loading ? "border-gray-800 bg-gray-800 shadow-inner" : "border-gray-600 bg-gray-600 hover:bg-gray-700 active:bg-gray-800") + " text-white")
  let _success = ((props.active || props.loading ? "border-green-800 bg-green-800 shadow-inner" : "border-green-600 bg-green-600 hover:bg-green-700 active:bg-green-800") + " text-white")
  let _warning = ((props.active || props.loading ? "border-yellow-800 bg-yellow-800 shadow-inner" : "border-yellow-600 bg-yellow-600 hover:bg-yellow-700 active:bg-yellow-800") + " text-white")
  let _danger = ((props.active || props.loading ? "border-red-800 bg-red-800 shadow-inner" : "border-red-600 bg-red-600 hover:bg-red-700 active:bg-red-800 ") + " text-white")
  let _info = ((props.active || props.loading ? "border-purple-800 bg-purple-800 shadow-inner" : "border-purple-600 bg-purple-600 hover:bg-purple-700 active:bg-purple-800 ") + " text-white")
  let _light = ((props.active || props.loading ? "border-gray-300 bg-gray-300 shadow-inner" : "border-white bg-white hover:bg-gray-200 active:bg-gray-300") + " text-black shadow-none")
  let _dark = ((props.active || props.loading ? "border-black bg-black shadow-inner" : "border-gray-900 bg-gray-900 hover:bg-gray-700 active:bg-black") + " text-white")
  let _link = ((props.active || props.loading ? "border-gray-300 bg-gray-300 shadow-inner" : "border-white bg-transparent hover:bg-gray-200 hover:text-blue-700 active:bg-gray-300") + " text-blue-600 shadow-none")

  let _outlinePrimary = ((props.active || props.loading ? "border-blue-800 bg-blue-100 shadow-inner" : "bg-white border-blue-600 hover:bg-blue-50 hover:border-blue-700 hover:text-blue-800 active:bg-blue-100") + " text-blue-700 border")
  let _outlineSecondary = ((props.active || props.loading ? "border-gray-800 bg-gray-100 shadow-inner" : "bg-white border-gray-600 hover:bg-gray-50 hover:border-gray-700 hover:text-gray-800 active:bg-gray-100") + " text-gray-700 border")
  let _outlineSuccess = ((props.active || props.loading ? "border-green-800 bg-green-100 shadow-inner" : "bg-white border-green-600 hover:bg-green-50 hover:border-green-700 hover:text-green-800 active:bg-green-100") + " text-green-700 border")
  let _outlineWarning = ((props.active || props.loading ? "border-yellow-800 bg-yellow-100 shadow-inner" : "bg-white border-yellow-600 hover:bg-yellow-50 hover:border-yellow-700 hover:text-yellow-800 active:bg-yellow-100") + " text-yellow-700 border")
  let _outlineDanger = ((props.active || props.loading ? "border-red-800 bg-red-100 shadow-inner" : "bg-white border-red-600 hover:bg-red-50 hover:border-red-700 hover:text-red-800 active:bg-red-100") + " text-red-700 border")
  let _outlineInfo = ((props.active || props.loading ? "border-purple-800 bg-purple-100 shadow-inner" : "bg-white border-purple-600 hover:bg-purple-100 hover:border-purple-700 hover:text-purple-800 active:bg-purple-200") + " text-purple-700 border")
  let _outlineLight = ((props.active || props.loading ? "border-gray-500 bg-gray-100 shadow-inner" : "bg-white hover:text-gray-800 hover:bg-gray-50 border-gray-300 hover:border-gray-400 active:bg-gray-100") + " text-gray-700 border")
  let _outlineDark = ((props.active || props.loading ? "border-gray-500 bg-gray-100 shadow-inner" : "bg-white hover:text-gray-800 border-gray-900 hover:bg-gray-50 hover:border-gray-700 active:bg-gray-100") + " text-gray-700 border")
  let _outlineLink = ((props.active || props.loading ? "border-gray-500 bg-gray-100 shadow-inner" : "bg-white hover:text-gray-800 hover:bg-gray-50 border-gray-300 hover:border-gray-400 hover:text-blue-700 active:bg-gray-100") + " text-blue-600 border")

  let _variant = props.variant ? props.variant : "primary";
  let _loading = props.loading ? true : false;
  let _size = props.size ? props.size : "md";
  let _text = props.text ? props.text : '';
  let _icon = props.icon ? props.icon : '';
  let _iconSize = props.iconSize ? props.iconSize : "md";
  let _secondaryIcon = props.secondaryIcon ? props.secondaryIcon : ''
  let _disabled = props.disabled ? true : false || props.loading ? true : false;
  let _block = props.block ? true : false;
  let _rounded = props.rounded ? true : false;
  let _suffixClasses = props.suffixClasses ? props.suffixClasses : ''
  const _arrayChildren = Children.toArray(props.children);
  const _loadingIcon = 'o'
  
  const [btnClasses, setBtnClasses] = useState("hidden");
  const [iconClasses, setIconClasses] = useState("hidden");
  const [secondaryIconClasses, setSecondaryIconClasses] = useState("hidden");


  const setup = () => {
    
    let variant, size, icon, iconSize, secondaryIcon, block, cursor, rounded

    block = _block ? "w-full" : ""
    cursor = _disabled ? "cursor-not-allowed" : ""
    rounded = _rounded ? "rounded-full": "rounded"

    switch(_variant) {
      case 'primary':
        variant = _primary
        break
      case 'secondary':
        variant = _secondary
        break
      case 'success':
        variant = _success
        break
      case 'warning':
        variant = _warning
        break
      case 'danger':
        variant = _danger
        break
      case 'info':
        variant = _info
        break
      case 'light':
        variant = _light
        break
      case 'dark':
        variant = _dark
        break
      case 'link':
        variant = _link
        break
      case 'outline-primary':
        variant = _outlinePrimary
        break
      case 'outline-secondary':
        variant = _outlineSecondary
        break
      case 'outline-success':
        variant = _outlineSuccess
        break
      case 'outline-warning':
        variant = _outlineWarning
        break
      case 'outline-danger':
        variant = _outlineDanger
        break
      case 'outline-info':
        variant = _outlineInfo
        break
      case 'outline-light':
        variant = _outlineLight
        break
      case 'outline-dark':
        variant = _outlineDark
        break
      case 'outline-link':
        variant = _outlineLink
        break
      default:
        break
    }
    
    switch (_size) {
      case 'xs':
        size = ((_text ? "px-3" : "w-8") + " h-7 text-xs")
        icon = ((_text ? "mr-1" : "") + " w-3.5 h-3.5 inline-block")
        secondaryIcon = ((_text ? "ml-1.5" : "") + " w-3 h-3 inline-block")
        break;
      case 'sm':
        size = ((_text ? "px-3" : "w-9") + " h-9 text-sm")
        icon = ((_text ? "mr-1.5" : "") + " w-4 h-4 inline-block")
        secondaryIcon = ((_text ? "ml-1.5" : "") + " w-3.5 h-3.5 inline-block")
        break;
      case 'md':
        size = ((_text ? "px-4" : "w-10") + " h-10 text-md")
        icon = ((_text ? "mr-2" : "") + " w-4 h-4 inline-block")
        secondaryIcon = ((_text ? "ml-2" : "") + " w-4 h-4 inline-block")
        break;
      case 'lg':
        size = ((_text ? "px-5" : "w-12") + " h-12 text-lg")
        icon = ((_text ? "mr-2.5" : "") + " w-5 h-5 inline-block")
        secondaryIcon = ((_text ? "ml-2.5" : "") + " w-5 h-5 inline-block")
        break;
      case 'xl':
        size = ((_text ? "px-6" : "w-16") + " h-16 text-xl")
        icon = ((_text ? "mr-3" : "") + " w-6 h-6 inline-block")
        secondaryIcon = ((_text ? "ml-3" : "") + " w-6 h-6 inline-block")
        break;
      default:
        break;
    }

    switch (_iconSize) {
      case 'sm':
        iconSize = "transform scale-75"
        break;
      case 'md':
        iconSize = "transform scale-100"
        break;
      case 'lg':
        iconSize = "transform scale-125"
        break;
      case 'xl':
        iconSize = "transform scale-150"
        break;
      default:
        iconSize = "transform scale-100"
        break;
    }

    setBtnClasses( _base + " " + _focus + " " + _transition + " " + variant + " " + size + " " + block + " " + cursor + " " + rounded + " " + _suffixClasses )
    setIconClasses( icon + " " + iconSize )
    setSecondaryIconClasses( secondaryIcon + " " + iconSize )
  }

  const loadingText = () => {
    return (
      <>
      <svg xmlns="http://www.w3.org/2000/svg" width="auto" height="auto" viewBox="0 0 48 48" className="h-5 mr-2 animate-spin">
        <circle cx="24" cy="4" r="4" fill="#fff"/>
        <circle cx="12.19" cy="7.86" r="3.7" fill="#fffbf2"/>
        <circle cx="5.02" cy="17.68" r="3.4" fill="#fef7e4"/>
        <circle cx="5.02" cy="30.32" r="3.1" fill="#fef3d7"/>
        <circle cx="12.19" cy="40.14" r="2.8" fill="#feefc9"/>
        <circle cx="24" cy="44" r="2.5" fill="#feebbc"/>
        <circle cx="35.81" cy="40.14" r="2.2" fill="#fde7af"/>
        <circle cx="42.98" cy="30.32" r="1.9" fill="#fde3a1"/>
        <circle cx="42.98" cy="17.68" r="1.6" fill="#fddf94"/>
        <circle cx="35.81" cy="7.86" r="1.3" fill="#fcdb86"/>
      </svg>
      Loading...
      </>
    )
  } 

  useEffect(() => {
    setup()
  });

  return (
    <button 
      onClick={props.onClick} 
      className={btnClasses} 
      disabled={_disabled}
    >
      {Children.map(_arrayChildren, (child, index) => {
        return (
          <>
            {child}
          </>
        )
      })}
      {_icon ? <span className={iconClasses}>{_loading ? _loadingIcon : _icon}</span> : null}
      {_loading ? loadingText() : _text} 
      {_secondaryIcon ? <span className={secondaryIconClasses}>{_secondaryIcon}</span> : null}
    </button>
  )
}

export default Button;