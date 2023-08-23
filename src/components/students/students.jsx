import React from "react";


const Student = ({info, children}) => {
    console.log(info);
    return (
        <>
            <a href={info.url}>
                <h4>{info.name}</h4>
            </a>
            <p> Egresad@: {info.isGradute ? " Si " : " No "}</p>
            <p>{children}</p>
        </>
    )
};

export default Student;