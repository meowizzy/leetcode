const longestCommonPrefix = (strings: Array<string>) => {
  let prefix = strings[0];

  for(let i = 1; i < strings.length; i++){
    while(strings[i].indexOf(prefix) != 0) {
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }

  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "fly"]));