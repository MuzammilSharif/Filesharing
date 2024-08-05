import React, { useState, useEffect } from 'react'
import './McqPage2.css'
import bgimage from '../Assets/bg.jpg'
import cap from '../Assets/cap.jpeg'
import { useNavigate } from 'react-router-dom'

const McqPage2 = () => {
    // ------------------ARRAY CREATED --------------------------------------//
    const [textvalue, textstate] = useState({
        question: '',
        option1: "",
        option2: "",
        option3: "",
        option4: "",

    })
    // -----------------State craeted ------------------------------------------//
    const [arrvalue, arrstate] = useState([]);

    const [editIndex, setEditIndex] = useState(null);


    const handletext = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        textstate((prev) => {
            return { ...prev, [name]: value }
        })
    }
    //------------use efect hoook used--------------------------------------//
    useEffect(() => {
        if (location.state) {
            const { question, radiomcq, index, existingArr } = location.state;
            textstate(question);
            radioState(radiomcq);
            setEditIndex(index);
            if (existingArr) {
                arrstate(existingArr);
            }
        }
    }, [location.state]);


    const [radiomcq, radioState] = useState("")
    const HandleRadio = (e) => {
        radioState(e.target.value)
    }
    // ----------------------adding the question in the array------------------------------//
    const handleadd = (e) => {
        e.preventDefault();
        const data = { textvalue, radiomcq };
        if (textvalue && radiomcq) {
            if (editIndex !== null) {
                const updatedArr = [...arrvalue];
                updatedArr[editIndex] = data;
                arrstate(updatedArr);
                setEditIndex(null);
            } else {
                arrstate((item) => [...item, data]);
            }
            console.log(arrvalue);
        }
    }
    // --------------------------naviagting between different pages---------------------------------//
    const navigatesub = useNavigate()
    const handleSubmit = () => {
        navigatesub("/Preview", { state: { arra: arrvalue } })
    }

    const handleUppLogout = () => {
        navigatesub('/');
    }

    // ---------------------main page structure ----------------------------------//
    return (
        <div className='mcqpage' style={{ backgroundImage: `url(${bgimage})` }}>
            <nav className="navbar">
                <button id="lg-out" onClick={handleUppLogout}>Logout</button>
            </nav>

            <form>

                <h1>MCQ Questions</h1>

                <div className='radioquestion'>
                    <div className='quetext'>Enter a Question </div> <br />
                    <input type="text" onChange={handletext} className='mcqtext' placeholder='Enter a question' size="59" name='question' />
                </div>

                <div className='RadioButton'>
                    <input type='radio' name="radiomcq" value={textvalue.option1} id="mcqA" onClick={HandleRadio} checked={radiomcq === textvalue.option1} />
                    <label htmlFor="mcqA"> <input type="text" onChange={handletext} placeholder='Option 1' size="55" style={{ height: "20px" }} name='option1' /></label> <br /><br />

                    <input type='radio' name="radiomcq" value={textvalue.option2} id="mcqB" onClick={HandleRadio} checked={radiomcq === textvalue.option2} />
                    <label htmlFor="mcqA"> <input type="text" onChange={handletext} placeholder='Option 2' size="55" name='option2' /></label><br /><br />

                    <input type='radio' name="radiomcq" value={textvalue.option3} id="mcqC" onClick={HandleRadio} checked={radiomcq === textvalue.option3} />
                    <label htmlFor="mcqA"> <input type="text" onChange={handletext} placeholder='Option 3' size="55" name='option3' /></label><br /><br />

                    <input type='radio' name="radiomcq" value={textvalue.option4} id="mcqD" onClick={HandleRadio} checked={radiomcq === textvalue.option4} />
                    <label htmlFor="mcqD"> <input type="text" onChange={handletext} placeholder='Option 4' size="55" name='option4' /></label>
                </div>



                <div className='Radiofbut'>
                    <button type='reset' className='addbut' onClick={handleadd} > ADD</button>
                    <div>
                        <button type="submit" className='subbut' onClick={handleSubmit}>Submit</button>
                    </div>
                </div>



                <img src={cap} className='imagel' />
                <div className='textend'>
                    <h2>
                        A GOOD EDUCATION IS A FOUNDATION FOR A BETTER FEATURE </h2><br />
                </div>

            </form>
        </div>
    )
}

export default McqPage2