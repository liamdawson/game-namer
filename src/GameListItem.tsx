import * as React  from 'react';
import './GameListItem.css';

interface IProps {
    /** ID for game */
    id: number;
    /**
     * Whether to render item as selected.
     **/
    selected?: boolean;
    /** Name of item in listing. */
    name: string;
    /** Callback when selection status is changed. */
    onSelectionChanged?: (id: number, newSelection: boolean) => void;
}

export class GameListItem extends React.Component<IProps> {
    public render() {
        const props = this.props;

        function callbackOnSelectionChanged() {
            // naive logic, assumes parent will update selected - accurate?
            props.onSelectionChanged && props.onSelectionChanged(props.id, !props.selected);
        }

        return (
            <tr onClick={callbackOnSelectionChanged} className="game-list-item">
                <td>
                    <label>
                        <input type="checkbox" checked={this.props.selected} onChange={callbackOnSelectionChanged}/>
                    </label>
                </td>
                <td>
                    {this.props.name}
                </td>
            </tr>
        );
    }
}

export default GameListItem;
