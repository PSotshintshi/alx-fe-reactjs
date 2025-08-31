import React from "react";
import { useQuery } from "@tanstack/react-query";


const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

function PostsComponent() {
  const { data, error, isLoading, isError, isFetching, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    cacheTime: 1000 * 60 * 5,         
    staleTime: 1000 * 30,              
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div className="max-w-2xl w-full bg-white shadow rounded p-4">
      <h2 className="text-xl font-bold mb-4">Posts</h2>


      <button
        onClick={() => refetch()}
        className="mb-4 bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Refetch Posts
      </button>

      {isFetching && <p className="text-gray-500 text-sm">Updating...</p>}

      <ul className="space-y-2 max-h-96 overflow-y-auto">
        {data.map((post) => (
          <li key={post.id} className="border p-2 rounded">
            <h3 className="font-semibold">{post.title}</h3>
            <p className="text-sm text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
