import React from "react";

// export const dynamic = 'force-static'

const AppTestDetailPage:React.FC<{params:{id:string}}> = (args) => {
    console.error('AppTestDetailPage', args);
    return (
        <div>ID is {args.params.id}</div>
    )
}

export default AppTestDetailPage