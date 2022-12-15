import React from "react";
import { Link } from "react-router-dom";
import "./ListaPostagem.css";

function NewTema(){
    return (
        <>
        <Link to='/formularioTema'>
            <button className="icon-btn add-btn">
                <div className="add-icon"></div>
                <div className="btn-txt">New Theme</div>
            </button>
        </Link>
        </>
    )
}
export default NewTema;