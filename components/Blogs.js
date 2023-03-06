import { useQuery, gql } from "@apollo/client";

const QUERY = gql`
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
`;

export default function Blogs() {
  const { loading, error, data } = useQuery(QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { blog } = data;

  return (
    <div>
      <main>
        <section>
          <div>
            <img src={blog.featuredImage.url} alt={blog.title} style={{width: 700, height: 300, display: 'block', margin: 'auto'}} />
            <br />
            <h2>{blog.title}</h2>
            <p>{blog.author}</p>
            <p>{blog.realeseDate}</p>
            <p>{blog.content}</p>
          </div>
        </section>
      </main>
    </div>
  );
}
