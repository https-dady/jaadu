// ============================================================================
// Sidebar Footer
// ============================================================================
//
// Purpose:
// -----------------------------------------------------------------------------
// Sidebar ka bottom section.
//
// Responsibilities:
// - Current User Preview
// - Future me Profile
// - Future me Logout Button
//
// ============================================================================

import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";

function SidebarFooter() {
  return (
    <footer
      className="
        h-16
        sm:h-20
        border-t
        border-gray-200
        px-3
        sm:px-4
        flex
        items-center
        justify-between
        shrink-0
      "
    >
      {/* User */}

      <div className="flex items-center gap-3 min-w-0">
        <div
          className="
            h-10
            w-10
            sm:h-12
            sm:w-12
            rounded-full
            bg-green-600
            text-white
            flex
            items-center
            justify-center
            font-semibold
            shrink-0
          "
        >
          T
        </div>

        <div className="min-w-0">
          <h3 className="font-semibold text-sm sm:text-base truncate">
            Tarun
          </h3>

          <p className="text-xs text-gray-500 truncate">
            Online
          </p>
        </div>
      </div>

      {/* Logout Placeholder */}

      <button
        className="
          p-2
          rounded-lg
          hover:bg-gray-100
          transition
          shrink-0
        "
      >
        <HiOutlineArrowRightOnRectangle
          size={20}
          className="text-gray-600 sm:w-[22px] sm:h-[22px]"
        />
      </button>
    </footer>
  );
}

export default SidebarFooter;