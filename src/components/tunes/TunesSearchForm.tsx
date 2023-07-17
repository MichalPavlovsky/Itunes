import React, { useRef} from 'react'
import { debounce } from 'lodash-es'

type Props = {
  onSearch: (query: string) => void
}

const TunesSearchForm: React.FC<Props> = (props) => {
  const searchInput = useRef<HTMLInputElement>(null)
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        searchForMusic()
      
    }
    const searchForMusic = () => {
      let searchString = searchInput.current?.value
      if (searchString) props.onSearch(searchString)    
    }

    const handleInput = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
      searchForMusic()
    }, 500)
    
  return (
      <div>
        <form onSubmit={handleSubmit}>
          <input 
          autoFocus
          ref={searchInput}
          type='text' 
          onChange={handleInput}
          className='search' 
          />
      </form>
      </div>
  )
}

export default TunesSearchForm