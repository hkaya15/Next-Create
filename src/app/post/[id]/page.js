import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import { notFound } from "next/navigation";

async function getPost(id) {
  const response = await fetch(`https://dummyjson.com/posts/${id}`);
  return response.json();
}

async function Detail({ params }) {
  const { title, body, id } = await getPost(params.id);

  return (
    title ?
    <div className={styles.blogContainer}>
      <div className={styles.cardImage}>
        <Image
          src={`https://picsum.photos/200/300?random=${id}`}
          alt={title}
          fill
        />
      </div>
      <h1 className={styles.title}>{title}</h1>
      <p>{body}</p>
    </div> : notFound()
  );
}

export default Detail;
