import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline'
import { useRef } from 'react';

export default function Example() {
  const mainNode = useRef("");
  const handingRef = () => {
    mainNode.current.classList.add("hidden");
  }
  return (
    <div className="bg-indigo-600" ref={mainNode}>
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className="flex p-2 rounded-lg bg-indigo-800">
              <SpeakerphoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
            <p className="m-0 ml-3 font-medium text-white truncate">
              <span className="md:hidden">Under construction!</span>
              <span className="hidden md:inline">This blog is still under construction!</span>
            </p>
          </div>
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              type="button"
              onClick={handingRef}
              className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
            >
              <span className="sr-only">Dismiss</span>
              <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
