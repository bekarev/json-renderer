import React from 'react';
import { blockTypeToComponent } from "../const/blockTypes";

const ContentRenderer = ({contentData}) => {
  return (<>
    {contentData.map((block, index) => {
      const Component = blockTypeToComponent[block.type]

      if (!Component) return null

      return <Component {...block} key={index}/>
    })}
  </>)
};

export default ContentRenderer;
