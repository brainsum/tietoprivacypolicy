import React, { Component } from 'react';

class Article extends Component {

  constructor(props) {
    super(props);
    this.contentRef = React.createRef();
    this.state = {
      expanded: false
    }
  }

  componentDidUpdate() {
    console.log('Updated Article');
  }
  
  render() {
    return (
      <div className="article">
        <a className="anchor" name={this.props.data.hash}> </a>
        <h3>{this.props.data.title}</h3>
        <div className="intro">
          {this.props.data.intro}
        </div>
        <div ref={this.contentRef} className={'content' + ((this.state.expanded) ? ' expanded' : '')} style={{height:'0px'}}>
          <div>{this.props.data.content}</div>
        </div>
        <div className="more"><a onClick={this.handleMoreOpen.bind(this)}>› More</a></div>
      </div>
    );
  }

  handleMoreOpen(event) {

    if(this.contentRef.current.style.height === '0px') {
      this.setState({expanded: true});
      this.contentRef.current.style.height = this.contentRef.current.scrollHeight + 'px';
    } else {
      this.setState({expanded: false});
      this.contentRef.current.style.height ='0px';
    }
    
    // Changing link text
    event.target.innerText =(event.target.innerText === '› More') ? '⨯ Less' : '› More' ;
  }
}

export default Article;
