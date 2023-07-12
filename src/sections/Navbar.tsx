import React, { useEffect } from "react";
import avatarImage from "../assets/icon.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navigationRoutes = [
    {
      name: "About",
      route: "/about",
    },
    {
      name: "Code",
      route: "/code",
    },
    {
      name: "Projects",
      route: "/projects",
    },
  ];

  useEffect(() => {
    const index = navigationRoutes.findIndex(({ route }) =>
      location.pathname.includes(route)
    );
    ul(index);
  }, [location.pathname, navigationRoutes]);

  function ul(index: number) {
    const underlines = document.querySelectorAll<HTMLElement>(".underline");
    for (let i = 0; i < underlines.length; i++) {
      underlines[i].style.transform = "translate3d(" + index * 100 + "%,0,0)";
    }
  }

  return (
    <nav>
      <div className="block">
        <img src={avatarImage} alt="profile image" />
      </div>
      <div className="data">
        <ul>
          <div className="underline"></div>
          <div className="underline"></div>
          <div className="underline"></div>

          {navigationRoutes.map(({ name, route }, index) => {
            return (
              <Link to={route} key={index}>
                <li>{name}</li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="block">
        <GiHamburgerMenu />
      </div>
    </nav>
  );
}

export default Navbar;
