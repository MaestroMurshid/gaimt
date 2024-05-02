import './PosterGenerator.css';

import axios from "axios"
import { useState } from "react"

import template1 from "./controlnetinputs/logotemplate.png"


function PosterGenerator() {

  const [ImageSrc, setImageSrc] = useState(template1);
  const [error, setError] = useState(null);
  const [prompt, setPrompt] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await axios.post('http://127.0.0.1:5000/logo', {
        prompt: prompt
      });

      const imageData = response.data['images'][0];

      var image = new Image();
      image.src = 'data:image/png;base64,' + imageData;

      setImageSrc(image)

      console.log(image.src);

    } catch (error) {
      setError(error.message);
    }
  };

  return (  
     
    <div>
      <div style={{ 'height': '100%', display: 'flex' }}>
        <div className='wrapper' style={{ backgroundColor: "#303030", 'height': '60%', "width" : "600px" , 'maxHeight': '60%' }}>
          <div class='container'>
            {ImageSrc && <img src={`${ImageSrc}`} />}
            {error && <p>Error: {error}</p>}
          </div>
         </div>
      </div>
      <div className='promptText' style={{ alignContent: 'bottom' }}>
        <form class='genText' onSubmit={handleSubmit} style={{ display: 'flex' }}>
          <input class="input100" style={{ 'border-radius': '30px', 'marginRight': '20px' }} type="text" id="prompt" onChange={e => setPrompt(e.target.value)} value={prompt} /><br></br>
          <button class="button-36" style={{ 'border-radius': '30px' }} type="submit">Generate</button>
        </form>
      </div>
    </div>
  );
}

export default PosterGenerator;
