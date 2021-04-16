import React, { useState } from 'react'
import { Box, Button, makeStyles, TextField } from '@material-ui/core'
import { useDispatch } from 'react-redux';
import { filterPosts } from '../redux/ducks/posts';

const styles = makeStyles((theme) => ({
    container: {
        marginBottom: theme.spacing(5)
    },
    filterInput: {
        width: '300px'
    }
}))

export const FilterPosts = () => {
    const classes = styles();
    const dispatch = useDispatch();

    const [nameFilter, setNameFilter] = useState('');

    const handleFilterChange = ({ target }) => {
        setNameFilter(target.value);
        if (target.value === '') {
            dispatch(filterPosts({ regex: ''}))
        }
    }

    const handleFilterNamePost = () => {
        setNameFilter(nameFilter.trim());
        dispatch(filterPosts({ regex: nameFilter.toLowerCase().trim() }))
    }

    return (
        <Box className={classes.container} display='flex' flexDirection='row' justifyContent="space-between">
            <TextField
                className={classes.filterInput}
                variant='outlined'
                label='Filtro de nombre'
                value={nameFilter}
                onChange={handleFilterChange}
            />
            <Button variant='outlined' onClick={handleFilterNamePost}>
                Filtrar
            </Button>
        </Box>
    )
}
