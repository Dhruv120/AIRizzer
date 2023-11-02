import { useState } from "react";
import React from 'react'
import './Gpt.css'
import axios from "axios";
const { Configuration, OpenAIApi } = require("openai");

const ChatGpt = () => {

    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    // const configuration = new Configuration({
    //     apiKey: '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',
    //   });
      
      
    // const openai = new OpenAIApi(configuration);


    const handleSubmit = async (e) =>{
        e.preventDefault();
        setLoading(true);

        axios.post("http://localhost:5555/chat", { prompt })
        .then((res) => {
            setResponse(res.data);
            setLoading(false);
        })
        .catch((err) => {
            console.error(err);
        });

        // try {
        //     let response = await fetch('http://localhost:5555/chat',{prompt});
        //     response = response.json();
        //     setResponse(response.data);
        //     setLoading(false);
        // } catch (error) {
        //     console.log(error);
        // }

       

    }


  return (

    <div className="flex flex-col justify-center mt-5 items-center" >
        <div className='text-center mt-3 text-4xl font-[1000]'>OpenAI based ChatGPT</div>
        <div>
        <form className="flex flex-col  justify-center items-center"  onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    value={prompt}
                    className='inputgpt'
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Ask anything... :)"
                />
            
            </div>
<br />

            <div>
                    <button className="buttongpt"     type="submit">Ask</button>
            </div>
            
            
        </form>
        </div>
        <br />
        <br />
        <div className="ansbox">
      
            <p>

                {loading ? 'loading...' : response}
            </p>
     
        </div>
      
     </div>
    
  )
}

export default ChatGpt