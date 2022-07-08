import React from 'react'
import PropTypes from 'prop-types';

Row.propTypes = {
  suffixClasses: PropTypes.string,
  cols: PropTypes.number.isRequired
}
Row.defaultProps = {
  suffixClasses: '',
  cols: null
}

function Row({ children, cols, suffixClasses }) { 

  let base = 'grid gap-4'
  let _cols

  switch(cols) {
    case '1':
      _cols = 'grid-cols-1'
      break
    case '2':
      _cols = 'grid-cols-2'
      break
    case '3':
      _cols = 'grid-cols-3'
      break
    case '4':
      _cols = 'grid-cols-4'
      break
    case '5':
      _cols = 'grid-cols-5'
      break
    case '6':
      _cols = 'grid-cols-6'
      break
    case '7':
      _cols = 'grid-cols-7'
      break
    case '8':
      _cols = 'grid-cols-8'
      break
    case '9':
      _cols = 'grid-cols-9'
      break
    case '10':
      _cols = 'grid-cols-10'
      break
    case '11':
      _cols = 'grid-cols-11'
      break
    case '12':
      _cols = 'grid-cols-12'
      break
    default:
      break
  }

  let classNames = base + ' ' + _cols + ' ' + suffixClasses

  return (
    <div className={classNames}>
      {children}
    </div>
  )
}

export default Row