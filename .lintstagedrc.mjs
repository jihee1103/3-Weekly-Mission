export default {
  '.eslintrc.cjs': (filenames) =>
    filenames.some((filename) => filename.includes('.eslintrc.cjs'))
      ? 'eslint "*.{js,jsx,ts,tsx}"'
      : `eslint ${filenames.join(' ')}`,
};
