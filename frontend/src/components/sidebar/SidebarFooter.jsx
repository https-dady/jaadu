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
        h-20
        border-t
        border-gray-200
        px-4
        flex
        items-center
        justify-between
      "
    >
      {/* User */}

      <div className="flex items-center gap-3">

        <div
          className="
            h-12
            w-12
            rounded-full
            bg-green-600
            text-white
            flex
            items-center
            justify-center
            font-semibold
          "
        >
          T
        </div>

        <div>
          <h3 className="font-semibold">
            Tarun
          </h3>

          <p className="text-xs text-gray-500">
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
        "
      >
        <HiOutlineArrowRightOnRectangle
          size={22}
          className="text-gray-600"
        />
      </button>

    </footer>
  );
}

export default SidebarFooter;