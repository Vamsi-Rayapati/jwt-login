import { Sequelize, DataTypes, Model } from 'sequelize';

interface UserAttributes {
    user_id?: string;
    name: string;
    email: string;
}

// Define the User model
class User extends Model<UserAttributes> implements UserAttributes {
    user_id!: string;
    name!: string;
    email!: string;

    static initModel(sequelize: Sequelize) {
        User.init(
            {
              user_id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true
              },
              name: {
                type: DataTypes.STRING(70),
                allowNull: false,
              },
              email: {
                type: DataTypes.STRING(70),
                allowNull: false,
                unique: true,
                validate: {
                  isEmail: true,
                },
              },
            },
            {
              sequelize,
              tableName: 'users',
            }
        );

    }
}

export default User;

