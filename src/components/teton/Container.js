import React from 'react'
import PropTypes from 'prop-types';

Container.propTypes = {
  suffixClasses: PropTypes.string,
}
Container.defaultProps = {
  suffixClasses: '',
}

function Container({ children, suffixClasses }) { 
  let contBase = 'bg-pink-500 ' + suffixClasses
  
  return (
    <div className={contBase}>
      {children}
    </div>
  )
}

export default Container