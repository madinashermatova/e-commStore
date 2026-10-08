// src/components/layout/Layout.tsx
import { Outlet } from "react-router";
import AnnouncementBar from "./AnnouncementBar";
import Header from "./Header";
import Footer from "./Footer";
import Newsletter from "./Newsletter";

export default function Layout() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <Outlet />
      </main>
      <Newsletter />
      <Footer />
    </>
  );
}   