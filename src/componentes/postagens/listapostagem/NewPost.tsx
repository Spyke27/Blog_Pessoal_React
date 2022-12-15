import React from "react";
import { Link } from "react-router-dom";
import "./ListaPostagem.css";

function NewPost(){
    return (
        <>
        <Link to='/formularioPostagem'>
            <button className="icon-btn add-btn">
                <div className="add-icon"></div>
                <div className="btn-txt">New Post</div>
            </button>
        </Link>
        </>
    )
}
export default NewPost;