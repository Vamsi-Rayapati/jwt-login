import type { Sequelize } from "sequelize";
import { refreshToken as _refreshToken } from "./refreshToken";
import type { refreshTokenAttributes, refreshTokenCreationAttributes } from "./refreshToken";

export {
  _refreshToken as refreshToken,
};

export type {
  refreshTokenAttributes,
  refreshTokenCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const refreshToken = _refreshToken.initModel(sequelize);


  return {
    refreshToken: refreshToken,
  };
}
