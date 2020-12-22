import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Link,
} from "@material-ui/core";

const HomeDesc = (props) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" align="center" style={{ padding: ".5rem" }}>
          Thanks for visiting my Pokédex!
        </Typography>
        <Divider variant="middle" />
        <Typography
          variant="body2"
          align="center"
          style={{ paddingTop: ".5rem" }}
        >
          This was built using React and Material UI for learning purposes and
          is not very useful otherwise.
        </Typography>
        <Typography
          variant="body2"
          align="center"
          style={{ paddingTop: ".2rem" }}
        >
          A lot of inspiration for this came from Corey Ogburn's Pokédex found
          here:
        </Typography>
        <Typography
          variant="body2"
          align="center"
          style={{ paddingTop: ".2rem" }}
        >
          <Link href="https://thepoke.de/x/" target="_blank">
            thepoke.de/x/
          </Link>
        </Typography>
        <Typography
          variant="body2"
          align="center"
          style={{ paddingTop: ".2rem" }}
        >
          I strongly recommend utilizing his instead if you're looking for
          actual useful information.
        </Typography>
        <Typography
          variant="body2"
          align="center"
          style={{ paddingTop: ".2rem" }}
        >
          Also a special thanks to the Poké API for providing all the Pokémon
          data I'd ever need:
        </Typography>
        <Typography
          variant="body2"
          align="center"
          style={{ paddingTop: ".2rem", paddingBottom: ".5rem" }}
        >
          <Link href="https://pokeapi.co/" target="_blank">
            pokeapi.co
          </Link>
        </Typography>
        <Divider variant="middle" />
        <Typography
          variant="body2"
          align="center"
          style={{ paddingTop: ".5rem" }}
        >
          Pokémon and Pokémon character names are trademarks of Nintendo.
        </Typography>
        <Typography
          variant="body2"
          align="center"
          style={{ paddingTop: ".2rem" }}
        >
          No copyright or trademark infringement is intended in using Pokémon
          content.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HomeDesc;
