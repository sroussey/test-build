import Link from "next/link";
import React from "react";
import { generateStaticParams } from "./[id]/page";

const AppIndexPage = async () => {
  const ids =  generateStaticParams();
    return (
        <div>
          {ids.map(item => <div key={item.id}><Link href={`/app/${item.id}`}>{item.id}</Link></div>)}
        </div>
    )
}

export default AppIndexPage