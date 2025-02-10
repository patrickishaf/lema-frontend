import "../styles/UsersPostsPage.css";
import { useState } from "react";
import UserPostCard from "./UserPostCard";
import { getPosts } from "@/data/posts";
import useVector from "@/hooks/useVector";
import uuid from "react-uuid";
import NewPostBtn from "./NewPostBtn";
import { useNavigate } from "react-router-dom";

export default function UsersPostsPage() {
  const {prevBtn} = useVector();
  const [posts, setPosts] = useState(getPosts());
  const navigateTo = useNavigate();

  return (
    <div className="users-posts-page pt-44 pb-44">
      <button className="flex items-center gap-3" onClick={() => {
        navigateTo(-1);
      }}>
        <img src={prevBtn} alt="back to users" />
        <p className="custom-pale-txt text-sm font-semibold">Back to Users</p>
      </button>
      <h1 className="page-title text-6xl font-medium my-4">James Sunderland</h1>
      <p className="email text-sm custom-pale-txt mb-6">james.sunderland@acme.corp <span className="font-medium">• 4 posts</span> </p>
      <main className="cards-box w-full grid grid-cols-3 gap-6">
        <NewPostBtn />
        {
          posts.map((post) => <UserPostCard key={uuid()} post={post} />)
        }
      </main>
    </div>
  )
}