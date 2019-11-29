function toTitleCase(inputText){
    let text = inputText;
        text = text.toLowerCase()
        .split(' ')
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' '); 
    return text;
}

function K2F(k){
  return Math.floor(9/5 * (k-273) + 32);

}