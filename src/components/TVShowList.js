import React from "react";
import { Grid } from "semantic-ui-react";
import TVShow from "./TVShow";

function TVShowList({ shows, selectShow, searchTerm }) {
  //console.log(!!searchTerm)

  function mapAllShows() {
    if (!!searchTerm) {
      return shows.map((s) => {
        if (s.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          //console.log(s.name)
          return <TVShow show={s} key={s.id} selectShow={selectShow} />;
        } return null
      });
    } else {
      return shows.map((s) => (
        <TVShow show={s} key={s.id} selectShow={selectShow} />
      ));
    }
  }

  return (
    <div className="TVShowList">
      <Grid>{mapAllShows()}</Grid>
    </div>
  );
}

export default TVShowList;
