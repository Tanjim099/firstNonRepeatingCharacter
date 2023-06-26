function firstNonRepeatingCharacter(s){
    const charCount = {};
    for(let i=0; i<s.length; i++){
        charCount[s[i]] = (charCount[s[i]] || 0) + 1;
    }
    for(let i=0; i<s.length; i++){
        if(charCount[s[i]] === 1){
            return i
        }
    }
    return -1
}
const s = "leetcode";
// const s = "loveleetcode";
// const s = "aabb"
console.log(firstNonRepeatingCharacter(s));