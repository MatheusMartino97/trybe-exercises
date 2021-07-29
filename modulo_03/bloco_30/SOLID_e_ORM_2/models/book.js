module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Product', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER
  })

  return Book;
};