module.exports = {
  installCommand: () => "pnpm install",
  publishCommand: ({ isYarn, tag, defaultCommand, dir }) =>
    `${defaultCommand} --access public`,
};
