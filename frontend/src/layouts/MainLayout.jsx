// ============================================================================
// Main Layout
// ============================================================================
//
// Purpose:
// -----------------------------------------------------------------------------
// JAADU application ka main layout.
//
// Structure:
//
// +-----------------------------------------------------------+
// | Sidebar |                Chat Area                       |
// +-----------------------------------------------------------+
//
// Responsive:
//
// Desktop:
// Sidebar + Chat
//
// Mobile:
// Responsive behavior baad me add karenge.
//
// ============================================================================

import PropTypes from "prop-types";

import Sidebar from "@/components/sidebar/Sidebar";

function MainLayout({ children }) {
  return (
    <div className="h-screen w-full flex bg-gray-100">

      {/* ================================================================
          Sidebar
      ================================================================= */}

      <Sidebar />

      {/* ================================================================
          Main Chat Area
      ================================================================= */}

      <main className="flex-1 bg-gray-50">
        {children}
      </main>

    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;