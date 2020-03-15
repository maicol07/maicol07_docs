/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
    title: 'Maicol07 Docs',
    tagline: 'Documentation for all Maicol07 Projects',
    url: 'https://docs.maicol07.it',
    baseUrl: '/',
    projectName: 'maicol07-docs',
    organizationName: 'maicol07',
    headerLinks: [
        {doc: 'introduction', label: 'Docs'},
        {doc: 'translating-projects', label: 'Translators Guide'},
        {page: 'help', label: 'Help'},
        {languages: true},
        {search: true},
    ],
    algolia: {
        apiKey: '6d79125e7841422a8cc5f651abfdcde3',
        indexName: 'docs',
        algoliaOptions: {
            facetFilters: ['language:LANGUAGE', 'version:VERSION'],
        },
    },
    translationRecruitingLink: 'https://maicol07.crowdin.com/maicol07-docs',
    repoUrl: 'https://github.com/maicol07/maicol07_docs',
    headerIcon: 'img/icon.png',
    footerIcon: 'img/icon.png',
    favicon: 'img/favicon.ico',
    colors: {
        primaryColor: '#4D698E',
        secondaryColor: '#00428e',
    },
    copyright: `Copyright © 2019-${new Date().getFullYear()} Maicol07`,
    highlight: {
        // Highlight.js theme to use for syntax highlighting in code blocks.
        theme: 'default',
    },
    scripts: ['https://buttons.github.io/buttons.js'],
    onPageNav: 'separate',
    cleanUrl: true,
    ogImage: 'img/undraw_online.svg',
    twitterImage: 'img/undraw_tweetstorm.svg',
    enableUpdateBy: true,
    enableUpdateTime: true,
};

module.exports = siteConfig;
