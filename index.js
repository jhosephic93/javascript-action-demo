const core = require('@actions/core');

try {
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hola, ${nameToGreet}!`);
} catch (error) {
  core.setFailed(error.message);
}