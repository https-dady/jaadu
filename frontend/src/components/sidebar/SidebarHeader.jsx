// ============================================================================
// Sidebar Header
// ============================================================================

import { HiOutlineCog6Tooth } from "react-icons/hi2";

function SidebarHeader() {
  return (
    <header
      className="
        h-18
        border-b
        border-gray-200
        flex
        items-center
        justify-between
        px-4
        sm:px-5
        shrink-0
      "
    >
      {/* Logo + App Name */}

      <div className="flex items-center gap-3 min-w-0">
        <div
          className="
            h-10
            w-10
            sm:h-11
            sm:w-11
            rounded-xl
            bg-blue-600
            text-white
            flex
            items-center
            justify-center
            font-bold
            text-lg
            shrink-0
          "
        >
          J
        </div>

        <div className="min-w-0">
          <h1 className="font-bold text-base sm:text-lg truncate">
            JAADU
          </h1>

          <p className="text-xs text-gray-500 truncate">
            Chat Application
          </p>
        </div>
      </div>

      {/* Settings Button */}

      <button
        className="
          p-2
          rounded-lg
          hover:bg-gray-100
          transition
          shrink-0
        "
      >
        <HiOutlineCog6Tooth
          size={22}
          className="text-gray-600"
        />
      </button>
    </header>
  );
}

export default SidebarHeader;