import React from 'react';
import Post from '../PersonalView/PersonalView'
import styles from './Posts.module.css'


function Posts (props) {
    return <div className={styles.Posts}>
    Posts
    <Post />
    </div>
}

export default Posts