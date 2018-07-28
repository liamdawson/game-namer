import React from 'react';
import GameListItem from "./GameListItem";
import GameNameFilter from "./GameNameFilter";
import {Game} from "../types";

type Props = {
  games: Game[]
};

type GameSelections = { [id: number]: boolean };

const initialState = {
  selected: {} as GameSelections,
  filter: ''
};

type State = Readonly<typeof initialState>;

export class GameList extends React.Component<Props, State> {
  readonly state: State = initialState;

  private readonly onFilterChanged = (filter: string) => this.setState({filter: filter});

  render() {
    return (<table className="table table-striped">
      <thead>
      <th colSpan={2}>
        <div className="form-horizontal">
          <div className="form-group">
            <label htmlFor="game-name-filter" className="col-form-label-sm mr-1">Name</label>
            <GameNameFilter onFilterChanged={this.onFilterChanged}/>
          </div>
        </div>
      </th>
      </thead>
      <tbody>
      {this.filteredGames.map(game =>
        <GameListItem name={game.name} id={game.id} key={game.id} selected={this.state.selected[game.id]}
                      onSelectionChanged={this.updateSelection}/>)}
      </tbody>
    </table>)
  }

  private get filteredGames(): Game[] {
    return this.props.games.filter(game =>
      game.name.toLowerCase().indexOf(this.state.filter.toLowerCase()) !== -1);
  }

  private updateSelection = (id: number, selected: boolean) => this.setState(updateGameSelectedState(id, selected));
}

export const updateGameSelectedState = (id: number, selected: boolean) => (prevState: State) => ({
  selected: {...prevState.selected, [id]: selected}
});

export default GameList;
