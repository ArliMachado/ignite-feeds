import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react';
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

interface ICommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment ({ content, onDeleteComment }: ICommentProps) {

  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    });
  }

  return (
    <div className={styles.comment}>
          <Avatar hasBorder={false} src="http://github.com/ArliMachado.png" alt=""/>

          <div className={styles.commentBox}>
            <div className={styles.commentContent}>
              <header>
                <div className={styles.authorAndTime}>
                  <strong>Arli Machado</strong>
                  <time title='03 de Junho às 23:00h' dateTime='2022-06-03 23:00:00'>Cerca de 1h atrás</time>
                </div>
                
                <button onClick={handleDeleteComment} title='Deletar comentário'>
                  <Trash size={24}/>
                </button>
              </header>

              <p>{content}</p>
            </div>
            <footer>
              <button onClick={handleLikeComment}>
                <ThumbsUp />
                Aplaudir <span>{likeCount}</span>
              </button>
              
            </footer>
          </div>

    </div>
  )
}