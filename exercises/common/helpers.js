function wrapMessage(message, styling) {
  let style = '';

  if (styling && typeof styling === 'object') {
    style = Object.entries(styling).reduce(
      (acc, val) => `${acc ? acc + ',' : ''}${val[0]}:${val[1]}`,
      ''
    );
  }

  let wrappedMessage = `<!doctype html><html><body><h1`;
  if (style) {
    wrappedMessage += ` style="${style}"`;
  }
  wrappedMessage += `>${message}</h1></body></html>`;

  return wrappedMessage;
}

module.exports = { wrapMessage };
