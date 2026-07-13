/**
 * Problem: Group Anagrams
 * ------------------------
 * Given an array of strings, group the anagrams together.
 * The order of the groups and the strings within each group does not matter.
 *
 * Examples:
 *   groupAnagrams(["eat","tea","tan","ate","nat","bat"])
 *     → [["eat","tea","ate"], ["tan","nat"], ["bat"]]
 *   groupAnagrams([""])        → [[""]]
 *   groupAnagrams(["a"])       → [["a"]]
 */

// TODO: Implement this function
function groupAnagrams(strs: string[]): string[][] {
  // Your code here
  throw new Error("Not implemented");
}

// ---------- TESTS ----------

function runTests() {
  const tests = [
    {
      input: ["eat","tea","tan","ate","nat","bat"],
      expected: [["eat","tea","ate"], ["tan","nat"], ["bat"]],
    },
    { input: [""], expected: [[""]] },
    { input: ["a"], expected: [["a"]] },
  ];

  let passed = 0;
  for (const { input, expected } of tests) {
    try {
      const result = groupAnagrams(input);
      // Sort groups by length for comparison
      const sortGroup = (g: string[][]) =>
        g.map((arr) => [...arr].sort()).sort((a, b) => a[0]?.localeCompare(b[0] ?? "") ?? 0);
      const pass = JSON.stringify(sortGroup(result)) === JSON.stringify(sortGroup(expected));
      if (pass) {
        console.log(`✅ groupAnagrams([${input}]) = ${JSON.stringify(result)}`);
        passed++;
      } else {
        console.log(`❌ groupAnagrams([${input}]) = ${JSON.stringify(result)} (expected ${JSON.stringify(expected)})`);
      }
    } catch (e: any) {
      console.log(`❌ groupAnagrams([${input}]) threw: ${e.message}`);
    }
  }
  console.log(`\n${passed}/${tests.length} tests passed`);
}

runTests();