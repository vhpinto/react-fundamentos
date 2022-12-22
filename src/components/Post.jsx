import { format as formatDate, formatDistanceToNow } from 'date-fns';
import  ptBR from 'date-fns/locale/pt-BR';

import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';

export function Post({author, publishedAt, content}) {
    const publishedAtFormatted = formatDate(publishedAt, "dd 'de' MMMM 'às' HH:mm", {
        locale: ptBR,
    });

    const publishedAtDistanceToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedAtFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedAtDistanceToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(item => {
                    if(item.type === 'paragraph'){
                        return (
                            <p>{item.content}</p>
                        )
                    }
                    else if(item.type === 'link') {
                        return (
                            <p><a href='#'>{item.content}</a></p>
                        )
                    }
                })}
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder='Deixe um comentário'
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>

            </form>
            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    );
}