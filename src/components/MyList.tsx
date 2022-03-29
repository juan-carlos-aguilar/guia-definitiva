import { memo } from 'react';

const Li = ({ fullname }) => {
    console.log(`Render ${fullname}`)

    return (
        <li>
            {fullname}
        </li>
    )
}

const MLi = memo(Li)

const MyList = ({ data }) => {
    console.log('Render list')
    return(
        <ul>
            {data.map(x =>
                <MLi 
                    key={x.name + x.lastname}
                    fullname={`${x.name} ${x.lastname}`}
                />
            )}
        </ul>
    )
}

export default MyList;