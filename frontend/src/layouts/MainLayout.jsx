// ============================================================================
// Main Layout
// ============================================================================

import PropTypes from "prop-types";

import Sidebar from "@/components/sidebar/Sidebar";

import { useChat } from "@/context/ChatContext";
import useMediaQuery from "@/hooks/useMediaQuery";

function MainLayout({ children }) {
  const { selectedChat, isSidebarOpen } = useChat();

  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <div className="h-screen w-full bg-gray-100 overflow-hidden">

      {/* ================================================================
          Desktop Layout
      ================================================================= */}

      {!isMobile && (
        <div className="h-full flex">

          <div className="w-[340px] shrink-0 border-r border-gray-200">
            <Sidebar />
          </div>

          <main className="flex-1 bg-gray-50">
            {children}
          </main>

        </div>
      )}

      {/* ================================================================
          Mobile Layout
      ================================================================= */}

      {isMobile && (
        <>
          {/* Sidebar */}

          {isSidebarOpen && (
            <div className="h-full">
              <Sidebar />
            </div>
          )}

          {/* Chat */}

          {!isSidebarOpen && selectedChat && (
            <main className="h-full bg-gray-50">
              {children}
            </main>
          )}
        </>
      )}

    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;