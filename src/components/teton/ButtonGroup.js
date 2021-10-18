import React, { useState, Children } from "react";
import PropTypes from 'prop-types';

import Button from './Button';
import DropdownButton from './DropdownButton';

ButtonGroup.propTypes = {
  rounded: PropTypes.bool,
  size: PropTypes.string,
  label: PropTypes.string,
  variant: PropTypes.string, 
}

ButtonGroup.defaultProps = {
  rounded: false,
  size: 'md',
  label: '',
  variant: 'secondary', 
};

function ButtonGroup({ children, variant, label, size, rounded}) {

  let first = ((rounded ? 'rounded-l-full' : '') + ' rounded-r-none mr-0')
  let middle = 'rounded-r-none rounded-l-none mr-0 ml-0'
  let last = ((rounded ? 'rounded-r-full' : '') + ' rounded-l-none ml-0')

  const [activeButton, setActiveButton] = useState();
  const arrayChildren = Children.toArray(children);

  return (
    <div role="group" aria-label={label} className="flex-1">  
      {Children.map(arrayChildren, (child, index) => {
        return (     
          <span onClick={!child.props.disabled ? () => setActiveButton(index) : null }>
            {child.type.name === 'Button' &&
              <Button
                key={index}
                variant={variant}
                size={size}
                icon={child.props.icon}
                iconSize={child.props.iconSize}
                disabled={child.props.disabled}
                secondaryIcon={child.props.secondaryIcon}
                suffixClasses={ index === 0 ? first : index === (arrayChildren.length - 1) ? last : middle }
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
                suffixClasses={ index === 0 ? first : index === (arrayChildren.length - 1) ? last : middle }
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

export default ButtonGroup;