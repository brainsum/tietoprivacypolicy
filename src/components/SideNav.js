import React, { Component } from 'react';

class SideNav extends Component {

  render() {
    console.log(this.props.currentCategory);
    return (
      <div className="side-nav">
        <div className="bg-gray">
          <h3>{this.props.currentCategory}</h3>
          <ul>
            {this.getTitles(this.props.currentCategory).map((data, index) => {
              return (<li key={data.id}><a href={'#' + data.hash}>{data.title}</a></li>);
            })}
          </ul>
          {(this.props.currentCategory === "Website Visitor notice") && 
            <div className="extra">
              <ul>
                <li><a href="https://www.tieto.com/cookie-notice" target="_blank" rel="noopener noreferrer">Cookie notice</a></li>
              </ul>
            </div>
          }
        </div>
      </div>
    );
  }

  getTitles(currentCategory) {

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

export default SideNav;
