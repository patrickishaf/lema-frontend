import "@/styles/UserPostCard.css"
import useVector from "@/hooks/useVector"

export default function UserPostCard({ post }) {
  const { delBtn } = useVector();

  return (
    <div className="user-post-card border-solid border rounded-lg p-6 relative">
      <button className="del-btn absolute h-3 w-3">
        <img src={delBtn} alt="delete post" className="h-full w-full" />
      </button>
      <h2 className="title custom-pale-txt text-lg font-medium mb-4">{post.title}</h2>
      <p className="body custom-pale-txt text-sm">{post.body}</p>
    </div>
  )
}