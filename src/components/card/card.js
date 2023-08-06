import * as React from "react";
import ResourceCard from "../card";
import ProjectCard from "../card";

const Card = (props) => {
  const {cardType} = props;
  return (
    <>
    {cardType === "resource" &&
      <ResourceCard {...props} />
    }
    {cardType === "project" &&
      <ProjectCard {...props} />
    }
    </>
  );
}
export default Card;