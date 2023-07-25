import React from "react";
import withAuth from "./Auth";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quo
        molestiae culpa ducimus! Dicta sint, facere repellat placeat, officiis
        dignissimos nobis, adipisci voluptatum consequuntur labore numquam.
        Architecto sequi odit dolorem placeat voluptatum possimus velit repellat
        quasi illo, obcaecati exercitationem quis nisi sint, libero doloribus
        ipsum porro eveniet iusto, voluptatibus beatae ratione consequuntur
        officia! Recusandae ea officiis accusantium ut autem illum repudiandae,
        tempore placeat id rerum in quasi tenetur ratione doloremque cupiditate
        dicta dolorum iure laudantium voluptatem! Numquam saepe soluta sapiente
        consequuntur quas cumque, perferendis necessitatibus incidunt adipisci
        ad asperiores quod sit pariatur ratione consequatur repudiandae modi
        nihil maiores id? Quod.
      </p>
    </div>
  );
}

export default withAuth(Home);
