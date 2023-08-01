import React, { useState,useEffect } from "react";
import Newsitem from "./Newsitem";
import Spinner from './Spinner';
import propTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
// document.title = `${upperCase(props.category)} News - SK News`

const News = (props)=>  {

  const [articles,setArticles] = useState([])
  const [loading,setLoading] = useState(true)
  const [page,setPage] = useState(1)
  const [totalResults,setTotalResults] = useState(0)



  const updateNews = async ()=>{
    props.setProgress(0);
    let url =
    `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=dafb8b47a90548c49056776de425cc1a&page=${page}&pageSize=${props.pgSize}`;
    
    setLoading(true)
    props.setProgress(20);
    let data = await fetch(url);
    props.setProgress(50);
    let parsedData = await data.json();
    // console.log(parsedData);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }

  // works same as ComponentDidMount in class
  useEffect(() => {
    updateNews(); 
    // eslint-disable-next-line   
  }, []);

 
  const upperCase = (string)=>{
  return  string.charAt(0).toUpperCase() + string.slice(1);
    
  }

 
  
 

  const fetchMore = async ()=>{
    let url =
    `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=dafb8b47a90548c49056776de425cc1a&page=${page+1}&pageSize=${props.pgSize}`;
    setPage(page+1)
    
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    setLoading(false)
  }


    // setInterval(() => {
    //   setState({ articles: state.articles.concat(parsedData.articles),
    //     results: parsedData.totalResults,
    //     page : state.page + 1,
    //     loading: false });
    //   }, 1500);
    //   }


// ........for buttons..........
  //   handleNext = async () => {
  //     updateNews();
  //     setState({
  //       page: state.page + 1,
        
  //     });
  //   };
    
    
  //   handlePrev = async () => {
  //     updateNews();
  //     setState({
  //       page: state.page - 1,
  //     });
  // }

  return (
      <>

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMore}
          hasMore={articles.length !== totalResults}
          loader={<h4><Spinner/></h4>}
          endMessage={<h3 className="text-center my-3">You are all setup - No more news to fetch</h3>}
        >
          <h2 className="text-center " style={{marginTop:"100px"}}>
          <u>SK News - Top {upperCase(props.category)} Headlines</u>
          </h2>
          {loading && <Spinner/>}

          <div className="container mt-4">

            <div className="row">
              {articles.map((element) => {
                return (
                  <div className="col-md-4 my-4">
                    <Newsitem
                      title={element.title}  description={element.description}  imgUrl={element.urlToImage == null? "https://cdn.ndtv.com/common/images/ogndtv.png": element.urlToImage}  author={element.author}  publish={element.publishedAt}
                      urlDesc={element.url}
                      />
                  </div>
                );
              })}
            </div>
          </div>
          </InfiniteScroll>

            {/* //.......for buttons....... */}
          {/* <div className="container my-3">
            <hr />
          </div>
          <div className="container my-5 d-flex justify-content-between">
            <button disabled={state.page <= 1}
              className="btn btn-primary btn-lg"
              onClick={handlePrev}.
              type="button"
            >
              &larr; Previous
            </button>

            <button disabled = {state.page + 1 > Math.ceil(state.results/props.pgSize)}
              className="btn btn-primary btn-lg"
              onClick={handleNext}
              type="button"
            >
              Next &rarr;
            </button>
          </div> */}
  
      </>
    );
  }


News.defaultProps = {
  pgSize:   12,
  country: 'us',
  category: 'general'
  
}

News.propTypes = {
  country: propTypes.string,
  pgSize:   propTypes.number,
  category: propTypes.string
  

}
export default News