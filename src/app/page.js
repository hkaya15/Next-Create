import BlogCard from "@/components/BlogCard";
import styles from "./styles.module.css";

async function getPosts() {
  try {
    const response = await fetch("https://dummyjson.com/posts?limit=10");
    return response.json();
  } catch (error) {
    throw new Error(error);
  }

}

export default async function Home() {
  const { posts } = await getPosts();

  return (
    <div className={styles.blogsContainer}>
      {posts.map((item) => {
      
         return <BlogCard key={item.id} {...item} />;
     
      })}
    </div>
  );
}
