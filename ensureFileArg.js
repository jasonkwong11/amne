function ensureFileArg() {
  if (process.argv.length < 3) {
    console.log('Error: You must enter a filename: Usage: node ' + process.argv[1] + ' FILENAME');
    process.exit(1);
  }
}

module.exports = ensureFileArg;