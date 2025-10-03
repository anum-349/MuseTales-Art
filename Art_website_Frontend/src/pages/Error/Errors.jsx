import Error from "./Error"
export default function Errors({error = 500}) {
    const errors = [
        {
            name: "Server Error",
            errorNo: 500,
            detail: "Internal Server Error",
            summary: "The server encuntered an internal server error or misconfiguration."
        },{
            name: "Page does'nt exists",
            errorNo: 404,
            detail: "Not Found",
            summary: "The server encuntered an internal server error or misconfiguration."
        }
    ] 
    
    return (
        <>
            {
                error === 404?
                <Error error={errors[1]} />
                :<Error error={errors[0]} />
            }
        </>
    )
}