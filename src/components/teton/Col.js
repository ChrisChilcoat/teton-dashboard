import React from 'react'
import PropTypes from 'prop-types';

Col.propTypes = {
  suffixClasses: PropTypes.string,
  xs: PropTypes.string,
  sm: PropTypes.string,
  md: PropTypes.string,
  lg: PropTypes.string,
  xl: PropTypes.string,
  xxl: PropTypes.string,
  push: PropTypes.string,
  pull: PropTypes.string,
}
Col.defaultProps = {
  suffixClasses: '',
  xs: '',
  sm: '',
  md: '',
  lg: '',
  xl: '',
  xxl: '',
  push: '',
  pull: '',
}

function Col({ children, xs, sm, md, lg, xl, xxl, push, pull, suffixClasses, className }) { 

  let _base = ' '
  let _xs, _sm, _md, _lg, _xl, _xxl

  switch(xs) {
    case '1':
      _xs = 'col-span-1 '
      break
    case '2':
      _xs = 'col-span-2 '
      break
    case '3':
      _xs = 'col-span-3 '
      break
    case '4':
      _xs = 'col-span-4 '
      break
    case '5':
      _xs = 'col-span-5 '
      break
    case '6':
      _xs = 'col-span-6 '
      break
    case '7':
      _xs = 'col-span-7 '
      break
    case '8':
      _xs = 'col-span-8 '
      break
    case '9':
      _xs = 'col-span-9 '
      break
    case '10':
      _xs = 'col-span-10 '
      break
    case '11':
      _xs = 'col-span-11 '
      break
    case '12':
      _xs = 'col-span-12 ' 
      break
    default:
      _xs = ''
      break
  }

  switch(sm) {
    case '1':
      _sm = 'sm:col-span-1 '
      break
    case '2':
      _sm = 'sm:col-span-2 '
      break
    case '3':
      _sm = 'sm:col-span-3 '
      break
    case '4':
      _sm = 'sm:col-span-4 '
      break
    case '5':
      _sm = 'sm:col-span-5 '
      break
    case '6':
      _sm = 'sm:col-span-6 '
      break
    case '7':
      _sm = 'sm:col-span-7 '
      break
    case '8':
      _sm = 'sm:col-span-8 '
      break
    case '9':
      _sm = 'sm:col-span-9 '
      break
    case '10':
      _sm = 'sm:col-span-10 '
      break
    case '11':
      _sm = 'sm:col-span-11 '
      break
    case '12':
      _sm = 'sm:col-span-12 ' 
      break
    default:
      _sm = ''
      break
  }

  switch(md) {
    case '1':
      _md = 'md:col-span-1 '
      break
    case '2':
      _md = 'md:col-span-2 '
      break
    case '3':
      _md = 'md:col-span-3 '
      break
    case '4':
      _md = 'md:col-span-4 '
      break
    case '5':
      _md = 'md:col-span-5 '
      break
    case '6':
      _md = 'md:col-span-6 '
      break
    case '7':
      _md = 'md:col-span-7 '
      break
    case '8':
      _md = 'md:col-span-8 '
      break
    case '9':
      _md = 'md:col-span-9 '
      break
    case '10':
      _md = 'md:col-span-10 '
      break
    case '11':
      _md = 'md:col-span-11 '
      break
    case '12':
      _md = 'md:col-span-12 '
      break
    default:
      _md = ''
      break
  }

  switch(lg) {
    case '1':
      _lg = 'lg:col-span-1 '
      break
    case '2':
      _lg = 'lg:col-span-2 '
      break
    case '3':
      _lg = 'lg:col-span-3 '
      break
    case '4':
      _lg = 'lg:col-span-4 '
      break
    case '5':
      _lg = 'lg:col-span-5 '
      break
    case '6':
      _lg = 'lg:col-span-6 '
      break
    case '7':
      _lg = 'lg:col-span-7 '
      break
    case '8':
      _lg = 'lg:col-span-8 '
      break
    case '9':
      _lg = 'lg:col-span-9 '
      break
    case '10':
      _lg = 'lg:col-span-10 '
      break
    case '11':
      _lg = 'lg:col-span-11 '
      break
    case '12':
      _lg = 'lg:col-span-12 '
      break
    default:
      _lg = ''
      break
  }

  switch(xl) {
    case '1':
      _xl = 'xl:col-span-1 '
      break
    case '2':
      _xl = 'xl:col-span-2 '
      break
    case '3':
      _xl = 'xl:col-span-3 '
      break
    case '4':
      _xl = 'xl:col-span-4 '
      break
    case '5':
      _xl = 'xl:col-span-5 '
      break
    case '6':
      _xl = 'xl:col-span-6 '
      break
    case '7':
      _xl = 'xl:col-span-7 '
      break
    case '8':
      _xl = 'xl:col-span-8 '
      break
    case '9':
      _xl = 'xl:col-span-9 '
      break
    case '10':
      _xl = 'xl:col-span-10 '
      break
    case '11':
      _xl = 'xl:col-span-11 '
      break
    case '12':
      _xl = 'xl:col-span-12 '
      break
    default:
      _xl = ''
      break
  }

  switch(xxl) {
    case '1':
      _xxl = '2xl:col-span-1 '
      break
    case '2':
      _xxl = '2xl:col-span-2 '
      break
    case '3':
      _xxl = '2xl:col-span-3 '
      break
    case '4':
      _xxl = '2xl:col-span-4 '
      break
    case '5':
      _xxl = '2xl:col-span-5 '
      break
    case '6':
      _xxl = '2xl:col-span-6 '
      break
    case '7':
      _xxl = '2xl:col-span-7 '
      break
    case '8':
      _xxl = '2xl:col-span-8 '
      break
    case '9':
      _xxl = '2xl:col-span-9 '
      break
    case '10':
      _xxl = '2xl:col-span-10 '
      break
    case '11':
      _xxl = '2xl:col-span-11 '
      break
    case '12':
      _xxl = '2xl:col-span-12 '
      break
    default:
      _xxl = ''
      break
  }

  let final = _base + _xs + _sm + _md + _lg + _xl + _xxl + className + suffixClasses

  return (
    <div className={final}>
      {children}
    </div>
  )
}

export default Col