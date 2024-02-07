import React, {  useContext, useEffect } from "react";
import Newsitem from "./Newsitem";
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
import { AppContext } from "./context/Context";

const News = ({category})=>  {
  const {articles ,loading , fetchMore , totalResults} = useContext(AppContext);

  useEffect(() => {
    window.scrollTo({top:0, scrollBehaviour:"smooth"})
  }, [])
  
  
  const upperCase = (string)=>{
  return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
      <>
        <InfiniteScroll
          dataLength={articles.length}
          next={()=>fetchMore()}
          hasMore={articles.length !== totalResults}
          loader={<h4><Spinner/></h4>}
          endMessage={<h3 className="text-center my-3">{`${articles.length} === ${totalResults}` ? "You are all setup - No more news to fetch":""}</h3>}
        >
          {loading && <Spinner/>}
          <h2 className="text-center " style={{marginTop:"100px"}}>
          <u>SK News - Top {upperCase(category)} Headlines</u>
          </h2>
          <div className="container mt-4">
            <div className="row-md-12">
              <div className="grids col-md-4 my-1" >
                {articles.map((news,index) => {
                  return (
                      <Newsitem key={index} news={{...news}} />
                      );
                })}
                </div>
            </div>
          </div>
          </InfiniteScroll>
      </>
    );
  }

export default News