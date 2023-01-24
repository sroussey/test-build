import React from "react";

// export const dynamic = 'force-static'

export const generateStaticParams = () => {
    return [ { id: 'test' } ,{ id: 'apple' }, {  id: 'orange' } ];
  };

const AppTestDetailPage:React.FC<{params:{id:string}}> = (args) => {
    console.error('AppTestDetailPage', args);
    return (
        <div>ID is {args.params.id}</div>
    )
}

export default AppTestDetailPage