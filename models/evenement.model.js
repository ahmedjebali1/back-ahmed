module.exports = (sequelize, Sequelize) => {
    const Evenement = sequelize.define("Evenement", {
      titre: {
        type: Sequelize.STRING,
      },
    
      
      discription: {
        type: Sequelize.STRING,
      },
      datedebut: {
        type: Sequelize.STRING,
      },
      datefin: {
        type: Sequelize.STRING,
      },
      nbrticket: {
        type: Sequelize.INTEGER,
      },
      disponibilite: {
        type: Sequelize.BOOLEAN,
      },
    
      image: {
        type: Sequelize.STRING,
      },
    });
  
    return Evenement;
  };