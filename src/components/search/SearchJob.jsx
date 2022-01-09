import React from 'react'

export default function SearchJob({search,setSearch}) {
    return (
        <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
            <input 
                type="text"
                id='search'
                role='searchbox'
                placeholder='search'
                value={search}
                onChange={(e) => setSearch(e.target.value)} 
            />
        </form>
    )
}
