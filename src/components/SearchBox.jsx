import React, { useState } from 'react'

function SearchBox(props) {
    const { value, onChange } = props
    
  return (
    <>
        <div className="search-box">
            <input 
                type="text"
                className='form-control w-100'    
                placeholder='search...'
                value={value}
                onChange={(e) => {onChange(e.target.value)}}
            />
        </div>
    </>
  )
}

export default SearchBox