import { useEffect, useState } from 'react'

const Route = ({ path, children }: { path: string, children: JSX.Element }) => {
    const [currentPath, setcurrentPath] = useState(window.location.pathname)

    useEffect(() => {
        const onLocationChange = () => {
            setcurrentPath(window.location.pathname)
        }
        window.addEventListener('popstate', onLocationChange)
        return () => {
            window.removeEventListener('popstate', onLocationChange)
        }
    }, [])

    return currentPath === path ? children : null;
}

export default Route
