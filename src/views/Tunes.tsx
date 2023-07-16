import React, { useState } from 'react'

import TunesList from '../components/tunes/TunesList'
import TunesSearchForm from '../components/tunes/TunesSearchForm'


const Tunes = () => {
    const [query, setQuery] = useState('')
    const [songs, setSongs] = useState([
        { id: 1, artist: 'Great Artist', name: 'Great Song' },
        {
            id: 2,
            artist: 'Samo',
            name: 'Majky'
        }
    ])

    const handleSearchFormSubmit = (data: string) => {
        const newSong = {
            id: Math.max(...songs.map(s => s.id)) + 1,
            artist: data,
            name: data
        }
        setSongs([...songs, newSong])
    }
    const handleInputChange = (data: string) => {
        setQuery(data)
    }
    return (
        <div>
        <article className='tunes'>
            <h1>Tunes</h1>
            <TunesSearchForm 
            onInputChange={handleInputChange}
            query={query}
            onSearchFormSubmit={handleSearchFormSubmit}/>
            <TunesList songs={songs}/>
        </article>

        </div>
    )
}

export default Tunes