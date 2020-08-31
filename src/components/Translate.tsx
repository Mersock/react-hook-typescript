import React, { useState } from 'react'
import Dropdown from './Dropdown'
import Convert from './Convert'

const options: { label: string, value: string }[] = [
    {
        label: 'Afrikanns',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Thailand',
        value: 'th'
    }
]
const Translate = () => {
    const [language, setlanguage] = useState<{ label: string, value: string }>(options[0])
    const [text, settext] = useState<string>('')
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input value={text} onChange={e => settext(e.target.value)} />
                </div>
            </div>
            <Dropdown label={`Select a language`} selected={language} onSelectedChange={setlanguage} options={options} />
            <hr />
            <h3 className="ui header">Output</h3>
            <Convert text={text} language={language} />
        </div>
    )
}

export default Translate
