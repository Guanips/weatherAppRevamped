import '../secondaryTempDisplay/SecondaryTempDisplay.css'

const SecondaryTempDisplay = (props) => {
    return (
        <>
            <p className='secondaryTemp'><b>{props.title}</b><br/>{props.data}</p>
        </>
    )
}

export default SecondaryTempDisplay