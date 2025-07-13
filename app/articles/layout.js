export default function ({children}){
    return(
        <>
        <div>
            <h1>Layout Component</h1>
        </div>
        <div className="content">
            {children} 
        </div>
        </>
    )
}