import React from 'react'

export default function SearchJob({searchitem,setSearchItem}) {
    return (
        <div>
            <input 
                id="outlined-search"
                placeholder="Search"
                type="search"
                margin="dense"
                size="small"
                variant="outlined"
                value={searchitem}
                onChange= {(e) => {setSearchItem(e.target.value) }}
            />
        </div>
    )
}
