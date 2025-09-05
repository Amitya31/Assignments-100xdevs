export default async function Postss({params}:any){
    const postId = (await params).postId
    return(
        <div>posts {JSON.stringify(postId)}</div>
    )
}