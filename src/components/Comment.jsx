import styles from './Comment.module.css';
import { Trash, ThumbsUp } from 'phosphor-react';

export function Comment() {
    return(
        <div className={styles.comment}>
            <img src='https://github.com/vhpinto.png' alt=''/>

            <div className={styles.commentBox}>
                <div className={styles.commentTextArea}>
                    <header>
                        <div className={styles.commentAuthorAndTime}>
                            <strong>Vitor Hugo</strong>
                            <time title='11 de maio às 08:13' dateTime='2022-05-11 08:13:30'>Cerca de 1h atrás</time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!!</p>
                </div>
                <footer>
                    <ThumbsUp />
                    Aplaudir
                    <span>20</span>
                </footer>
            </div>
        </div>
    )
}