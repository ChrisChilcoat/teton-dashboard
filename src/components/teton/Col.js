import React from 'react'
import PropTypes from 'prop-types';

Col.propTypes = {
  suffixClasses: PropTypes.string,
}
Col.defaultProps = {
  suffixClasses: '',
}

function Col({ children, suffixClasses }) { 

  let colBase = 'bg-blue-500 ' + suffixClasses

  return (
    <div className={colBase}>
      {children}
    </div>
  )
}

export default Col