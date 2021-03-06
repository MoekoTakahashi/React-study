import React from 'react';
import Article from "./Article";
class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPublished: false,
      count: 0
    }
  }

  componentDidMount() {
    document.getElementById('counter').addEventListener('click',this.countUp)
  }
  componentDidUpdate() {

    if (this.state.count >= 10){
      this.setState({count: 0})
    }
  }
  
  componentWillUnmount () {
    document.getElementById('counter').removeEventListener('click',this.countUp)
  }

  togglePublished = () => {
    this.setState ({
      isPublished: !this.state.isPublished
    })
  };

  countUp = () => {
    this.setState({count: this.state.count + 1
    });
  }
  render(){
    const authorName = "Torahack"
    return (
      <>
       <Article title={"Reactの使い方"} 
       isPublished={this.state.isPublished} 
       toggle={()=>this.togglePublished()}
       count={this.state.count}/>  
           
      </>
    )
  }
}

export default Blog