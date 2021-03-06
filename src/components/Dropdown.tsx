import React, { useState, useEffect, useRef } from 'react'

type Props = {
    label: string
    options: { label: string, value: string }[],
    selected: { label: string, value: string }
    onSelectedChange: React.Dispatch<React.SetStateAction<{
        label: string;
        value: string;
    }>>
}

function Dropdown({ label, options, selected, onSelectedChange }: Props) {
    const [open, setopen] = useState<boolean>(false)
    const ref = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const onBodyClick = (event: Event) => {
            if (ref.current?.contains(event.target as Node)) {
                return
            }
            setopen(false)
        }

        document.body.addEventListener('click', onBodyClick)

        return () => {
            document.body.removeEventListener('click', onBodyClick)
        }
    }, [])

    const renderOptions = options.map(option => {
        if (option.value === selected.value) {
            return null
        }
        return (
            <div
                key={option.value}
                className="item"
                onClick={() => onSelectedChange(option)}
            >
                {option.label}
            </div>
        )
    })

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">
                    {label}
                </label>
                <div
                    onClick={() => setopen(!open)}
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">
                        {selected.label}
                    </div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown
