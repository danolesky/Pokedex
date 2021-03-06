import React from "react";
import {
  Card,
  CardContent,
  List,
  ListSubheader,
  ListItem,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import TouchRipple from "@material-ui/core/ButtonBase";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  sprite: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
}));

const PokeEvo = (props) => {
  const classes = useStyles();

  const evolutionChain = (evolution_chain) => {
    let count = 0;

    const increaseCount = () => {
      count++;
    };

    return (
      <>
        {evolution_chain[0].id_to ? (
          <TouchRipple style={{ width: "100%" }}>
            <ListItem
              divider={true}
              style={{ justifyContent: "center", alignItems: "center" }}
              onClick={() => {
                props.handleClick(props.pokemon.evolution[0].id_from);
              }}
            >
              <ListItemAvatar>
                <Avatar
                  alt={`pokémon sprite for ${props.pokemon.evolution[0].name_from}`}
                  src={props.pokemon.evolution[0].sprite_from}
                  className={classes.sprite}
                />
              </ListItemAvatar>
            </ListItem>
          </TouchRipple>
        ) : (
          <TouchRipple style={{ width: "100%" }}>
            <ListItem
              style={{ justifyContent: "center", alignItems: "center" }}
              onClick={() => {
                props.handleClick(props.pokemon.evolution[0].id_from);
              }}
            >
              <ListItemAvatar>
                <Avatar
                  alt={`pokémon sprite for ${props.pokemon.evolution[0].name_from}`}
                  src={props.pokemon.evolution[0].sprite_from}
                  className={classes.sprite}
                />
              </ListItemAvatar>
            </ListItem>
          </TouchRipple>
        )}
        {evolution_chain[0].id_to
          ? evolution_chain.map((chain) => {
              return (
                <>
                  {count === evolution_chain.length - 1 ? (
                    <TouchRipple style={{ width: "100%" }}>
                      <ListItem
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        onClick={() => {
                          props.handleClick(chain.id_to);
                        }}
                      >
                        {increaseCount()}
                        <ListItemAvatar>
                          <Avatar
                            alt={`pokémon sprite for ${chain.name_from}`}
                            src={chain.sprite_from}
                            className={classes.sprite}
                          />
                        </ListItemAvatar>
                        <ArrowRightAltIcon
                          style={{ color: "rgba(0, 0, 0, 0.54)" }}
                        />
                        <ListItemAvatar>
                          <Avatar
                            alt={`pokémon sprite for ${chain.name_to}`}
                            src={chain.sprite_to}
                            className={classes.sprite}
                          />
                        </ListItemAvatar>
                      </ListItem>
                    </TouchRipple>
                  ) : (
                    <TouchRipple style={{ width: "100%" }}>
                      <ListItem
                        divider={true}
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        onClick={() => {
                          props.handleClick(chain.id_to);
                        }}
                      >
                        {increaseCount()}
                        <ListItemAvatar>
                          <Avatar
                            alt={`pokémon sprite for ${chain.name_from}`}
                            src={chain.sprite_from}
                            className={classes.sprite}
                          />
                        </ListItemAvatar>
                        <ArrowRightAltIcon
                          style={{ color: "rgba(0, 0, 0, 0.54)" }}
                        />
                        <ListItemAvatar>
                          <Avatar
                            alt={`pokémon sprite for ${chain.name_to}`}
                            src={chain.sprite_to}
                            className={classes.sprite}
                          />
                        </ListItemAvatar>
                      </ListItem>
                    </TouchRipple>
                  )}
                </>
              );
            })
          : null}
      </>
    );
  };

  return (
    <Card>
      <CardContent>
        <List subheader={<ListSubheader>Evolution Chain</ListSubheader>}>
          {evolutionChain(props.pokemon.evolution)}
        </List>
      </CardContent>
    </Card>
  );
};

export default PokeEvo;
