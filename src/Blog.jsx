import React from 'react';
import Article from "./Article";
class Blog extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    const authorName = "Torahack"
    return (
      <>
       <Article title={"Reactの使い方"} order={1}/>
       <Article title={"Jsxの使い方"} order={2}/>
       <Article title={"環境構築をしてみよう"} order={3}/>       
      </>
    )
  }
}

export default Blog