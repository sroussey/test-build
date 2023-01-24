import Link from "next/link";
import React from "react";


const IndexPage = () => {
  
    return (
        <>
        <div>
            <Link href="/app">app</Link>
        </div>
        <div>
            <Link href="/pages">pages</Link>
        </div>
        </>
    )
}

export default IndexPage