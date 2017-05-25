import models from '../../server/models';
import roleSeeds from '../seeders/roleSeeders';
import userSeeds from '../seeders/userSeeders';
import documentSeeds from '../seeders/documentSeeders';

const seeds = () => {
  models.sequelize.sync({ force: true }).then(() => {
    // Table created
    models.Role.bulkCreate(roleSeeds);
    models.User.bulkCreate(userSeeds, { individualHooks: true }).then(() => {
      models.Document.bulkCreate(documentSeeds);
    });
  });
};

export default seeds();
