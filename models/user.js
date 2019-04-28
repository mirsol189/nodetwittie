module.exports = (sequelize, DataTypes) => (
    sequelize.define('user', {
        email: {
            type: DataTypes.STRING(40),
            allowNull: false,
            unique: true,
        },
        nickname: {
            type: DataTypes.STRING(15),
            allowNull: true,
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        provider: {
            type: DataTypes.STRING(10),
            allowNull: true,
            defaultValue: 'local',
        },
    }, {
        timestamps: true,
        paranoid: true,
    })
);