import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Search = () => {
    const [term, setTerm] = useState<string>('Programing')
    const [debouncedTerm, setDebouncedTerm] = useState(term)
    const [results, setResults] = useState<Array<any>>([])


    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedTerm(term)
        }, 1000);

        return () => {
            clearTimeout(timeoutId)
        }

    }, [term])

    useEffect(() => {
        const fetchSearch = async () => {
            const { data } = await axios.get(`${process.env.REACT_APP_WIKI_ENDPOINT}`, {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm
                }
            })
            console.log(data);
            setResults(data.query.search)
        }
        if (debouncedTerm) {
            fetchSearch()
        }
    }, [debouncedTerm])

    const renderResults: JSX.Element[] = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a href={`${process.env.REACT_APP_WIKI_CUR}?curid=${result.pageid}`}
                        className="ui button"
                    >Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                        className="input"
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderResults}
            </div>
        </div>
    )
}

export default Search
