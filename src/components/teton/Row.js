import React from 'react'
import PropTypes from 'prop-types';

Row.propTypes = {
  suffixClasses: PropTypes.string,
}
Row.defaultProps = {
  suffixClasses: '',
}

function Row({ children, suffixClasses }) { 

  let rowBase = 'bg-red-500 ' + suffixClasses

  return (
    <div className={rowBase}>
      {children}
    </div>
  )
}

export default Row