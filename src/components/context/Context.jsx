import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";

export const AppContext = createContext();
export const  AppProvider = ({ children }) => {

    const country =`in`;
    const pgSize = 12;
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    const [progress, setProgress] = useState(0)
    const [category , setCategory] = useState(`general`)

    const API1 = `https://newsapi.org/v2/top-headlines?country=${country}`
    const API2 = `&apiKey=${process.env.REACT_APP_NEWS_API}&page=${page}&pageSize=${pgSize}`
    const updateNews = async (url) => {
        try {
            setProgress(0);
            const res = await axios.get(url);
            const data = await res.data;
            setProgress(30);
            setArticles(data.articles);
            setTotalResults(data.totalResults);
            setProgress(100);
            setLoading(false);
        } catch (error) {
            console.log(`Error generated is : `, error)
        }
    };

    useEffect(() => {
        updateNews(`${API1}&category=${category}${API2}`);
        // eslint-disable-next-line
    }, [category])

    const fetchMore = async () => {
        setPage(page + 1)
        let url =
            `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${process.env.REACT_APP_NEWS_API}&page=${page}&pageSize=${pgSize}`;
        try {
            const res = await axios.get(url);
            const data = await res.data;
            setArticles(data.articles);
            setTotalResults(data.totalResults);
            setLoading(false);
        } catch (error) {
            console.log(error)
        }
    }

    if (loading) {
        return (
            <div className="spinner center">
                <span>
                    <ThreeDots
                        height="100"
                        width="80"
                        radius="2"
                        color="#0d1c57"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                    />
                </span>
                <span className="text">Please wait... Fetching news...</span>
            </div>
        )
    }

    return (
        <AppContext.Provider value={{articles,totalResults,progress,page,loading,setArticles,setTotalResults,setProgress,setPage,setLoading,fetchMore,category ,setCategory}}>
            {children}
        </AppContext.Provider>
    );
};

