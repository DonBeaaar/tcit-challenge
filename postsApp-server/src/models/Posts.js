import Sequelize from 'sequelize';
import { sequelize } from '../database/database'

const PostsModel = sequelize.define('posts', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    description: {
        type: Sequelize.TEXT
    }
}, {
    timestamps: false
});

export default PostsModel;