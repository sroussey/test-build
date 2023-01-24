import React from "react";

const TestDetailPage:React.FC<{params:{id:string}}> = (args) => {
    console.error(args);
    return (
        <div>ID is {args.params.id}</div>
    )
}

export default TestDetailPage