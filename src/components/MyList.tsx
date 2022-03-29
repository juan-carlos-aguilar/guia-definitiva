const Li = ({ fullname }) => {
    console.log(`Render ${fullname}`)

    return (
        <li>
            {fullname}
        </li>
    )
}

const MyList = ({ data }) => {
    console.log('Render list')
    return(
        <ul>
            {data.map(x =>
                <Li 
                    key={x.name + x.lastname}
                    fullname={`${x.name} ${x.lastname}`}
                />
            )}
        </ul>
    )
}

export default MyList;