import styles from './Comment.module.css';
import { Trash, ThumbsUp } from 'phosphor-react';
import { Avatar } from './Avatar';

export function Comment({ content }) {
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src='https://github.com/vhpinto.png' />
            
            <div className={styles.commentBox}>
                <div className={styles.commentTextArea}>
                    <header>
                        <div className={styles.commentAuthorAndTime}>
                            <strong>Vitor Hugo</strong>
                            <time title='11 de maio às 08:13' dateTime='2022-05-11 08:13:30'>Cerca de 1h atrás</time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
                <footer>
                    <button title='Dar like no comentário'>
                        <ThumbsUp size={24}/>
                        Aplaudir
                        <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}