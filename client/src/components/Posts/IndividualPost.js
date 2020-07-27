import React, { useEffect } from "react";
import { useParams } from 'react-router-dom'
const IndividualPost = (props) => {
    let { post } = useParams()
  useEffect(() => {
      console.log(props.location)
  }, []);
  return <div>
      {JSON.stringify(post)}
  </div>;
};

export default IndividualPost;
