import React from "react";
import ReactMarkdown from "react-markdown";

const Markdown = (props) => {
  return (
    <ReactMarkdown 
      components={{
        p: ({node, ...props}) => <>{props.children}</>
      }}
      children={props.value}
    />
  )
}
export default Markdown