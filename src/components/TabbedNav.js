import React, { Component } from 'react';

class TabbedNav extends Component {

  componentDidUpdate() {
    console.log('Updated TabbedNav')
  }

  render() {
    return (
      <div className="tabbed-nav">
        <ul>
            {this.props.categories.map((category, index) => {
              return (
                <li className={(this.props.currentCategory === category) ? "active" : null} key={index}><a onClick={this.handleSelect.bind(this)}>{category}</a></li>
              );
            })}
        </ul>
      </div>
    );
  }

  handleSelect(event) {
    this.props.setCurrentCategory(event.target.innerText);
  }
}

export default TabbedNav;
