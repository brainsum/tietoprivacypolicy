import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import uuidv1 from 'uuid/v1';

import TabbedNav from './components/TabbedNav';
import SideNav from './components/SideNav';
import Articles from './components/Articles';

import './css/index.css';

import contentRead from './content.json';
let content = addUniqueId(contentRead);


class App extends Component {

  constructor(props) {
    super(props);

    let data = this.groupByCategory(content);
    let categories = this.getCategories(data);
    let categoryByHash = this.getCategoryByHash(window.location.hash.replace('#', ''))

    this.state = {
      data: data,
      categories: categories,
      currentCategory: (categoryByHash) ? categoryByHash : categories[0]
    }
  }

  componentDidMount() {
    if (window.location.hash) {
      this.jumpToAnchor(window.location.hash.replace('#', ''))
    }
  }

  componentDidUpdate() {
    console.log('Updated App')
  }

  render() {
    return (
      <div className="privacy-notice-app">
        <h1>Privacy notice</h1>
        <TabbedNav categories={this.state.categories}
          currentCategory={this.state.currentCategory}
          setCurrentCategory={this.setCurrentCategory.bind(this)}>
        </TabbedNav>
        <main>
          <SideNav currentCategory={this.state.currentCategory} content={content}></SideNav>
          <Articles currentCategory={this.state.currentCategory} content={content}></Articles>
        </main>
      </div>
    );
  }

  groupByCategory(content) {
    let sortedData = {};
    
    content['data'].forEach((data) => {
      if (sortedData[data.category]) {
        sortedData[data.category].push(data)
      } else {
        sortedData[data.category] = [];
      }
    });

    return sortedData;
  }
 

  // If URL hash fragment is present in documents
  // return the category name for it
  getCategoryByHash(windowHash) {
    if ( ! windowHash) return;

    for (let i = 0; i < content.data.length; i++) {
      if (content.data[i].hash === windowHash) return content.data[i].category;
    }

    return null;
  }

  jumpToAnchor(anchor){
    var top = document.querySelector(`a[name=${anchor}]`)
    if (top) {
      top = top.offsetTop;
      window.scrollTo(0, top);
    }
  }

  getCategories(data) {
    return Object.keys(data);
  }

  setCurrentCategory(category) {
    this.setState({currentCategory:category});
  }
}

function addUniqueId(content) {
  let newContent = { data:[] };

  content.data.forEach((data, index) => {
    data.id = uuidv1();
    newContent.data.push(data);
  });

  return newContent;
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
