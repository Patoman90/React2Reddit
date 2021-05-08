import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from './postsSlice';

export const Posts = () => {
    const dispatch = useDispatch();
    useEffect( () => {
        dispatch(fetchPosts(), [dispatch])
    })
    return (
        <div>
            <h3>...Memes...</h3>
        </div>
    )
}














