import React, { useState } from 'react'

import TunesList from '../components/tunes/TunesList'
import TunesSearchForm from '../components/tunes/TunesSearchForm'
import axios from 'axios'

const Tunes = () => {
    const [query] = useState('')
    const [songs, setSongs] = useState([])
    const handleSearch =(query: string) => {
        axios.get(
            `https://itunes.apple.com/seach
            ?term=${encodeURI(query)}
            &entity=musicTrack
            &limit=5`
        ).then(response => {
            console.log(response)
        })
    }

    const handleSearchFormSubmit = (data: string) => {
        setSongs([])
    }
    return (
        <div>
        <article className='tunes'>
            <h1>Tunes</h1>
            <TunesSearchForm 
            onSearch={handleSearch}/>
            <TunesList songs={songs}/>
        </article>

        </div>
    )
}

export default Tunes