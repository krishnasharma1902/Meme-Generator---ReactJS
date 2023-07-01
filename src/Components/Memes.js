import React, {useState} from 'react'
import '../index.css'

// import memesData from '../memesData.js'
export default function Form() {
  
  // const [memeImage, setMemeImage] = useState(           "https://i.imgflip.com/1g8my4.jpg"
  // )

  const [meme, setMeme] = useState(
    {
      topText : "",
      bottomText : "",
      randomImage: "https://i.imgflip.com/1g8my4.jpg"
    }
  )
 
  // const [allMemes, setAllMemes] = useState(memesData) //object
  const [allMemes, setAllMemes] = useState([]) //Array
  

  React.useEffect(() => {

    fetch("https://api.imgflip.com/get_memes").then(res=> res.json()).then( data => setAllMemes(data.data.memes))

    //getting array into allMemes using API whereas we were getting object when we were using memesData file

  }, [])





  function getMemeImage(){

    // const memesArray = allMemes.data.memes 

    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNumber].url
    setMeme(prevMeme => ({

      ...prevMeme,
      randomImage : url
      
    }))


    



  }
  function handleChange(event){
    const {name, value} = event.target 
    setMeme(prevMeme => {
      return{
      ...prevMeme,
      [name] : value
    }
  }
    )
  }
  
  
  return (
    <main>

        <div className='form'>
      <input 
      
             className='form--input' placeholder='Top Text'
             type="text"
             name='topText' 
             value={meme.topText}
             onChange={handleChange}
      
      />
      <input 

             placeholder='Bottom Text'
             type="text" 
             className='form--input' 
             name='bottomText'
             value={meme.bottomText}
             onChange={handleChange}
      
      />
      <button 
        className='form--button'
        onClick={getMemeImage}
        
      >
        
        Get a new meme image 🖼️
        
        
      </button>
      </div>
      <div className="meme" background={getMemeImage}>
      <img className='meme--image' src={meme.randomImage} alt="" />
      <div className="meme--text top">{meme.topText}</div>
      <div className="meme--text bottom">{meme.bottomText}</div>
      </div>



      </main>
  )
}
