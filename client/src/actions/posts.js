import * as api from '../api'
import { CREATE, DELETE, LIKE_POST, READ, UPDATE } from '../constants/actionTypes'

//ACTION CREATORS
export const getPosts = () => async (dispatch) => {
    try {
        const {data} = await api.fetchPosts()
        dispatch({type: READ, payload: data})
    } catch (error) {
        console.log(error?.message)
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const {data} = await api.createPost(post)
        dispatch({type: CREATE, payload: data})
    } catch (error) {
        console.log(error?.message)
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const {data} = await api.updatePost(id, post)
        dispatch({type: UPDATE, payload: data})
        dispatch(getPosts())
    } catch (error) {
        console.log(error?.response?.data?.message)
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id)
        dispatch({type: DELETE, payload: id})
    } catch (error) {
        console.log(error)
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const {data} = await api.likePost(id)
        dispatch({type: LIKE_POST, payload: data})
    } catch (error) {
        console.log(error)
    }
}