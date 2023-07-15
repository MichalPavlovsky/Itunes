import React, { useState } from 'react'

import TunesList from '../components/tunes/TunesList'
import TunesSearchForm from '../components/tunes/TunesSearchForm'


const Tunes = () => {
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
    
    return (
        <div>
        <article className='tunes'>
            <h1>Tunes</h1>
            <TunesSearchForm onSearchFormSubmit={handleSearchFormSubmit}/>
            <TunesList songs={songs}/>
        </article>

        </div>
    )
}

export default Tunes