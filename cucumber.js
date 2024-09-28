module.exports = {
    default: {
      formatOptions: {
        snippetInterface: 'async-await'
      },
      paths: [
        './features/*.feature'
      ],
      dryRun: false,
      defaultTimeout: 300000,
      require: [
        './features/support/*.js',
        './features/steps/*.js'
      ],
      parallel: 2
    }
  };