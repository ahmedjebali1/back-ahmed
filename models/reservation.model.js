module.exports = (sequelize, Sequelize) => {
    const Reservation = sequelize.define("Reservation", {
      non_bp: {
        type: Sequelize.STRING,
      },
    
      
      adresse: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      logitude: {
        type: Sequelize.STRING,
      },
      latitude: {
        type: Sequelize.FLOAT,
      },
      horaire: {
        type: Sequelize.FLOAT,
      },
      frais: {
        type: Sequelize.STRING,
      },
    });
  
    return Reservation;
  };