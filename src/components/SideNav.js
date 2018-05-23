import React, { Component } from 'react';

class SideNav extends Component {

  render() {
    return (
      <div className="side-nav">
        <div className="bg-gray">
          <h3>{this.props.currentCategory}</h3>
          <ul>
            {this.getTitles(this.props.currentCategory).map((data, index) => {
              return (<li key={data.id}><a href={'#' + data.hash}>{data.title}</a></li>);
            })}
          </ul>
          <div className="extra">
            <ul>
              <li><a href="https://www.tieto.com/cookie-notice" target="_blank" rel="noopener noreferrer">Cookie Policy</a></li>
            </ul>
          </div>
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
