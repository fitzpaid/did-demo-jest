// NEVER USE THIS - ALWAYS USE A TEST SUITE WHEN WRITING YOUR OWN TESTS!!!!!

const sum = require("./sum");

const assert = (value1, value2) => {
  if (value1 !== value2) throw new Error(`Expected ${value1} to be equal to ${value2}`)
}

const runTests = () => {
  console.log("Runnning Tests....")
  try {
    assert(sum(1, 2), 3);
    console.log("Passed all tests!!!");
  } catch (error) {
    console.error("Failed Test with message ", error.message);
  }
}

runTests();