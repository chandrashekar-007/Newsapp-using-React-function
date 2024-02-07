import React from "react";
const  Newsitem = ({news}) => {
  const {title, description , urlToImage , author , publishedAt , url} = news;

    return (
      <div className="card p-1" >
          <div className="card-body">
            <img src={urlToImage === null ? "https://cdn.ndtv.com/common/images/ogndtv.png": urlToImage} style={{height: "200px",width: "100%"}} className="card-img-top m-auto my-3" alt="" />
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary"> By {author === null ? "Unknown":author} , published on  {new Date(publishedAt).toDateString()}</small></p>
            <a href={url} rel="noreferrer" target="_blank" className="btn" style={{backgroundColor :'#8757e6',color:'white'}}>
              Read More
            </a>
        </div>
      </div>
    );
  }

  export default Newsitem