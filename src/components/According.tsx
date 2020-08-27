import React, { useState } from 'react'

type Props = {
    items: { title: string, content: string }[]
}

const According = ({ items }: Props) => {
    const [activeIndex, setactiveIndex] = useState<null | number>(null)

    const onTitileClick = (index: number): void => {
        setactiveIndex(index)
    }

    const renderedItems: JSX.Element[] = items.map((item: { title: string, content: string }, index: number) => {
        const active: string = index === activeIndex ? 'active' : ''

        return (
            <React.Fragment key={item.title}>
                <div
                    className={`title ${active}`}
                    onClick={() => onTitileClick(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p >
                        {item.content}
                    </p>
                </div>
            </React.Fragment >
        )
    })

    return <div className="ui styled accordion">
        {renderedItems}
    </div>
}

export default According