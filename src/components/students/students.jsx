import React from "react";


const Student = ({info}) => {
    console.log(info);
    return (
        <>
            <a href={info.url}>
                <h4>{info.name}</h4>
            </a>
            <p> Egresad@: {info.isGradute ? " Si " : " No "}</p>
        </>
    )
};

export default Student;