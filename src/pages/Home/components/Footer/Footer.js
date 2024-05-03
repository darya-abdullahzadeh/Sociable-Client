import React from 'react'
import { BiRepost } from 'react-icons/bi'
import { FcLike } from 'react-icons/fc'
import { LuBookmark, LuHeart, LuMessageCircle, LuShare } from 'react-icons/lu'

function Footer() {
  return (
    <div className='d-flex justify-content-between'>
        <LuMessageCircle/>
        <BiRepost />
        <LuHeart/>
        <div className='d-flex justify-content-between gap-1'>
            <LuBookmark/>
            <LuShare/>
        </div>
    </div>
  )
}

export default Footer