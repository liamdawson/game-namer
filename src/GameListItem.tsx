import * as React from 'react';
import Octicon, {Globe} from '@github/octicons-react';

interface IProps {
  /** ID for game */
  id: number;
  /** Whether to render item as selected. */
  selected?: boolean;
  /** Name of item in listing. */
  name: string;
  /** Callback when selection status is changed. */
  onSelectionChanged?: (id: number, newStatus: boolean) => void;
}

export class GameListItem extends React.Component<IProps> {
  public render() {
    const props = this.props;

    function callbackForSelectionChanged(id: number): React.ChangeEventHandler<HTMLInputElement> {
      // naive logic, assumes parent will update selected - accurate?
      return (event) => props.onSelectionChanged && props.onSelectionChanged(id, event.currentTarget.checked);
    }

    return (
      <tr>
        <td>
          <div className="form-check form-check-inline">
            <input type="checkbox" className="form-check-input position-static" checked={this.props.selected}
                   onChange={callbackForSelectionChanged(this.props.id)} id={"game-list-item-" + this.props.id}/>
            <label className="form-check-label" htmlFor={"game-list-item-" + this.props.id}>
              {this.props.name}
            </label>
          </div>
        </td>
        <td>
          <a href={`https://boardgamegeek.com/boardgame/${this.props.id}/`} target="_blank"
             className="btn btn-sm btn-info" title="View on BoardGameGeek" aria-label="View on BoardGameGeek">
            <Octicon icon={Globe}/>
          </a>
        </td>
      </tr>
    );
  }
}

export default GameListItem;
