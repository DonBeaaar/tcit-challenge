import React from 'react'
import { Box, makeStyles } from '@material-ui/core'
import { FilterPosts } from './components/filterPosts'
import { NewPost } from './components/newPost'
import PostList from './PostList'

const styles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(14)
    }
}))

const PostsApp = () => {
    const classes = styles();
    return (
        <Box className={classes.container}>
            <NewPost />
            <FilterPosts />
            <PostList />
        </Box>
    )
}

export default PostsApp
