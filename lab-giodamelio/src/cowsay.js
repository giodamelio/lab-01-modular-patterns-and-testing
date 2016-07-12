module.exports = function(input) {
  const topOfBubble = '╔' + '═'.repeat(input.length + 2) + '╗\n';
  const transformedInput = '║ ' + input + ' ║\n';
  const bottomOfBubble = '╚═╤' + '═'.repeat(input.length) + '╝';
  const body = `
  │       ,-^-.
  │       !oYo!
  ╰───── /./=\\.\\______
            ##        )\\/\\
             ||-----w||
             ||      ||
             Vader Cow!
  `;

  return topOfBubble + transformedInput + bottomOfBubble + body;
};
