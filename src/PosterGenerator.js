import './PosterGenerator.css';

import axios from "axios"
import { useState } from "react"

import template1 from "./controlnetinputs/template1.png"
import template2 from "./controlnetinputs/template2.png"
import template3 from "./controlnetinputs/template3.jpg"

function PosterGenerator() {

  const [imageSrc, setImageSrc] = useState(template1);
  const [error, setError] = useState(null);
  const [prompt, setPrompt] = useState(null);
  const [genText, setgenText] = useState(null);
  const [dataURL, setDataURL] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); 

  const imageUrls = [
    template1,
    template2,
    template3
  ];

  
  const handleImageClick = (imageUrl) => {
    alert(imageUrl)
    setSelectedImage(imageUrl);
    
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {

      const response = await axios.post('http://127.0.0.1:5000/img2img', {
        prompt: prompt,
        template: selectedImage
      });

      const imageData = response.data.imageData;

      setImageSrc(imageData)

      const generatedText = response.data.Textdata;

      setgenText(generatedText)

      console.log(imageData);


    } catch (error) {
      setError(error.message);
    }
  };

  return (   
    <div>
      <div style={{ 'height': '100%', display: 'flex' }}>

        <div className="image-selection-box" style={{
          borderRadius: '25px',
          border: '2px solid',
          borderColor: 'white',
          
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: "column",
          backgroundColor: "#212121",
        }}>
          {imageUrls.map((imageUrl, index) => (
            <div key={index} className="image-preview">
              <img
                src={imageUrl}
                alt={`${index + 1}`}
                onClick={() => handleImageClick(imageUrl)}
                className={selectedImage === imageUrl ? 'selected' : ''}
                style={{ width:'150px', height: '150px', objectFit: 'contain', 'align-self': 'center' }}
              />
            </div>
          ))}
        </div>

        <div className='wrapper' style={{ backgroundColor: "#303030", 'height': '60%', 'width': '60%', 'maxHeight': '60%' }}>
          <div class='container'>
            {imageSrc && <img src={`${imageSrc}`} />}
            {error && <p>Error: {error}</p>}
          </div>
          {genText && <p style={{ 'margin-left': '150px', 'margin-right': '150px', 'border-style': 'solid', 'border-color': 'grey', 'border-width': '1px', 'border-radius': '10px', 'margin-bottom': '10px', 'margin-top': '10px' }}>{genText}</p>}
        </div>

      </div>
      <div className='promptText' style={{ alignContent: 'bottom' }}>
        <form class='genText' onSubmit={handleSubmit} style={{ display: 'flex' }}>
          <input class="input100" style={{ 'border-radius': '30px', 'marginRight': '20px' }} type="text" id="prompt" onChange={e => setPrompt(e.target.value)} value={prompt} /><br></br>
          <button class="button-36" style={{ 'border-radius': '30px' }} type="submit">Generate</button>
        </form>
      </div>
    </div>

    // <div style={{display: "flex", flexDirection: "column", height: "100%", position: "relative"}}>
    //   <div style={{height: '60%', position: "relative", display: 'flex',flexDirection: "column", justifyContent: 'center', overflowY: 'scroll'}}>
    //     <div style={{height: '70%', width: '100%',display: 'flex', justifyContent: 'center'}}>{imageSrc && <img src={`${imageSrc}`} style={{height: '100%', width: '30vw', objectFit: 'contain'}}/>}</div>
    //     <div style={{height: '30%'}}>{genText && <p style={{backgroundColor: 'white', width: '30vw'}}>{genText}</p>}</div>
    //     </div>
    //   <div style={{height: '40%'}}>      <form onSubmit={handleSubmit} style={{ display: 'flex' }}>
    //     <input class="input100" type="text" id="prompt"  onChange={e => setPrompt(e.target.value)} value={prompt}/><br></br>
    //     <button class="button-36" type="submit">Generate</button>
    //   </form></div>
    // </div>
  );
}

export default PosterGenerator;
