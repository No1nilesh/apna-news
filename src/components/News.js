import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

export class News extends Component {
   static defaultProps = {
    country: 'us',
    pageSize : 8,
    category: "science"
   }
   static propTypes={
country: PropTypes.string,
pageSize: PropTypes.number,
category: PropTypes.string
   }
    capitalizeFirstLetter = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1)
   }
    constructor(props){
        super(props)
        console.log('hello I am constructor')
        this.state={
           articles: [],
           loading: false,
           page:1
        }
        document.title = `Apna news - ${this.capitalizeFirstLetter(this.props.category)}`
    }
    async updateNews(){
      if(! Math.ceil(this.state.page + 1 >this.state.totalResults/this.props.pageSize)){
        console.log('next click')
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bcc6adfe50144073b50d6cff8257b658&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
        this.setState({loading: true})
        let data = await fetch(url);
        let parsedata = await data.json()
  
        this.setState({
          page: this.state.page ,
          articles: parsedata.articles,
          loading:false
        })
    }}
   async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bcc6adfe50144073b50d6cff8257b658&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading: true})
        let data = await fetch(url);
        let parsedata = await data.json()
        this.setState({articles: parsedata.articles, totalResults: parsedata.totalResults , loading:false})
    }
  
    handleNextClick=async()=>{
      this.setState({
        page:this.state.page + 1
      })
      this.updateNews();
    }

    handlePrevClick= async()=>{
this.setState({
  page: this.state.page -1
})
this.updateNews();
}
  render() {
    return (
      <div>
        <div className="container my-4 ">
       
       <div className="row ">
       <h1 className="text-center my-4">Apna news - Top Headlines on {this.capitalizeFirstLetter(this.props.category)}</h1>
       {this.state.loading &&<Spinner/> }
       {!this.state.loading && this.state.articles.map((element)=>{
      return  <div className="col-md-4" key={element.url}>
        <NewsItem title={element.title?element.title.slice(0, 45):""} discription={element.description?element.description.slice(0, 88):""}  
        imageUrl={element.urlToImage}  newsUrl={element.url} date={element.publishedAt} source={element.source.name}/>
        </div>
        
       })}
       </div>
     </div>
      <div className="container d-flex justify-content-between">
      <button type="button" disabled={this.state.page<=1} className="btn btn-primary" onClick={this.handlePrevClick}> &larr; Previous</button>
      <button type="button" disabled={this.state.page + 1 >this.state.totalResults/this.props.pageSize} className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
      </div>
         
        
      
       
      </div>
    )
  }
}

export default News
