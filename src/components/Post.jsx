import { useState } from 'react';
import { format as formatDate, formatDistanceToNow } from 'date-fns';
import  ptBR from 'date-fns/locale/pt-BR';

import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';

export function Post({author, publishedAt, content}) {
    const [ comments, setComments ] = useState([
        'Que interessante!',
    ]);

    const [ commentTextAreaValue, setCommentTextAreaValue ] = useState('');

    const publishedAtFormatted = formatDate(publishedAt, "dd 'de' MMMM 'às' HH:mm", {
        locale: ptBR,
    });

    const publishedAtDistanceToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });

    function handleAddNewComment() {
        event.preventDefault();

        setComments([...comments, commentTextAreaValue]);
        setCommentTextAreaValue('');
    };
    
    function handleCommentTextAreaTextChange() {
        setCommentTextAreaValue(event.target.value);
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(comment =>{
            return comment !== commentToDelete;
        });

        setComments(commentsWithoutDeletedOne);
    }

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
                            <p key={item.content}>{item.content}</p>
                        )
                    }
                    else if(item.type === 'link') {
                        return (
                            <p key={item.content}><a href='#'>{item.content}</a></p>
                        )
                    }
                })}
            </div>

            <form onSubmit={handleAddNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name='commentTextArea'
                    placeholder='Deixe um comentário'
                    value={commentTextAreaValue}
                    onChange={handleCommentTextAreaTextChange}
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>

            </form>
            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment
                            key={comment}
                            content={comment}
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>
        </article>
    );
}