// ============================================================================
// Sidebar Header
// ============================================================================
//
// Purpose:
// -----------------------------------------------------------------------------
// Sidebar ka top section.
//
// Responsibilities:
// - App Logo
// - App Name
// - Future me Settings Button
//
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
        px-5
      "
    >
      {/* Logo + App Name */}

      <div className="flex items-center gap-3">
        <div
          className="
            h-11
            w-11
            rounded-xl
            bg-blue-600
            text-white
            flex
            items-center
            justify-center
            font-bold
            text-lg
          "
        >
          J
        </div>

        <div>
          <h1 className="font-bold text-lg">
            JAADU
          </h1>

          <p className="text-xs text-gray-500">
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