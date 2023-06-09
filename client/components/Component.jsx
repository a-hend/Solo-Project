import React, { useState, useEffect } from "react";

export default function Component({ url, title }) {
  


  // useEffect(() => {
  //   fetch('/api')
  //     .then(res => res.json())
  //     .then(data => {
  //       let { url, title } = data;
  //       console.log('Data from SERVER: ', data);
  //       setURL(url);
  //       setTitle(title);
  //     })
  //     .catch(err => {
  //       console.log('Error retrieving data from server');
  //     })
  // }, [Component]);

  return(
    <div className="comp">
      <h2>{title}</h2>
      <img src={url} alt="NASA APOD" />
    </div>
  )
}