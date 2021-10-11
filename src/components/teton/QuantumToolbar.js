import React, { useState, Children, Fragment } from "react";

import Button from './Button';
import DropdownButton from './DropdownButton';

const QuantumToolbar = ({ children, variant, label, size, rounded, block, active }) => {

  let _wrapperWidth = null


  const [activeButton, setActiveButton] = useState();
  const arrayChildren = Children.toArray(children);

  return (
    <div role="group" className="flex-1 space-x-2">   
      {Children.map(arrayChildren, (child, index) => {
        return ( 
          <span onClick={ !child.props.disabled ? () => setActiveButton(index) : null }>
            {child.type.name === 'Button' &&
              <Button
                key={index}
                variant={variant}
                size={size}
                icon={child.props.icon}
                iconSize={child.props.iconSize}
                disabled={child.props.disabled}
                secondaryIcon={child.props.secondaryIcon}
                suffixClasses={child.props.suffixClasses}
                text={child.props.text}
                active={!activeButton && child.props.active ? true : (index === activeButton ? true : false)}
                onClick={child.props.onClick}
                onPress={() => setActiveButton(index)}
              >
                 {child.props.children}
              </Button>
            }
            {child.type.name === 'DropdownButton' &&
              <DropdownButton                 
                variant={variant}
                size={size}
                icon={child.props.icon}
                iconSize={child.props.iconSize}
                disabled={child.props.disabled}
                secondaryIcon={child.props.secondaryIcon}
                suffixClasses={child.props.suffixClasses}
                text={child.props.text}
                active={!activeButton && child.props.active ? true : (index === activeButton ? true : false)}
                onClick={child.props.onClick}
                onPress={() => setActiveButton(index)}
              >
                {child.props.children}
              </DropdownButton>
            }
          </span>
          )
      })}
    </div>
  );
};

export default QuantumToolbar;