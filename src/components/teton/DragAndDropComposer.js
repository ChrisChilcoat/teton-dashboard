import React from 'react'

import { LinkIcon, DocumentIcon, ChartBarIcon, EmojiHappyIcon } from '@heroicons/react/solid';

function DragAndDropComposer() {
  return (
    <div className="flex px-4 py-2 space-x-3 bg-gray-100 border border-gray-300 rounded-md items-top dark:bg-black dark:border-gray-600 dark:text-gray-200">
      <div className="flex-shrink-0">
        <img className="mt-px rounded-full w-9 h-9" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=8&amp;w=256&amp;h=256&amp;q=80" alt=""></img>
      </div>
      <div className="flex-1 min-w-0">
        <form action="#" className="mb-0">  
          <div>
              <label for="comment" className="sr-only">Comment</label>
              <textarea id="comment" name="comment" rows="1" className="block w-full px-4 py-2 font-serif border border-gray-300 rounded-full shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 sm:text-sm dark:bg-black dark:border-gray-600 dark:text-gray-200" placeholder="Comment..." 
              ></textarea>
          </div>
          <div className="flex items-center h-40 p-3 mt-2 border-2 border-gray-300 border-dashed rounded-md dark:border-gray-600">
            <p className="block w-full text-center text-gray-700 dark:text-gray-200">Drag and drop files here.</p>
          </div>
          <div className="flex mt-2">
            <div className="flex items-center w-3/4 space-x-1">
              <button
                type="button"
                className="px-2 py-2 text-sm font-medium leading-4 text-center text-gray-600 bg-white border border-transparent border-gray-300 rounded-full shadow-sm hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:border-gray-400 dark:bg-black dark:border-gray-600 dark:text-gray-200"
              >
                <span className="sr-only">Button Title</span>
                <LinkIcon className="w-5 h-5"/>
              </button>
              <button
                type="button"
                className="px-2 py-2 text-sm font-medium leading-4 text-center text-gray-600 bg-white border border-transparent border-gray-300 rounded-full shadow-sm hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:border-gray-400 dark:bg-black dark:border-gray-600 dark:text-gray-200"
              >
                <span className="sr-only">Button Title</span>
                <DocumentIcon className="w-5 h-5"/>
              </button>
              <button
                type="button"
                className="px-2 py-2 text-sm font-medium leading-4 text-center text-gray-600 bg-white border border-transparent border-gray-300 rounded-full shadow-sm hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:border-gray-400 dark:bg-black dark:border-gray-600 dark:text-gray-200"
              >
                <span className="sr-only">Button Title</span>
                <ChartBarIcon className="w-5 h-5"/>
              </button>
              <button
                type="button"
                className="px-2 py-2 text-sm font-medium leading-4 text-center text-gray-600 bg-white border border-transparent border-gray-300 rounded-full shadow-sm hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:border-gray-400 dark:bg-black dark:border-gray-600 dark:text-gray-200"
              >
                <span className="sr-only">Button Title</span>
                <EmojiHappyIcon className="w-5 h-5"/>
              </button>
              <p className="px-1 text-sm text-gray-500 dark:text-gray-400">Type @ to mention others</p>
            </div>
            <div className="flex">
              <button
                type="button"
                className="px-3 py-2 text-sm font-medium leading-4 text-center text-white bg-blue-600 border border-transparent rounded-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-36"
              >
                Post
              </button>
    
            </div>

          </div>

        </form>
    </div>
  </div>
  )
}

export default DragAndDropComposer;