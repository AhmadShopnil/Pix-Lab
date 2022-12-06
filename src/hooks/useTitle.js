import { useEffect } from "react"

const useTitle = (title) => {
    // document.title = title

    useEffect(() => {
        document.title = `${title} - Pix Lab`
    }, [title])


}


export default useTitle