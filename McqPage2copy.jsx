import React,{useState} from 'react'
import './McqPage2.css'
import  bgimage from '../Assets/bg.jpg'
import  cap from '../Assets/cap.jpeg'

const McqPage2 = () => {

    const [textvalue,textstate]=useState({
        question:'',
        option1:"",
        option2:"",
        option3:"",
        option4:"",
        
    })

    const handletext=(e)=>{
        const name=e.target.name;
        const value=e.target.value;

        textstate((prev)=>{
            return{...prev,[name]:value}
        })
    }


    const [radiomcq,radioState]=useState("")
    const HandleRadio=(e)=>{
        radioState(e.target.value)
    }

   
    console.log(radiomcq)
    console.log(textvalue.option1)
    console.log(textvalue.option2)
    console.log(textvalue.option3)
    console.log(textvalue.option4)

    
  return (
    <div className='mcqpage'  style={{backgroundImage:`url(${bgimage})`}}>
        <h1>MCQ Questions</h1>

        <div className='radioquestion'>
         <div className='quetext'>Enter a Question </div> <br/>
        <input type="text" onChange={handletext} className='mcqtext' placeholder='Enter a question' size="59" name='question'/>
        </div>

            <div className='RadioButton'>
           <input type='radio' name="radiomcq" value={textvalue.option1}   id="mcqA" onClick={HandleRadio}/>
           <label htmlFor="mcqA"> <input type="text" onChange={handletext} placeholder='Option 1'  size="55" style={{height:"20px"}} name='option1'/></label> <br/><br/>

           

           <input type='radio' name="radiomcq" value={textvalue.option2} id="mcqB" onClick={HandleRadio}/>
           <label htmlFor="mcqA"> <input type="text" onChange={handletext} placeholder='Option 2' size="55" name='option2'/></label><br/><br/>

           <input type='radio' name="radiomcq" value={textvalue.option3} id="mcqC" onClick={HandleRadio}/>
           <label htmlFor="mcqA"> <input type="text" onChange={handletext} placeholder='Option 3' size="55" name='option3'/></label><br/><br/>

           <input type='radio' name="radiomcq" value={textvalue.option4} id="mcqD" onClick={HandleRadio}/>
           <label htmlFor="mcqD"> <input type="text" onChange={handletext} placeholder='Option 4' size="55" name='option4'/></label>
           </div>

           <div className='Radiofbut'>
            <button  className='addbut'> ADD</button>
            <div>
            <button className='subbut'>Submit</button>
            </div>
            </div>

            <img src={cap} className='imagel' />
            <div className='textend'>
            <h2>
                A GOOD EDUCATION IS A FOUNDATION FOR A BETTER FEATURE </h2><br/>
                </div>

            

    </div>
  )
}

export default McqPage2