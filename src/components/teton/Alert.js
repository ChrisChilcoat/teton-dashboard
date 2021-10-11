import React, { useState, useEffect } from "react";

import { XIcon } from "@heroicons/react/solid";

function Alert( props ) {

  let _variant = props.variant ? props.variant : "primary";

  let _primary = 'bg-blue-600'
  let _secondary = 'bg-gray-600'
  let _success = 'bg-green-600'
  let _warning = 'bg-yellow-600'
  let _danger = 'bg-red-600'
  let _info = 'bg-purple-600'

  const [alertClass, setAlertClass] = useState();

  const setup = () => {
    
    let variant

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
      default:
        variant = _primary
        break
    }
   
    setAlertClass(variant)

  }

  useEffect(() => {
    setup()
  });

  return (
    <div className="flex m-1 mb-3 overflow-hidden bg-white rounded-sm shadow" role="alert">
      <div className={alertClass + " flex items-center justify-center p-3 text-white"} aria-hidden="true">
        <div className="w-5 h-5">
          {props.icon}
        </div>
      </div>
      <div className="flex-grow p-3">
        { props.text ? <div className="font-bold text-black font-lg">{props.text}</div> : null }
        { props.subtext ? <div className="text-gray-500 font-sm">{props.subtext}</div> : null }
      </div>
      {props.dismissable ?
        <div className="p-3">
          <button data-dismiss="alert" className="text-gray-500 hover:text-gray-800">
            <span className="sr-only">Dismiss</span>
            <span aria-hidden="true"><XIcon className="w-5 h-5"/></span>
          </button>
        </div>
      :
        null
      }
    </div>
  );
};

export default Alert;