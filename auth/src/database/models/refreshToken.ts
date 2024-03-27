import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface refreshTokenAttributes {
  id: any;
  token: string;
  user_id: any;
}

export type refreshTokenPk = "id";
export type refreshTokenId = refreshToken[refreshTokenPk];
export type refreshTokenOptionalAttributes = "id";
export type refreshTokenCreationAttributes = Optional<refreshTokenAttributes, refreshTokenOptionalAttributes>;

export class refreshToken extends Model<refreshTokenAttributes, refreshTokenCreationAttributes> implements refreshTokenAttributes {
  id!: any;
  token!: string;
  user_id!: any;


  static initModel(sequelize: Sequelize.Sequelize): typeof refreshToken {
    return refreshToken.init({
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: () => Sequelize.UUIDV4(),
        allowNull: false
      },
      token: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      user_id: {
        type: DataTypes.UUID,
        allowNull: false
      }
  }, {
    sequelize,
    tableName: 'refresh_tokens',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
