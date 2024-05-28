import React from 'react'

function showImage({item,url}) {
    return (
        <div>
            <img src={`http://localhost:5000/${url}/photo/${item._id}`} alt={"name"} />
        </div>
    )
}

export default showImage
