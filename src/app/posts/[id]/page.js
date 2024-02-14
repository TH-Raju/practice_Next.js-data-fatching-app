import Link from "next/link";

const DetailPage = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const result = await res.json();
  console.log(result);
  return (
    <div>
      <h1>Detail Page</h1>
      <Link href="/posts">
        <button className="btn btn-accent">Primary</button>
      </Link>
    </div>
  );
};

export default DetailPage;
