const visit = require('unist-util-visit');
const is = require('unist-util-is');

const URL_TO_REMOVE = 'https://jajp-newrelic-docs.onelink-translations.com';

const jpLinks = () => (tree) => {
  visit(
    tree,
    (node) => is(node, 'link'),
    (node) => {
      if (node.url.includes(URL_TO_REMOVE)) {
        const url = new URL(node.url);

        node.url = `https://docs.newrelic.co.jp${url.pathname}`;
      }
    }
  );
};

module.exports = jpLinks;
