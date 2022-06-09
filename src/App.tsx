import "./global.css";
import styles from './App.module.css';

import { Header } from './components/Header'
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'http://github.com/ArliMachado.png',
      name: 'Arli Machado',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, vento da Rocketseat. O nome do projeto é DoctorCare'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-06-06 17:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'http://github.com/ArliMachado.png',
      name: 'Arli Machado',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, vento da Rocketseat. O nome do projeto é DoctorCare'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-06-06 17:00')
  }
]

function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => {
              return (
                <Post 
                key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </div>
    )
}

export default App
