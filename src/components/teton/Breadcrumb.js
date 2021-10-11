import React from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { NavLink } from 'react-router-dom';

function Breadcrumb({trail, label}) {
  return (
    <nav aria-label={label}>
      <ol className="flex">
        {trail.map((item, index, array) => (
          <li className={"inline-flex items-center"}>
            {index !== 0 ? <ChevronRightIcon className="flex-shrink-0 w-5 h-5 text-gray-300"/> : ''}
            <NavLink 
              key={item.name} 
              to={item.href}
              className="ml-2 mr-2 text-sm font-medium text-gray-500 hover:text-gray-700"
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;