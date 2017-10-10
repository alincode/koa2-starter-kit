import Sequelize from 'sequelize';

export default class User {
    static getModel(sequelize) {
        return sequelize.define('User', {
            username: Sequelize.DataTypes.STRING,
            email: Sequelize.DataTypes.STRING,
            password: Sequelize.DataTypes.STRING
        },{
            classMethods: {
                // associate: (models) => {
                // }
            }
        });
    }
}
