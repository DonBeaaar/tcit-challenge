import PostsModel from "../models/Posts";
import { handleError } from '../utils/json'


export const getAllPosts = async (req, res) => {
    try {
        const posts = await PostsModel.findAll();

        res.json({
            ok: true,
            message: 'Listado de los posts',
            posts
        })
    } catch (error) {
        return handleError(res, error);
    }
}

export const createPost = async (req, res) => {
    try {
        const postCreated = await PostsModel.create({ ...req.body }, { fields: ['name', 'description'] });
        res.json({
            ok: true,
            message: 'Post creado correctamente',
            postCreated
        })
    } catch (error) {
        return handleError(res, error);
    }
}

export const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        const projectToDelete = await PostsModel.findByPk(id);
        if (!projectToDelete) {
            return handleError(res, 'No se encuentra el post ingresado');
        }
        await PostsModel.destroy({ where: { id: projectToDelete.id } })

        res.json({
            ok: true,
            message: 'Post eliminado correctamente',
            postDeleted: projectToDelete
        })
    } catch (error) {
        return handleError(res, error);
    }
}