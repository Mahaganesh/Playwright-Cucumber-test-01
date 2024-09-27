module.exports = {
    default: {
      formatOptions: {
        snippetInterface: 'async-await'
      },
      paths: [
        './features/*.feature'
      ],
      dryRun: false,
      require: [
        './steps/*.js'
      ],
      parallel: 2
    }
  };