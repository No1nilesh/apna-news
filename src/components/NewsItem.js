import React, { Component } from 'react'

export default class NewsItem extends Component {
  
  render() {
  let { title, discription, imageUrl, newsUrl, date,source} = this.props 
    return (
      <div>
            <div className="card" >
    <img src={imageUrl} className="card-img-top" style={{height:"14.5rem"}} alt="..."/>
    <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{discription}</p><h4> <span class="badge bg-danger">{source}</span></h4>
        <p className="card-text"><small className="text-muted">Last updated {new Date(date).toGMTString()}</small></p>
       
        <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sml btn-primary">Read more</a>
    </div>
</div>
      </div>
    )
  }
}
