import React from "react";
import "./style.css";

export const Input = props => {
    return (
        <div className="form-control">
             <input className="form-control" {...props} />
        </div>
    );
};

export const FormBtn = props => {
    return (
        <buton {...props} style={{ marginBottom: 12 }} className="btn button">
            {props.children}
        </buton>
    );
};