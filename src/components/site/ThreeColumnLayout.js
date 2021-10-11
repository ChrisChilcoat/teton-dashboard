import React from "react";

export default function ThreeColumnLayout({fixedHeader, header, sidebar, main, aside}) {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <div className={(fixedHeader === false ? 'static' : 'fixed z-40') + " w-full mx-auto max-w-screen-2x"}>
          {React.cloneElement(header, {a: 'this is b'})}
        </div>
        <div className="grid grid-cols-12 gap-8 mx-auto max-w-screen-2xx sm:px-6 lg:max-w-screen-2x lg:px-2">
          <nav className={(fixedHeader === false ? '' : 'pt-14') + " sticky top-0 hidden h-screen space-y-2 lg:block lg:col-span-3"}>
            <div className="h-full pt-2 pr-4 overflow-scroll divide-y divide-gray-300">
              {sidebar}
            </div>
          </nav>
          <main aria-labelledby="main-heading" className={(fixedHeader === false ? '' : 'pt-10 mt-3') + " col-span-12 md:col-span-8 lg:col-span-6"}>
            <h1 id="main-heading" className="sr-only">Main Content</h1>
            {main}
          </main>
          <aside className={(fixedHeader === false ? '' : 'pt-14') + " sticky top-0 hidden h-screen col-span-4 space-y-4 md:block lg:col-span-3"}>
            <div className="h-full pt-4 space-y-2 overflow-scroll divide-y divide-gray-300 top-20 scrollbar-hide">
              {aside}
            </div>
          </aside>
        </div>
      </div> 
      <div className="fixed top-0 left-0 z-40 w-1/5 h-full bg-blue-400">
        Push Out Menu
      </div>
      <div className="fixed top-0 right-0 z-40 w-1/12 h-full bg-black">
        configuration flyout
        <button className="p-2 bg-blue-400">Make header static</button>
      </div>
    </>
  )
}