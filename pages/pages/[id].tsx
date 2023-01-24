import React from "react"

  export function getStaticPaths() {
    return {
      paths: [{ params: { id: 'test' } }, { params: { id: 'apple' }}, { params: { id: 'orange' } }],
      fallback: false, // can also be true or 'blocking'
    }
  }
  
  // `getStaticPaths` requires using `getStaticProps`
  export async function getStaticProps({params:{id}}) {
    // console.error('getStaticProps', {id})
    return {
      props: { id },
    }
  }
  
  const TestPagesDetailPage:React.FC<{id:string}> = (args) => {
    // console.error('TestPagesDetailPage', args);
    return (
        <div>ID is {args.id}</div>
    )
  }

  export default TestPagesDetailPage;