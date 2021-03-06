import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'

// SERVER SIDE RENDERING
export async function getServerSideProps() {
  let result = await fetch('https://jsonplaceholder.typicode.com/todos')
  let todos = await result.json();

  return {
    props: {
      todos: todos
    }
  }
}

export default function Home({ todos }) {
console.log(todos)

  /*const [data, setData] = useState([]);

  useEffect(() => {
    const handleData = async () => {
      let result = await fetch('https://jsonplaceholder.typicode.com/todos')
      let val = await result.json();
      setData(val)
    }
    setTimeout(() => handleData(), 2000)
    
  }, [])
  */

  if(todos && !todos.length) {
    return <h2>Loading...</h2>
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>  
      {
        todos?.map(el => {
          return (
            <div key={el.id}>
              <p>{el.id}. {el.title}</p>
            </div>
          )
        })
      }
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <Link href="/naveen">My blog</Link>
        </h1>
      </main>
    </div>
  )
}
