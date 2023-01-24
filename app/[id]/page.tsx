import React from "react";

const TestDetailPage:React.FC<{params:{id:string}}> = ({params:{id}}) => {
    console.error({id});
    return (
        <div>ID is {id}</div>
    )
}

export default TestDetailPage