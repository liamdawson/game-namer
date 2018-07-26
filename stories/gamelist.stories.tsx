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

storiesOf('Game List', module)
    .add('Basic item', () => demoTable(<GameListItem id={5} selected={false} name="Carcassonne" onSelectionChanged={action('selection-changed')}/>));
