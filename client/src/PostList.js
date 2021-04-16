import React, { useEffect } from 'react'
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { startDeletePost, startGetPosts } from './functions/posts';


const PostList = () => {

    const { posts } = useSelector(state => state.posts)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startGetPosts())
    }, [dispatch])

    const handleDeletePost = (postID) => {
        dispatch(startDeletePost(postID))
    }

    return (
        <>
            <TableContainer component={Paper}>
                <Table size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Nombre</TableCell>
                            <TableCell align="center">Descripción</TableCell>
                            <TableCell align="center">Acción</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            posts.map(post => (
                                <TableRow key={post.id} hover={true}>
                                    <TableCell align="center">{post.name} </TableCell>
                                    <TableCell align="center">{post.description}</TableCell>
                                    <TableCell align="center">
                                        <Button variant="text" color="secondary" onClick={() => handleDeletePost(post.id)}>
                                            Elimnar
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default PostList
