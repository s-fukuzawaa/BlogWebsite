import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle"> ABOUT ME</span>
                <img
                    className="sidebarImg"
                    src="https://i.pinimg.com/564x/e9/fb/ca/e9fbca7bc852fc4e61d7f5be76d8bf57.jpg"
                    alt="" 
                />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptatum iusto at architecto, sapiente itaque maiores. Earum cumque quibusdam autem deleniti, non eligendi quisquam hic maiores provident assumenda, deserunt in!
                </p>
                
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        Life
                    </li>
                    <li className="sidebarListItem">
                        Music
                    </li>
                    <li className="sidebarListItem">
                        Style
                    </li>
                    <li className="sidebarListItem">
                        Sport
                    </li>
                    <li className="sidebarListItem">
                        Tech
                    </li>
                    <li className="sidebarListItem">
                        Cinema
                    </li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
                    <i className="sidebarIcon fa-brands fa-square-instagram"></i>
                </div>
                
            </div>
        </div>
    )
}