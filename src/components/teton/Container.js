import React from 'react'
import PropTypes from 'prop-types';

Container.propTypes = {
  suffixClasses: PropTypes.string,
  max: PropTypes.string
}
Container.defaultProps = {
  suffixClasses: '',
  max: ''
}

function Container({ children, max, suffixClasses }) { 

  let _base = 'm-auto px-4'
  let _max

  switch(max) {
    case 'sm':
      _max = 'max-w-screen-sm' // max-width: 640px;
      break
    case 'md':
      _max = 'max-w-screen-md' // max-width: 768px;
      break
    case 'lg':
      _max = 'max-w-screen-lg' //	max-width: 1024px;
      break
    case 'xl':
      _max = 'max-w-screen-xl' //	max-width: 1280px;
      break
    case 'xxl':
      _max = 'max-w-screen-2xl' // max-width: 1536px;
      break
    default:
      break
  }

  let final = _base + ' ' + _max + ' ' + suffixClasses

  return (
    <div className={final}>
      {children}
    </div>
  )
}

export default Container