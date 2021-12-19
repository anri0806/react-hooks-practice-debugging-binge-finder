import React from "react";

function Episode({ eachEpisode }) {
  //let { myEpisode } = eachEpisode

  //console.log(eachEpisode.name)

  return (
    <div>
      Episode {eachEpisode.number} - {eachEpisode.name}
    </div>
  );
}

export default Episode;
