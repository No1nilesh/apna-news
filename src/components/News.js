import React,{useEffect , useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



 const  News=(props)=>  {


  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  //

   const capitalizeFirstLetter = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1)
   }
    
    const updateNews= async()=>{
      props.setProgress(10)
     
        const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30)
        let parsedata = await data.json()
        props.setProgress(70)
        setArticles(parsedata.articles)
       setLoading(false)
        setTotalResults(parsedata.totalResults)
        props.setProgress(100)
    } 
    useEffect(() => {
      document.title = `Apna news - ${capitalizeFirstLetter(props.category)}`
      updateNews();
    }, [])
  
   
  
//     handleNextClick=async()=>{
//       this.setState({
//         page:this.state.page + 1
//       })
//       this.updateNews();
//     }

//     handlePrevClick= async()=>{
// this.setState({
//   page: this.state.page -1
// })
// this.updateNews();
// }
const fetchMoreData = async() => {
  
 
   const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`
   setPage(page +1)
  
  setLoading(true)
  let data = await fetch(url);
  let parsedata = await data.json()
  setArticles(articles.concat(parsedata.articles))
  setLoading(false)
  setTotalResults(parsedata.totalResults)
 
};
 
    return (
      <div>
       
       
       <h1 className="text-center" style={{marginTop:"5rem"}}>Apna news - Top Headlines on {capitalizeFirstLetter(props.category)}</h1>
       {loading && <Spinner/> }
       
        <InfiniteScroll
          dataLength={articles.length}
        
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={loading && <Spinner/>}
        >
          <div className="container"> 
        <div className="row ">
       { articles.map((element)=>{
         return  <div className="col-md-4 my-3" key={element.url}>
        <NewsItem title={element.title?element.title.slice(0, 45):""} discription={element.description?element.description.slice(0, 88):""}  
        imageUrl={element.urlToImage}  newsUrl={element.url} date={element.publishedAt} source={element.source.name} mode={props.mode}/>
        </div>
        
      })}
       </div>
      </div>
      </InfiniteScroll>
{/*      
      <div className="container d-flex justify-content-between">
      <button type="button" disabled={this.state.page<=1} className="btn btn-primary" onClick={this.handlePrevClick}> &larr; Previous</button>
      <button type="button" disabled={this.state.page + 1 >this.state.totalResults/props.pageSize} className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
      </div> */}
         
        
      
       
      </div>
    )
  }

News.defaultProps = {
  country: 'us',
  pageSize : 8,
  category: "science"
 }
 News.propTypes={
country: PropTypes.string,
pageSize: PropTypes.number,
category: PropTypes.string
 }

export default News
