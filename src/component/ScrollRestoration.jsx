import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollRestoration() {
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;

    // Scroll to top for gallery and other routes
    if (
      pathname === "/gallery" ||
      pathname === "/login" ||
      pathname === "/checkout" ||
      pathname.startsWith("/stay/")
    ) {
      window.dispatchEvent(new Event("scrollToTop"));
      return;
    }

    // Optional: save/restore scroll positions for other pages
    // This example just scrolls to top if nothing saved
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location]);

  return null;
}
