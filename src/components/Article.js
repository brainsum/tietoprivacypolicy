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
        <div className="intro" dangerouslySetInnerHTML={{__html: this.props.data.intro}} />
        {this.props.data.content !== "" &&
          <React.Fragment>
            <div ref={this.contentRef} className={'content' + ((this.state.expanded) ? ' expanded' : '')} style={{height:'0px'}}>
              <div dangerouslySetInnerHTML={{__html: this.props.data.content}} />
            </div>
            <div className="more"><a onClick={this.handleMoreOpen.bind(this)}>Read more</a></div>
          </React.Fragment>
        }
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
    event.target.innerText =(event.target.innerText === 'Read more') ? 'Read less' : 'Read more' ;
  }
}

export default Article;
