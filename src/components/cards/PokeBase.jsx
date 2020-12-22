import React from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListSubheader,
  ListItemText,
  fontWeight,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  desc: {
    marginLeft: "1.3rem",
    marginRight: "1.3rem",
  },
});

const PokeBase = (props) => {
  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <List subheader={<ListSubheader>Base Stats</ListSubheader>}>
          <ListItem divider={true}>
            <ListItemText>
              <Typography>Base HP</Typography>
            </ListItemText>
            <ListItemText align="right">
              {props.pokemon.baseStats.base_hp}
            </ListItemText>
          </ListItem>
          <ListItem divider={true}>
            <ListItemText>Base ATK</ListItemText>
            <ListItemText align="right">
              {props.pokemon.baseStats.base_attack}
            </ListItemText>
          </ListItem>
          <ListItem divider={true}>
            <ListItemText>Base DEF</ListItemText>
            <ListItemText align="right">
              {props.pokemon.baseStats.base_defense}
            </ListItemText>
          </ListItem>
          <ListItem divider={true}>
            <ListItemText>Base SA</ListItemText>
            <ListItemText align="right">
              {props.pokemon.baseStats.base_sp_attack}
            </ListItemText>
          </ListItem>
          <ListItem divider={true}>
            <ListItemText>Base SD</ListItemText>
            <ListItemText align="right">
              {props.pokemon.baseStats.base_sp_defense}
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Base SPD</ListItemText>
            <ListItemText align="right">
              {props.pokemon.baseStats.base_speed}
            </ListItemText>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

export default PokeBase;
