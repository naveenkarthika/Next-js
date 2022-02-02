import React from "react";
import { useRouter } from 'next/router'

function Router() {
  const router = useRouter();
  console.log('router',router)

  const handlerRouter = () => {
    router.replace('/')
  }
  return (
    <div>
      <h2>Router  page</h2>
      <p>{router.query.name} -- {router.query.subname} -- {router.query.filename}</p>
      <button onClick={() => handlerRouter()}>Home</button>
    </div>
  );
}

export default Router;
