import { memo } from "react"
const Titulo = ({ children }) => {
    console.log('Rendering title', children)

    return(
        <div>
            {children}
        </div>
    )
}

export default memo(Titulo)