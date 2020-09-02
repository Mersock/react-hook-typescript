import React, { useState } from 'react'
import Search from './components/Search'
import Dropdown from './components/Dropdown'
import According from './components/According'
import Translate from './components/Translate';
import Route from './components/Route'
import Header from './components/Header'

const items: { title: string, content: string }[] = [
    {
        title: 'What is React',
        content: 'React is front end javascript framework'
    },
    {
        title: 'Why use React',
        content: 'React is a favarite JS library among engineers'
    },
    {
        title: 'How do you use React',
        content: 'you use React by creating components'
    }
]

const options: { label: string, value: string }[] = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'The Color Blue',
        value: 'blue'
    }
]

export default () => {
    const [selected, setselected] = useState<{ label: string, value: string }>(options[0])
    return (
        <div>
            <Header />
            <Route path="/">
                <According items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
            <Route path="/dropdown">
                <Dropdown
                    onSelectedChange={setselected}
                    selected={selected}
                    label="Select Language"
                    options={options} />
            </Route>
        </div>
    )
};