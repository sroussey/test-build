import Link from "next/link";
import React from "react";
  
const PagesIndexPage =  () => {
    const ids = ['test','apple', 'orange'];
    return (
        <div>
          {ids.map(id=><div key={id}><Link href={`/pages/${id}`}>{id}</Link></div>)}
        </div>
    )
}

export default PagesIndexPage