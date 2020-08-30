import React, { useState } from 'react'
// import Search from './components/Search'
import Dropdown from './components/Dropdown'

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
    const [showDropdown, setShowDropdown] = useState<boolean>(true)

    return (
        <div>
            <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
            {showDropdown ? (
                <Dropdown
                    onSelectedChange={setselected}
                    selected={selected}
                    options={options}
                />
            ) : null
            }
        </div>
    )
};