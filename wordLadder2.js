/*
Word Ladder II

Return all shortest transformation sequences from beginWord to endWord.

💡 Idea
BFS to build graph
Backtrack paths using DFS
*/

var findLadders = function (beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return [];

    const parents = new Map(); // word -> [parent words]
    let level = new Set([beginWord]);
    let found = false;

    while (level.size && !found) {
        const nextLevel = new Set();

        for (const word of level) {
            wordSet.delete(word);
        }

        for (const word of level) {
            for (let i = 0; i < word.length; i++) {
                for (let c = 97; c <= 122; c++) {
                    const newWord =
                        word.slice(0, i) +
                        String.fromCharCode(c) +
                        word.slice(i + 1);

                    if (wordSet.has(newWord)) {
                        if (!parents.has(newWord)) {
                            parents.set(newWord, []);
                        }
                        parents.get(newWord).push(word);

                        nextLevel.add(newWord);
                        if (newWord === endWord) {
                            found = true;
                        }
                    }
                }
            }
        }

        level = nextLevel;
    }

    const result = [];

    function dfs(word, path) {
        if (word === beginWord) {
            result.push([...path].reverse());
            return;
        }
        for (const p of parents.get(word) || []) {
            dfs(p, [...path, p]);
        }
    }

    if (found) {
        dfs(endWord, [endWord]);
    }

    return result;
};
