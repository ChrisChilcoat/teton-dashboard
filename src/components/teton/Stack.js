import React, { Children } from 'react'
import PropTypes from 'prop-types';

Stack.propTypes = {
  suffixClasses: PropTypes.string,
  stretch: PropTypes.string,
}
Stack.defaultProps = {
  suffixClasses: '',
  stretch: 'all'
}

function Stack({ children, stretch, suffixClasses }) { 
  const arrayChildren = Children.toArray(children)
  let _base = 'md:space-x-4 flex flex-col md:flex-row space-y-4 md:space-y-0'
  let _first = '', 
      _center = '',
      _last = '',
      _middle = '', 
      _ends = '', 
      _all = ''

  switch(stretch) {
    case 'first':
      _first = ' flex-1'
      break
    case 'center':
      _center = ' flex-1'
      break
    case 'last':
      _last = ' flex-1'
      break
    case 'middle':
      _center = ' flex-1'
      _middle = ' flex-1'
      break
    case 'ends':
      _ends = ' flex-1'
      break
    case 'all':
      _all = ' flex-1'
      break
    case 'none':
      _all = ' flex-none'
      break
    default:
      break
  }

  let final = _base + suffixClasses

  return (
    <div className={final}>
      {Children.map(arrayChildren, (child, index) => {
        if (index === 0) {
          return <div className={child.props.className + _first + _ends + _all + ""} >{child.props.children}</div>
        }
        if ((index !== 0) && (index !== (arrayChildren.length - 1))) {
          if (Math.abs(arrayChildren.length % 2) === 1) {
            if (index === (arrayChildren.length - 1)/2) {
              return <div className={child.props.className + _center + _all}>{child.props.children}</div>
            } else {
              return <div className={child.props.className + _middle + _all}>{child.props.children}</div>
            }
          } else {
            return <div className={child.props.className + _middle + _all}>{child.props.children}</div>
          }
        }
        if (index === (arrayChildren.length - 1)) {
          return <div className={child.props.className + _last + _ends + _all}>{child.props.children}</div>
        }
      })}
    </div>
  )
}

export default Stack