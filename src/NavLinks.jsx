import React from 'react'
import sublinks from './data'
import { useGlobalContext } from '../context/globalcontext'

const NavLinks = () => {
  const {setPageId} = useGlobalContext();
  
  return (
    <div className='nav-links'>
      {
        sublinks.map((item)=>{
            const {page,pageId} = item;
            return <button onMouseEnter={()=>{setPageId(pageId)}} className='nav-link' key={pageId}>{page}</button>
        })
      }
    </div>
  )
}

export default NavLinks
