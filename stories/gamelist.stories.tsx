import React from 'react';

import {storiesOf} from '@storybook/react';

import GameListItem from '../src/GameListItem';

function demoTable(elements: any) {
    return (
        <table className="table table-dark table-striped">
            <thead>
            <th/>
            <th>Name</th>
            </thead>
            <tbody>{elements}</tbody>
        </table>
    )
}

storiesOf('Game List', module)
    .add('Basic item', () => demoTable(<GameListItem selected={false} name="Carcassonne"/>));
