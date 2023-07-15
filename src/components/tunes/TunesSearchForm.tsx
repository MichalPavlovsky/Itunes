import React, { useState } from 'react'

type Props = {
  onSearchFormSubmit: (data: string) => void
}

const TunesSearchForm: React.FC<Props> = (props) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
      
        props.onSearchFormSubmit(query)
    }
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }
    const [query, setQuery] = useState('')
    
  return (
      <div>
        <form onSubmit={handleSubmit}>
          <input 
          type='text' 
          value={query} 
          onChange={handleInput}
          className='search' 
          />
      </form>
      </div>
  )
}

export default TunesSearchForm