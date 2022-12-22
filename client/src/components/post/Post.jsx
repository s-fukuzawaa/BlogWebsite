import "./post.css"

export default function Post(){
    return(
        <div className="post">
            <img
                className="postImg"
                src="https://i.pinimg.com/564x/77/63/80/7763805725f024c87d7fb465c16220d3.jpg"
                alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum
                </span>
                <hr/>
                <span className="postDate"> 1 hour ago</span>
                <p className="postDesc">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Ad aut eum optio nihil, nobis id iure impedit laboriosam eveniet. Ipsa expedita dignissimos iusto vitae 
                    nobis et reprehenderit aperiam voluptatum eaque?

                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Ad aut eum optio nihil, nobis id iure impedit laboriosam eveniet. Ipsa expedita dignissimos iusto vitae 
                    nobis et reprehenderit aperiam voluptatum eaque?

                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Ad aut eum optio nihil, nobis id iure impedit laboriosam eveniet. Ipsa expedita dignissimos iusto vitae 
                    nobis et reprehenderit aperiam voluptatum eaque?
                </p>
            </div>
        </div>
    )
}