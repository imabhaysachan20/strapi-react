import { useGlobalContext } from "../context/globalcontext";
import sublinks from "./data";
import { FaTimes } from "react-icons/fa";


const Sidebar = () => {
    let {isSidebarOpen,openSidebar,closeSidebar} = useGlobalContext()
  return (
    <aside className={isSidebarOpen?"sidebar show-sidebar":"sidebar"}>
        <div className="sidebar-container">
            <button onClick={closeSidebar} className="close-btn">
                <FaTimes/>
            </button>
        
        <div className="sidebar-links">
            {sublinks.map((item)=>{
                const {links,page,pageId}  = item;
                return <article key = {pageId}>
                    <h4>{page}</h4>
                    <div className="sidebar-sublinks">
                    {links.map((link)=>{
                         const {id,label,icon,url} = link;
                         return <a key={id} href={url}>{icon}{label}</a>
                    })}
                    </div>
                </article>
            })}
            </div>
        </div>
        
    </aside>
  )
}

export default Sidebar
