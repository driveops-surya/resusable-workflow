const core = require('@actions/core');

async function run() {
  try {
    const name = core.getInput('name');
    console.log(`👋 Hello, ${name}! This is your custom action running!`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
