import React from 'react'
import { useGlobalContext } from '../context/globalcontext'
import sublinks from './data';

const Submenu = () => {
    const {pageId,setPageId} = useGlobalContext();
    const currentPage = sublinks.find((item)=>{return item.pageId==pageId});
    console.log(currentPage);
  return (
    <div onMouseLeave={(e)=>{if(!e.target.classList.contains("nav-link")) {setPageId(null)}}} className={currentPage?"show-submenu submenu":"submenu"}>
      <h5>{currentPage?.page}</h5>
      <div className="submenu-links" style={{gridTemplateColumns: currentPage?.links?.length >3 ? "1fr 1fr": "1fr"}} >
        {currentPage?.links?.map((link)=>{
            const {id,label,icon,url} = link;
            return <a href={url} key={id}>{icon}{label}</a>
        })}
      </div>
    </div>
  )
}

export default Submenu
