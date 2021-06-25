import {
  ArrowNarrowRightIcon,
  CalendarIcon,
  HomeIcon,
  UserGroupIcon
} from "@heroicons/react/solid"
const { default: Header } = require("../components/Header")

const Home = () => {
  return (
    <div>
      <Header />
      <section>
        <div className="grid grid-cols-2 space-x-48 pl-44 items-center justify-center h-70v mx-auto">
          <div className="">
            <h1 className="font-bold text-gray-50 text-4xl">
              Beautiful Places of Uganda
            </h1>
            <p className="text-gray-50 pt-4">
              Plan your vacation on the most beautiful
            </p>
            <p className="text-gray-50">places of Uganda.</p>
          </div>
          <div className="flex bg-secondary rounded-l-lg justify-end bg-opacity-20 cursor-pointer ">
            <div className="flex-auto p-3">
              <div className="flex flex-wrap">
                <p className="font-light text-gray-50 pb-2">Up next</p>
                <h1 className="flex-auto text-2xl font-semibold text-white">
                  Sight see the cranes.
                </h1>
                <div className="pt-12">
                  <ArrowNarrowRightIcon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
            <div className="flex-none w-60 h-52  relative">
              <img
                src="https://images.unsplash.com/photo-1575408890329-d0afa893e624?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="flex items-center bg-gray-700 max-w-5xl mx-auto rounded-lg -mt-5">
        <div className="py-4 px-4">
          <div className="">
            <h2 className="text-sm font-semibold text-gray-300">
              Book your vacation
            </h2>
          </div>
          <div className="flex space-x-6 items-center">
            <div className="flex border my-2 rounded-lg border-gray-600 space-x-3 w-full">
              {/* accomodation  */}
              <div className="flex items-center py-2 border-r border-gray-600">
                <HomeIcon className="w-5 h-5 text-gray-400 mx-2" />
                <div>
                  <h3 className="text-xs text-gray-400 p-0">Accomodation</h3>
                  <select
                    name="cars"
                    id="cars"
                    className="w-64 text-sm border-0 p-0 bg-transparent text-gray-300 cursor-pointer "
                  >
                    <option value="mercedes" className="text-gray-800">
                      Nakasongola
                    </option>
                    <option value="volvo">Kampala</option>
                    <option value="saab">Jinja</option>
                    <option value="audi">Kawempe</option>
                  </select>
                </div>
              </div>

              {/* check-in date  */}
              <div className="flex items-center border-r border-gray-600">
                <CalendarIcon className="w-5 h-5 text-gray-400 mx-2" />
                <div>
                  <h3 className="text-xs text-gray-400 p-0">Check-in</h3>
                  <input
                    type="text"
                    name="checkin"
                    id="checkin"
                    placeholder="MM/DD/YYYY"
                    className="w-full text-sm border-0 p-0 bg-transparent text-gray-300"
                  />
                </div>
              </div>

              {/* checkout  */}
              <div className="flex items-center border-r border-gray-600">
                {/* <CalendarIcon className="w-5 h-5 text-gray-400 mx-2" /> */}
                <div>
                  <h3 className="text-xs text-gray-400 p-0 ">Check-out</h3>
                  <input
                    type="text"
                    name="checkin"
                    id="checkin"
                    placeholder="MM/DD/YYYY"
                    className="w-full text-sm border-0 p-0 bg-transparent text-gray-300"
                  />
                </div>
              </div>

              {/* no of guests */}
              <div className="flex items-center py-2">
                <UserGroupIcon className="w-5 h-5 text-gray-400 mx-2" />
                <div>
                  <h3 className="text-xs text-gray-400 p-0">Guests</h3>
                  <input
                    type="text"
                    placeholder="4 Guests"
                    className="w-full text-sm border-0 p-0 bg-transparent text-gray-300"
                  />
                </div>
              </div>
            </div>
            <div className="">
              <a
                href="#"
                className="text-gray-50 rounded-lg font-semibold text-sm inline-block py-4 px-10 bg-primary"
              >
                Search
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
