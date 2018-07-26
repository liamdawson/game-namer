import React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import GameListItem from '../src/GameListItem';

function demoTable(elements: any) {
    return (
        <table className="table table-striped">
            <thead>
            <th/>
            <th>Name</th>
            </thead>
            <tbody>{elements}</tbody>
        </table>
    )
}

const games = [{name: "7 Wonders", id: 68448},
  {name: "Alchemists", id: 161970},
  {name: "Alhambra", id: 6249},
  {name: "Android: Netrunner", id: 124742},
  {name: "Balderdash", id: 163},
  {name: "Bohnanza", id: 11},
  {name: "Carcassonne", id: 822},
  {name: "The Castles of Burgundy", id: 84876},
  {name: "Cat Tower", id: 150485},
  {name: "Caverna: The Cave Farmers", id: 102794},
  {name: "Codenames", id: 178900},
  {name: "Concordia", id: 124361},
  {name: "Coup: Rebellion G54", id: 148943},
  {name: "Coup: The Resistance Universe", id: 131357},
  {name: "Dead of Winter: A Crossroads Game", id: 150376},
  {name: "Dixit", id: 39856},
  {name: "Dracula's Feast", id: 159575},
  {name: "Eldritch Horror", id: 146021},
  {name: "Exploding Kittens", id: 172225},
  {name: "Exploding Kittens", id: 172225},
  {name: "Exploding Kittens: NSFW Deck", id: 172242},
  {name: "Five Tribes: The Djinns of Naqala", id: 157354},
  {name: "Forbidden Desert", id: 136063},
  {name: "Hanabi Deluxe", id: 98778},
  {name: "Haru Ichiban", id: 165662},
  {name: "Hive", id: 2655},
  {name: "Jaipur", id: 54043},
  {name: "The Lady and the Tiger", id: 222643},
  {name: "Love Letter Premium", id: 196326},
  {name: "Love Letter: The Hobbit â€“ The Battle of the Five Armies", id: 169611},
  {name: "Mascarade", id: 139030},
  {name: "New Angeles", id: 205716},
  {name: "One Night Ultimate Werewolf", id: 147949},
  {name: "Patchwork", id: 163412},
  {name: "Pirate Fluxx", id: 73538},
  {name: "Power Grid", id: 2651},
  {name: "Punderdome: A Card Game for Pun Lovers", id: 202771},
  {name: "The Resistance: Avalon", id: 128882},
  {name: "San Juan", id: 8217},
  {name: "Shadows over Camelot", id: 15062},
  {name: "Sheriff of Nottingham", id: 157969},
  {name: "Sid Meier's Civilization: The Board Game", id: 77130},
  {name: "Small World Underground", id: 97786},
  {name: "Smash Up", id: 122522},
  {name: "Snake Oil", id: 113289},
  {name: "Splendor", id: 148228},
  {name: "Spyfall", id: 166384},
  {name: "Spyfall 2", id: 193308},
  {name: "Spyrium", id: 137269},
  {name: "Sushi Go Party!", id: 192291},
  {name: "Sushi Go!", id: 133473},
  {name: "Taboo", id: 1111},
  {name: "Takenoko", id: 70919},
  {name: "Terraforming Mars", id: 167791},
  {name: "Through the Ages: A New Story of Civilization", id: 182028},
  {name: "Ticket to Ride: Europe", id: 14996},
  {name: "Tsuro", id: 16992},
  {name: "Tzolk'in: The Mayan Calendar", id: 126163},
  {name: "Unfair", id: 179172}];

storiesOf('Game List', module)
    .add('Long', () => demoTable(games.map(game => <GameListItem id={game.id} selected={false} name={game.name} onSelectionChanged={action('selection-changed')}/>)));
