import React, { Component } from 'react';

import Article from './Article';


class Articles extends Component {

  componentDidUpdate() {
    console.log('Updated Articles');
  }
  
  render() {
    return (
      <div className="articles">
        {this.getArticles(this.props.currentCategory).map((data, index) => {
          return (<Article key={data.id} data={data}></Article>);
        })}
      </div>
    );
  }

  getArticles(currentCategory) {

    let filtered;

    filtered = this.props.content.data.filter(data => {
      if(data.category === this.props.currentCategory) {
        return data;
      } else {
        return false;
      }
    });

    return filtered;
  }
}

export default Articles;
