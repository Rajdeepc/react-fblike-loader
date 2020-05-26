import React from "react";
import './index.css';

const loaderCardHOC = WrappedComponent => {
    return props => {
      if (props.isLoading) {
        return <div class="loader-wrapper"><WrappedComponent {...props}/></div>;
      } else return <WrappedComponent {...props} />;
    };
  };


const InfoDesc = props => {
  return <div>{props.children}</div>;
};




const ReactCardLoader = loaderCardHOC(InfoDesc);

module.exports.ReactCardLoader = ReactCardLoader
