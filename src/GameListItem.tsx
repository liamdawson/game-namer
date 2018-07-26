import * as React  from 'react';
import './GameListItem.css';

interface IProps {
    /**
     * Whether to render item as selected.
     *
     * @default false
     **/
    selected: boolean;
    /** Name of item in listing. */
    name: string;
}

export class GameListItem extends React.Component<IProps> {
    public render() {
        return (
            <tr>
                <td>
                    <label>
                        <input type="checkbox" checked={this.props.selected}/>
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
