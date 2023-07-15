import React, {  useState } from 'react'


type Props = {
    songs: {
        id: number;
        artist: string;
        name: string
    }[]
}

const TunesList: React.FC<Props> = (props) => {

    const{songs} = props
    
  return (
      <ul>
          {songs.map(song => (
              <li key={song.id}>{song.artist + ' - ' + song.name}</li>
          ))}

      </ul>
  )
}

export default TunesList