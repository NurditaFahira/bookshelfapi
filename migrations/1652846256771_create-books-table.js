/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable('books', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    name: {
      type: 'TEXT',
      notNull: true,
    },
    year: {
      type: 'INT',
      notNull: true,
    },
    author: {
      type: 'TEXT',
      notNull: true,
    },
    summary: {
      type: 'TEXT',
      notNull: true,
    },
    publisher: {
      type: 'TEXT',
      notNull: true,
    },
    pagecount: {
      type: 'INT',
      notNull: true,
    },
    readpage: {
      type: 'INT',
      notNull: true,
    },
    reading: {
      type: 'BOOLEAN',
      notNull: true,
    },
    insertedat: {
      type: 'TEXT',
      notNull: true,
    },
    finishedat: {
      type: 'TEXT',
      notNull: true,
    },
    finished: {
      type: 'BOOLEAN',
      notNull: true,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('books');
};
