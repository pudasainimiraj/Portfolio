// Set NEXT_PUBLIC_BASE_PATH=/Portfolio when the site is served from
// https://pudasainimiraj.github.io/Portfolio/ (see the deploy script in package.json).
// Leave it unset for a custom domain served from the root.
module.exports = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
};
