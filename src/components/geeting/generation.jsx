
import Student from "../students/students";
import studentsInfo from "../students/students-info";

/*
Las props (propiedades) son un mecanismo para pasar datos de 
un componente padre a un componente hijo.
Las props son unidireccionales
*/

export default function Generation() {
    return (
        <>
            <h2>Generation</h2>
            <p>
                En Generation aprendí con pasión,
                Java Dev Jr. fue mi canción.
                Bootcamp brillante, conocimientos al alza,
                <strong> Generation MX</strong>, ¡mi ruta en casa!
            </p>
            <h4 id="Subtitle">Participantes</h4>
            { studentsInfo.map( students => <Student key={students.id} info={students} /> ) }
        </>
    )
}