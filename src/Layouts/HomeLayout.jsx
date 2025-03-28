import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import LeftNavbar from "../Components/LayoutComponent/LeftNavbar";
import RightNavbar from "../Components/LayoutComponent/RightNavbar";
import NavBar from "../Components/NavBar";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav>
        <section className="w-11/12 mx-auto py-3">
          <NavBar></NavBar>
        </section>
      </nav>

      <main className="w-11/12 mx-auto pt-3 grid grid-cols-12 gap-3">
        <aside className="left col-span-3">
          <LeftNavbar></LeftNavbar>
        </aside>
        <section className="main col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="right col-span-3">
          <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
