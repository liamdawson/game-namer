import Octicon, {Globe} from "@githubprimer/octicons-react";
import React, {SFC} from 'react';

type Props = {
  /** ID for game */
  id: number;
  /** Whether to render item as selected. */
  selected?: boolean;
  /** Name of item in listing. */
  name: string;
  /** Callback when selection status is changed. */
  onSelectionChanged?: (id: number, newStatus: boolean) => void;
}

export const GameListItem: SFC<Props> = (props) => {
  function callbackForSelectionChanged(id: number): React.ChangeEventHandler<HTMLInputElement> {
    // naive logic, assumes parent will update selected - accurate?
    return (event) => props.onSelectionChanged && props.onSelectionChanged(id, event.currentTarget.checked);
  }

  return (
    <tr>
      <td>
        <div className="form-check form-check-inline">
          <label className="form-check-label">
            <input type="checkbox" className="form-check-input position-static" checked={props.selected}
                   onChange={callbackForSelectionChanged(props.id)}/>
            {props.name}
          </label>
        </div>
      </td>
      <td>
        <a href={`https://boardgamegeek.com/boardgame/${props.id}/`} target="_blank"
           className="btn btn-sm btn-info" title="View on BoardGameGeek" aria-label="View on BoardGameGeek">
          <Octicon icon={Globe}/>
        </a>
      </td>
    </tr>
  );
};

export default GameListItem;
