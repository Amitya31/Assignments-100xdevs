import axios from "axios"

export default async function Posts({params}:any) {
    const postId = (await params).posts;

    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    const data = response.data;
    return (
        <div>
        <div>{postId}</div>
        <div>Blog Post {data.title}</div>
        </div>
    )
}