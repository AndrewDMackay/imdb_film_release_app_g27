
const Film = ({name, url}) => {
    return(
        <>
        <li>
            <a href={url}>{name}</a>
        </li>
        <br></br>
        </>
    )
}

export default Film



