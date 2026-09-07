function Header() {
  return (
<header className="fixed top-0 left-0 w-full h-20 z-50 bg-white border-b border-gray-200 flex items-center justify-between px-6">      
      {/* Left Section */}
      <div className="flex items-center gap-4">

        {/* System Logo */}
        <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white">
          <span className="material-symbols-outlined">
            device_thermostat
          </span>
        </div>

        {/* System Name */}
        <div>
          <h1 className="font-bold text-lg text-gray-900">
            ThermoPulse
          </h1>

          <p className="text-xs text-gray-500">
            Urban Heat Intelligence
          </p>
        </div>

      </div>


      {/* Search */}
      <div className="flex-1 max-w-xl mx-8">

        <div className="relative">

          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            search
          </span>

          <input
            type="text"
            placeholder="Search wards, sensors, facilities..."
            className="w-full h-11 pl-11 pr-4 rounded-xl bg-gray-100 border border-transparent outline-none focus:bg-white focus:border-orange-400 transition"
          />

        </div>

      </div>


      {/* Right Section */}
      <div className="flex items-center gap-4">

        {/* Atmospheric Feed */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-2 rounded-lg bg-green-50">

          <span className="w-2 h-2 rounded-full bg-green-500"></span>

          <span className="text-sm text-green-700 font-bold">
            Atmospheric Feed
          </span>

        </div>


        {/* Sync */}
        <button
          className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center"
          title="Sync"
        >
          <span className="material-symbols-outlined text-gray-600">
            sync
          </span>
        </button>


        {/* Notification */}
        <button
          className="relative w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center"
          title="Notifications"
        >
          <span className="material-symbols-outlined text-gray-600">
            notifications
          </span>

          {/* Notification dot */}
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500"></span>
        </button>

      </div>

    </header>
  );
}

export default Header;