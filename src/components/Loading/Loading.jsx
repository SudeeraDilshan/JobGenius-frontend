import React from 'react'
import './Loading.css'
import ReactLoading from 'react-loading';

const Loading = () => {
  return (
    <div className='loading'>
                 <ReactLoading
                type="spinningBubbles"
                color="#0000FF"
                height={100}
                width={50}
            />
    </div>
  )
}

export default Loading