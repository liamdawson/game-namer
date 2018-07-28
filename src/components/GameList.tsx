import * as React from 'react';
import GameListItem from "./GameListItem";
import {Game} from "../types";
import Octicon, {Search} from "@githubprimer/octicons-react";

type Props = {
  games: Game[]
};

type GameSelections = { [id: number]: boolean };

const initialState = {
  selected: {} as GameSelections
};

type State = Readonly<typeof initialState>;

export class GameList extends React.Component<Props, State> {
  readonly state: State = initialState;

  render() {
    return (<table className="table table-striped">
      <thead>
      <th colSpan={2}>
        <div className="form-horizontal">
            <div className="input-group input-group-sm">
              <label htmlFor="game-name-filter" className="col-form-label-sm mr-1">Name&nbsp;</label>
              <div className="input-group-prepend">
            <span className="input-group-text">
              <Octicon icon={Search}/>
            </span>
              </div>
              <input id="game-name-filter" type="text" className="form-control form-control-sm"
                     placeholder="Filter games by name"/>
            </div>
        </div>
      </th>
      </thead>
      <tbody>
      {this.props.games.map(game => <GameListItem name={game.name} id={game.id} key={game.id}
                                                  selected={this.state.selected[game.id]}
                                                  onSelectionChanged={this.updateSelection}/>)}
      </tbody>
    </table>)
  }

  private updateSelection = (id: number, selected: boolean) => this.setState(updateGameSelectedState(id, selected));
}

export const updateGameSelectedState = (id: number, selected: boolean) => (prevState: State) => ({
  ...prevState,
  selected: {...prevState.selected, [id]: selected}
});

export default GameList;
