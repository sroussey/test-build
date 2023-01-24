import Link from "next/link";
import React from "react";

export const generateStaticParams = async () => {
    return ['test','apple', 'orange'];
  };
  
const IndexPage = async () => {
  const ids = await generateStaticParams();
    return (
        <div>
          {ids.map(id=><div key={id}><Link href={`/${id}`}>{id}</Link></div>)}
        </div>
    )
}

export default IndexPage