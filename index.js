const core = require("@actions/core");
const github = require("@actions/github");
const semver = require("semver");

try {
  // `semver-input` input defined in action metadata file.
  const semVer = core.getInput("semver-input");
  console.log(`-> Received input of ${semVer}!`);

  // Validate Semantic version.
  var ret = isSemver(semVer);

  // Return GitHub output.
  core.setOutput("isSemver", ret);

  // Get the JSON webhook payload for the event that triggered the workflow.
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}

// isSemver validates that an input string is Semantic Version.
function isSemver(input) {
  return semver.valid(input) !== null;
}
