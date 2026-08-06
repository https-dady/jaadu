// ============================================================================
// Search Bar
// ============================================================================
//
// Purpose:
// -----------------------------------------------------------------------------
// Sidebar me users/chats search karne ke liye.
//
// Note:
// Abhi ye sirf UI hai.
// Search functionality baad me API integration ke time add hogi.
//
// ============================================================================

import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

function SearchBar() {
  return (
    <div className="p-4 border-b border-gray-200">
      <div className="relative">

        <HiOutlineMagnifyingGlass
          className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-gray-400
          "
          size={20}
        />

        <input
          type="text"
          placeholder="Search chats..."
          className="
            w-full
            h-11
            rounded-xl
            bg-gray-100
            pl-12
            pr-4
            outline-none
            border
            border-transparent
            focus:border-blue-500
            transition
          "
        />

      </div>
    </div>
  );
}

export default SearchBar;