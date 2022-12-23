import "./singlePost.css"

export default function SinglePost(){
    return(
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://i.pinimg.com/564x/0b/ec/0f/0bec0fe6c4a8d05a40766cca6cc9cfc8.jpg" alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">
                    Single Post imimoimoi moimoimoim omoim 
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-regular fa-trash-can"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Airei</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Repellat accusantium, pariatur non cupiditate, 
                    autem dolores earum exercitationem error eaque unde quae 
                    sunt eveniet aspernatur iste excepturi tenetur sint qui magni?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Repellat accusantium, pariatur non cupiditate, 
                    autem dolores earum exercitationem error eaque unde quae 
                    sunt eveniet aspernatur iste excepturi tenetur sint qui magni?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Repellat accusantium, pariatur non cupiditate, 
                    autem dolores earum exercitationem error eaque unde quae 
                    sunt eveniet aspernatur iste excepturi tenetur sint qui magni?
                </p>
            </div>
            
        </div>
    )
}