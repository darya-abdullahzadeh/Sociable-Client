import React from 'react'
import "./Post.css"
import Footer from './Footer/Footer'

function Post({post}) {
    return (
        <div className='d-flex gap-2' key={post.username}>
            {/* Profile Pic */}
            <img src={post.profilePicture} style={{width: '25px', height: '25px'}}/>
            {/* Content */}
            <div className='d-flex flex-column'>
                <div className='d-flex gap-2'>
                    <div>{post.username}</div>
                    <div>{post.displayName}</div>
                </div>
                <div>
                    {post.content}
                </div>
                {/* Footer */}
                <Footer />
            </div>
        </div>
    )
}

export default Post