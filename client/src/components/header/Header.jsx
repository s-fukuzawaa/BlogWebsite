import "./header.css"

export default function Header() {
    return(
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Movies & Shows</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" src="https://wallpapercave.com/wp/wp3208337.jpg"  alt=""/>
        </div>
    )
}