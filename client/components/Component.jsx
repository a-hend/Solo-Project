import React, { useState, useEffect } from "react";

export default function Component() {
  const [url, setURL] = useState('');
  const [title, setTitle] = useState('');


  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => {
        let { url, title } = data;
        console.log('Data from SERVER: ', data);
        setURL(url);
        setTitle(title);
      })
      .catch(err => {
        console.log('Error retrieving data from server');
      })
  }, [Component]);

  return(
    <div className="comp">
      <h1>
        <h2>{title}</h2>
        <img src={url} alt="NASA APOD" />
      </h1>
    </div>
  )
}