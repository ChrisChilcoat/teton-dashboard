import React, { useState } from 'react'

function SimpleComposer() {
  const [text, setText] = useState('Init Text');

  return (
    <div className="flex items-center space-x-3 ">
      <p>{text}</p>
      <button onClick={ () => setText('Updated Text') }>click me enzyme</button>
      <div className="flex-shrink-0">
        <img className="rounded-full w-9 h-9" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=8&amp;w=256&amp;h=256&amp;q=80" alt=""></img>
      </div>
      <div className="flex-1 min-w-0">
        <form action="#" className="mb-0">
          <div>
            <label htmlFor="comment" className="sr-only">About</label>
            <textarea id="comment" name="comment" rows="1" className="block w-full px-4 py-2 font-serif border border-gray-300 rounded-full shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 sm:text-sm dark:bg-black dark:border-gray-600 dark:text-gray-200" placeholder="Post a reply..."></textarea>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SimpleComposer;