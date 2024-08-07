

import React from 'react';
import './Preview.css';
import { useLocation, useNavigate } from 'react-router-dom';
// ---------------------state creation --------------------------------//
export default function Preview() {
    const location = useLocation();
    const { arra } = location.state || {}; // Destructure 'arra' from state
 // ----------------------navigate declared -----------------------------//
    const navigate = useNavigate();
 // -------------------------Logout button-------------------------------//
    const handleUppLogout = () => {
        navigate('/');
    }
 //---------------------------Edit button ------------------------------// 
    const handleEdit = (item, index) => {
        navigate('/McqPage2', { state: { question: item.textvalue, radiomcq: item.radiomcq, index, existingArr: arra } });
    }
// ---------------------main structure of the code----------------------------// 
    return (
        <div id="main-container">
            <nav className="navbar">
                <button id="lg-out" onClick={handleUppLogout}>Logout</button>
            </nav>
            {/* -------------------------Or functionanlity whatto display and what to not--------------------- */}
            <h1>MCQ's Preview</h1>
            <div id="preview-container">
                {arra && arra.length > 0 ? (
                    arra.map((item, index) => (
                        <div key={index}>
                            <textarea
                                name=""
                                id="preview-text"
                                cols={20}
                                rows={5}
                                defaultValue={item.textvalue.question}
                            />
                            <br />
                            <textarea
                                name=""
                                id="preview-text"
                                cols={20}
                                rows={2}
                                defaultValue={item.radiomcq}
                            />
                            <br />
                            <button className="btn3" onClick={() => handleEdit(item, index)}>Edit</button>
                        </div>
                    ))
                ) : (
                    <p>No data available</p>
                )}
            </div>
        </div>
    );
}

