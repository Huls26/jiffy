import MainHeader from "@/components/Header/MainHeader";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}
