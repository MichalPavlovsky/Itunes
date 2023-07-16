import React, { useState } from 'react'

type Props = {
  onSearchFormSubmit: (data: string) => void
  query: string
  onInputChange: (data: string) => void
}

const TunesSearchForm: React.FC<Props> = (props) => {
    const {query} = props
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        props.onSearchFormSubmit(query)
    }
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onInputChange(e.target.value)
    }
    
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