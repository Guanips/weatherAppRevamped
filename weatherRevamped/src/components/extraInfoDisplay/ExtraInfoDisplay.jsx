import '../extraInfoDisplay/ExtraInfoDisplay.css'

const ExtraInfoDisplay = (props) => {
    return (
        <>
            <p className='extraInfo'><b>{props.title}</b>{props.data}</p>
        </>
    )
}

export default ExtraInfoDisplay