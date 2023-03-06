import Head from "next/head";
import client from "../apollo-client";
import { gql } from "@apollo/client";
import Link from "next/link";
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ blogs }) {
  return (
    <>
      <Head>
        <title>Primary Rendering Patterns Demo | Isa Sari</title>
        <meta name="description" content="Created by @devisasari" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <header>
          <h1>
            Use the Buttons Below to Visit a Page with a Different Rendering
            Pattern
          </h1>
        </header>
        <section className={styles.description}>
          <Link href={`/blogs/csr/[csr].js`}>
            <button>CSR</button>
          </Link>

          <Link href={`/blogs/ssr/[ssr].js`}>
            <button>SSR</button>
          </Link>

          <Link href={`/blogs/ssg`}>
            <button>SSG</button>
          </Link>
        </section>
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query AllBlogsQuery {
        blogs {
          id
          slug
          featuredImage {
            id
          }
          title
          author
          realeseDate
          content
        }
      }
    `,
  });

  const { blogs } = data;
  return {
    props: {
      blogs,
    },
  };
};
