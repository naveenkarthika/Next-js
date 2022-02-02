import { useRouter } from "next/router";

//RUN ON SERVER ONLY
export async function getStaticProps() {
  return {
    revalidate: 10,
    props: {
      number: Math.round(Math.random() * 10),
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          name: "naveen",
        },
      },
      {
        params: {
          name: "kumar",
        },
      },
    ],
    fallback: true, // allow any params name, if it false only allowed above mentioned paths otherwise restrict the params name redirect to 404 page
  };
}

export default function DynamicFun(props) {
  const router = useRouter();

  if(router.isFallback) {
    return <h2>Loading...</h2>
  }

  return (
    <div>
      <h2>Hey this dynamic Page!!! - {props.number}</h2>
    </div>
  );
}
