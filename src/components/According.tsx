import React from 'react'

type Props = {
    items: { title: string, content: string }[]
}

const According = ({ items }: Props) => {
    return <h1>{items.length}</h1>
}

export default According