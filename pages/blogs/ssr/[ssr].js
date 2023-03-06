import React from "react";
import { useRouter } from "next/router";
import { gql } from "@apollo/client";
import client from "../../../apollo-client";
import Head from "next/head";
import Link from "next/link";

export default function Ssr({ blog }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Head>
        <title>Server-side Rendered Post</title>
      </Head>
      <main className="container">
        <header>
          <Link href="/">
            <button>Go Back</button>
          </Link>
          <h1>Server-side Rendered Post</h1>
        </header>
        <section>
          <div>
            <img src={blog.featuredImage.url} alt={blog.title} style={{width: 700, height: 300, display: 'block', margin: 'auto'}}/>
            <br />
            <h2>{blog.title}</h2>
            <p>{blog.author}</p>
            <p>{blog.realeseDate}</p>
            <p>{blog.content}</p>
          </div>
        </section>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const { data } = await client.query({
    query: gql`
      query BlogQuery {
        blog(where: { id: "clevu1g86gquw0burkgxktw7g" }) {
          featuredImage {
            id
            url
          }
          title
          author
          realeseDate
          content
        }
      }
    `,
    variables: {
      slug,
    },
  });
  const { blog } = data;
  return {
    props: {
      blog,
    },
  };
}
