import React from 'react'

type Props = {
    className: string,
    href: string,
    children: any
}

function Link({ className, href, children }: Props) {
    const onClick = (event: any): void => {
        if (event.metaKey || event.ctrlKey) {
            return
        }

        event.preventDefault()
        window.history.pushState({}, '', href)
        const naveEvent = new PopStateEvent('popstate');
        window.dispatchEvent(naveEvent)

    }

    return <a onClick={(e) => onClick(e)} className={className} href={href}>{children}</a>
}

export default Link
