import * as React from 'react';
import Octicon, {Search} from '@githubprimer/octicons-react';
import {ChangeEvent} from "react";
import lodash from 'lodash';

type Props = {
  onFilterChanged?: (newFilter: string) => void;
};

const initialState = {
  filter: ""
};

type State = Readonly<typeof initialState>;

export class GameNameFilter extends React.Component<Props, State> {
  readonly state: State = initialState;

  private readonly onFilterChangedDebounced = lodash.debounce(() =>
    this.props.onFilterChanged && this.props.onFilterChanged(this.state.filter), 300);

  private readonly filterChangedHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;

    this.setState({
      filter: val
    });

    this.onFilterChangedDebounced();
  };

  componentWillUnmount() {
    this.onFilterChangedDebounced.cancel();
  }

  render() {
    return (
      <div className="input-group input-group-sm">
        <div className="input-group-prepend">
                <span className="input-group-text">
                  <Octicon icon={Search}/>
                </span>
        </div>
        <input id="game-name-filter" type="text" className="form-control form-control-sm"
               placeholder="Filter games by name" value={this.state.filter} onChange={this.filterChangedHandler}/>
      </div>
    )
  }
}

export default GameNameFilter;
