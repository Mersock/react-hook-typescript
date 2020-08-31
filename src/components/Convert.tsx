import React, { useEffect, useState } from 'react'
import axios from 'axios'

type Props = {
    language: {
        label: string,
        value: string
    },
    text: string
}

function Convert({ language, text }: Props) {
    const [translated, setTranslated] = useState<string>('')
    const [debouncedText, setDebouncedText] = useState<string>('')

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text)
        }, 1000);

        return () => {
            clearTimeout(timerId)
        }
    }, [text])

    useEffect(() => {
        const fetchTranslate = async () => {
            const { data } = await axios.post(`${process.env.REACT_APP_GOOGLE_API_ENDPOINT}`, {}, {
                params: {
                    q: debouncedText,
                    target: language.value,
                    key: `${process.env.REACT_APP_GOOGLE_API_KEY}`
                }
            })
            setTranslated(data.data.translations[0].translatedText)
        }
        fetchTranslate()
    }, [language, debouncedText])

    return (
        <div>
            <h1 className="ui header">{translated}</h1>
        </div>
    )
}

export default Convert
