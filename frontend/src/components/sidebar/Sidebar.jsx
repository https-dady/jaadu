// ============================================================================
// Sidebar Component
// ============================================================================
//
// Purpose:
// -----------------------------------------------------------------------------
// Ye poore left sidebar ka parent component hai.
//
// Responsibilities:
// - Sidebar Header
// - Search Bar
// - Chat List
// - Sidebar Footer
//
// Structure:
//
// Sidebar
// │
// ├── SidebarHeader
// ├── SearchBar
// ├── ChatList
// └── SidebarFooter
//
// ============================================================================

import SidebarHeader from "./SidebarHeader";
import SearchBar from "./SearchBar";
import ChatList from "./ChatList";
import SidebarFooter from "./SidebarFooter";

function Sidebar() {
  return (
    <aside
      className="
        w-full
        md:w-[340px]
        h-full
        bg-white
        border-r
        border-gray-200
        flex
        flex-col
      "
    >
      {/* Header */}
      <SidebarHeader />

      {/* Search */}
      <SearchBar />

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">
        <ChatList />
      </div>

      {/* Footer */}
      <SidebarFooter />
    </aside>
  );
}

export default Sidebar;