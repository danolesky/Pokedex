import React, { useState, useEffect } from "react";
import axios from "axios";
import { AppBar, ListItemAvatar, Avatar, Grid } from "@material-ui/core";
import TouchRipple from "@material-ui/core/ButtonBase";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import { Close } from "@material-ui/icons";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import PokeImageCard from "./PokeImageCard";
import PokeBase from "./cards/PokeBase";

const drawerWidth = 350;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#D32F2F",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    width: "100%",
  },
  sprite: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
}));

const ResponsiveDrawer = (props) => {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pokemonList, setPokemonList] = useState({});
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    axios.get("./assets/data/base.json").then((response) => {
      const { data } = response;
      const { pokedex } = data;
      const pokemonList = {};
      pokedex.forEach((pokemon, index) => {
        pokemonList[index + 1] = {
          id: index + 1,
          name: pokemon.name,
          url: pokemon.url,
          sprite: pokemon.sprite,
          art: pokemon.art,
          types: pokemon.types,
          baseStats: pokemon.base_stats,
        };
      });
      setPokemonList(pokemonList);
    });
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClick = (pokemon) => {
    setPokemon(pokemon);
    setMobileOpen(false);
  };

  const getPokemonCard = (pokemonId) => {
    const { id, name, sprite, types } = pokemonList[pokemonId];
    return (
      <>
        <TouchRipple style={{ width: "100%" }}>
          <ListItem
            onClick={() => {
              handleClick(pokemonList[pokemonId]);
            }}
          >
            <ListItemAvatar>
              <Avatar
                alt={`pokémon sprite for ${name}`}
                src={sprite}
                className={classes.sprite}
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography
                  variant="h6"
                  style={{ textTransform: "capitalize" }}
                >
                  {name}
                </Typography>
              }
              secondary={types.map((type) => {
                return (
                  <Typography
                    style={{
                      display: "inline-block",
                      paddingRight: "0.2rem",
                      textTransform: "capitalize",
                    }}
                    variant="body2"
                  >
                    {type}
                  </Typography>
                );
              })}
            />
            <Typography
              style={{ color: "lightgrey", paddingRight: "1rem" }}
              variant="h4"
            >
              {id}
            </Typography>
          </ListItem>
        </TouchRipple>
        <Divider variant="middle" />
      </>
    );
  };

  const drawer = (
    <>
      <div className={classes.toolbar} />
      <List>
        {Object.keys(pokemonList).map((pokemonId) => getPokemonCard(pokemonId))}
      </List>
    </>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          {mobileOpen ? (
            <IconButton
              color="inherit"
              aria-label="close drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <Close />
            </IconButton>
          ) : (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h5" noWrap>
            Pokédex
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden mdUp implementation="css">
          <Drawer
            container={container}
            variant="persistent"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {pokemon ? (
          <Grid justify="center" container spacing={3}>
            <Grid item xs={12} sm={12} md={11} lg={6} xl={4}>
              <PokeImageCard pokemon={pokemon} />
            </Grid>
            <Grid item xs={12} sm={12} md={11} lg={6} xl={4}>
              <PokeBase pokemon={pokemon} />
            </Grid>
          </Grid>
        ) : (
          <Typography>Select a Pokémans</Typography>
        )}
      </main>
    </div>
  );
};

export default ResponsiveDrawer;
