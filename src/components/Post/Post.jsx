import React from 'react';
import styles from './Post.module.css'
import { Link } from "react-router-dom"

function Post(props) {

    return (

        <div className={styles.Post}>
            <div className={styles.card}>
                <h4>{props.title}</h4>
                <Link to={
                    {

                        // ⚠ React Router's link tag allows for a Link element to hold state
                        pathname: `/posts/${props.post._id}`,
                        state: {post: props.post},
                    }
                }>
                    See post 
                </Link>
                <Link to={
                    {
                        pathname: `/posts/${props.post._id}/edit`,
                        state: {post: props.post},
                    }
                }>
                    Edit
                </Link>
            </div>
        </div>

    )
}
export default Post;