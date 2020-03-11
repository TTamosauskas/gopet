module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gopet',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
