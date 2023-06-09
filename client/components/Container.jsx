import React, { useState } from "react";
import Component from './Component';


// https://images-assets.nasa.gov/image/PIA15426/PIA15426~orig.jpg
// images-assets.nasa.gov/image/PIA15426/PIA15426~orig.jpg

export default function Container() {
  const [url, setURL] = useState(['images-assets.nasa.gov/image/PIA08653/PIA08653~orig.jpg', 'images-assets.nasa.gov/image/PIA20051/PIA20051~orig.jpg', 'images-assets.nasa.gov/image/PIA20057/PIA20057~orig.jpg','images-assets.nasa.gov/image/PIA13129/PIA13129~orig.jpg','images-assets.nasa.gov/image/PIA15426/PIA15426~orig.jpg', ]);
  const [title, setTitle] = useState(['The Sword of Orion', 'Shifting Coronas Around Black Holes', 'Galaxy NGC 1068','The Dark Heart of the King','The Sombrero Galaxy']);
  const [comp, setComp] = useState([]);

  const urls = ['images-assets.nasa.gov/image/PIA08653/PIA08653~orig.jpg'];

  const components = [];

  function createComponents() {
    const bday = document.getElementById('birthday')
    const input = document.getElementById('image-count');
    console.log('Image requests: ', input.value);
    for (let i = 0; i < input.value; i++) {
      components.push(<Component key={`img${i}`} url={'http://'+url[i]} title={title[i]}/>);
    }
    setComp(components);
    console.log(components);
    input.value = '';
    bday.value = '';
  }



  return(
    <div className="mainContainer">
      <h1>Happy Birthday From The Universe</h1>
      <p>Enter your Birthday and number of images you wish to recieve</p>
      <input name='addBirthday' placeholder='MM-DD-YYYY' type='text' /*value='MM-DD-YYY'*/  id='birthday'></input>
      <input name='imageCount' placeholder='enter a number (1-25)' type='text' /*value='# of images from 0 - 25'*/ id='image-count'></input>
      <button id='button' onClick={createComponents}>Get Images</button>
      {comp}
    </div>
  )
}