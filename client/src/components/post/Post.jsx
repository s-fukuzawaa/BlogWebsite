import "./post.css"
import { Link } from "react-router-dom"
export default function Post({post}){
    const PF = "http://localhost:5001/images/"
    return(
        <div className="post">
            {post.photo && (
                <img
                    className="postImg"
                    src={ PF + post.photo }//"https://i.pinimg.com/564x/77/63/80/7763805725f024c87d7fb465c16220d3.jpg"
                    alt=""
                />
            )}
            
            <div className="postInfo">
                <div className="postCats">
                    {
                        post.categories.map((c) => {
                            <span className="postCat">{c.name}</span>
                        })
                    }
                </div>
                <Link className="link" to={`/post/${post._id}`}>
                    <span className="postTitle">
                        {post.title}
                    </span>
                </Link>
                <hr/>
                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
                <p className="postDesc">
                    {post.desc}
                </p>
            </div>
        </div>
    )
}