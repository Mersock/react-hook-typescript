import React from 'react'
import According from './components/According'

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

export default () => {
    return (
        <div>
            <According items={items} />
        </div>
    )
};