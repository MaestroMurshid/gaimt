import './App.css';

import axios from "axios"
import {useState} from "react"
import LoginForm from './LoginForm/LoginForm';
import HomePage from './HomePage/HomePage';

function App() {

  const [imageSrc, setImageSrc] = useState(null);
  const [error, setError] = useState(null);
  const [prompt, setPrompt] = useState(null);
  const [genText, setgenText] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {

      const response = await axios.post('http://127.0.0.1:5000/txt2img', {
        prompt: prompt
      });

      const imageData = response.data.images[0];

      setImageSrc(imageData)

      const generatedText = response.data.generatedContent;

      setgenText(generatedText)
      

      console.log(imageData);


    } catch (error) {
      setError(error.message);
    }
  };

  return (
    
    <div>
    <form onSubmit={handleSubmit}>
      <input class="input100" type="text" id="prompt"  onChange={e => setPrompt(e.target.value)} value={prompt}/><br></br>
      <button class="button-36" type="submit">Generate Image</button>
    </form>
    <div className='wrapper'>
       {imageSrc && <img src={`data:image/jpeg;base64,${imageSrc}`} alt="Generated Image" />}
    {error && <p>Error: {error}</p>}
    <input type="text" value={"AAAAAAAAAAAAAAAAAAAAAAAAAAAAA"} onChange={e => setgenText(e.target.value)}></input>
    </div>
  </div>
  );
}

export default App;
