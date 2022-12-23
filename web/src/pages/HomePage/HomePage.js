import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

import { Link, routes } from '@redwoodjs/router'
import { Head, MetaTags } from '@redwoodjs/web'

import FamiliesCell from 'src/components/FamiliesCell/FamiliesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <div className="container mx-auto py-5">
        <div className="mb-5 border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Families
          </h3>
          <div className="mt-3 sm:mt-0 sm:ml-4">
            <label htmlFor="mobile-search-candidate" className="sr-only">
              Search
            </label>
            <label htmlFor="desktop-search-candidate" className="sr-only">
              Search
            </label>
            <div className="flex rounded-md shadow-sm">
              <div className="relative flex-grow focus-within:z-10">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MagnifyingGlassIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="text"
                  name="mobile-search-candidate"
                  id="mobile-search-candidate"
                  className="block w-full rounded-none rounded-l-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:hidden"
                  placeholder="Search"
                />
                <input
                  type="text"
                  name="desktop-search-candidate"
                  id="desktop-search-candidate"
                  className="hidden w-full rounded-none rounded-l-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:block sm:text-sm"
                  placeholder="Search candidates"
                />
              </div>
            </div>
          </div>
        </div>
        <FamiliesCell />
      </div>
    </>
  )
}

export default HomePage
