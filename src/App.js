import './App.css';

import axios from "axios"
import {useState} from "react"

function App() {

  const [imageSrc, setImageSrc] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    
  
    try {
      const response = await axios.post('http://127.0.0.1:7860/sdapi/v1/txt2img', {
        prompt: 'cute cat',
        sampler_name: 'DPM++ 2M Karras',
        batch_size: 1,
        steps: 20,
        cfg_scale: 9,
        width: 512,
        height: 512,
        negative_prompt: 'blurry',
      });

      const imageData = response.data.images[0];

      setImageSrc(imageData)
      

      console.log(imageData);

    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">Generate Image</button>
      </form>
      {imageSrc && <img src={`data:image/jpeg;base64,${imageSrc}`} alt="Generated Image" />}
      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default App;
