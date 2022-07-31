import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const allLinks = links.map((link) => {
    return <a key={link} href={"#"+link}>{link}</a>
  });
  return(
    <nav>
      {allLinks}
    </nav>
  );
}

export default NavBar;