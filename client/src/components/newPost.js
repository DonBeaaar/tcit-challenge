import React, { useState } from 'react'
import { Box, Button, makeStyles, TextField } from '@material-ui/core'
import { useDispatch } from 'react-redux';
import { startAddPost } from '../functions/posts';

const styles = makeStyles((theme) => ({
    container: {
        marginBottom: theme.spacing(5)
    },
    textInput: {
        width: '300px'
    }
}));


export const NewPost = () => {
    const classes = styles();
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleAddPost = () => {
        if (!name || !description) {
            return;
        }
        dispatch(startAddPost({ name, description }))
        setName('');
        setDescription('')
    }

    return (
        <Box className={classes.container} display='flex' flexDirection='row' justifyContent="space-between">
            <TextField
                className={classes.textInput}
                variant='outlined'
                label='Nombre'
                name='name'
                value={name}
                onChange={({ target }) => setName(target.value)}
            />
            <TextField
                className={classes.textInput}
                variant='outlined'
                label='Descripción'
                name='description'
                value={description}
                onChange={({ target }) => setDescription(target.value)}
            />
            <Button variant='contained' color='primary' onClick={handleAddPost}>
                Crear
            </Button>
        </Box>
    )
}
