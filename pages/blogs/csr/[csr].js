import Head from "next/head";
import Link from "next/link";
import ClientOnly from "@/components/ClientOnly";
import Blogs from "@/components/Blogs";

export default function Csr() {
  return (
    <>
      <Head>
        <title>Client-side Rendered Post</title>
      </Head>
      <main className="container">
        <header>
          <Link href="/">
            <button>Go Back</button>
          </Link>
          <h1>Client-side Rendered Post</h1>
        </header>
        <section>
          <ClientOnly>
            <Blogs />
          </ClientOnly>
        </section>
      </main>
    </>
  );
}

