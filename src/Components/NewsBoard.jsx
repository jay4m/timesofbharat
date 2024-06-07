import { useEffect, useState } from "react"
import NewsItem from "./NewsItem";

const NewsBoard = ({category}) => {

    const [articles,setArticles]=useState([]);

    useEffect(()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=0beb516458ad45f097871dbb7908e2a5`;
        fetch(url).then(response=>response.json()).then(data=>setArticles(data.articles));
    },[category])

    return (
      <div> 
        <br></br>
        <h2 className="text-center"> Latest <span className="badge bg-danger">News</span></h2>
        {articles.map((news,index)=>{
            return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}></NewsItem>
        })}
      </div>
    )
  }
  
  export default NewsBoard