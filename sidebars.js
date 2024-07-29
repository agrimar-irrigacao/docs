/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'doc',
      label: 'Introdução',
      id: 'start',
    },      
    {
      type: 'category',
      label: 'Menu do Irrifert',
      items: [
        {
          type: 'doc',
          id: 'minha-conta',
        },
        {
          type: 'doc',
          id: 'simulador',
        },
        {
          type: 'doc',
          id: 'sistema-producao',
        },
        {
          type: 'doc',
          id: 'sistema-irrigacao',
        },
        {
          type: 'doc',
          id: 'sistema-fertirrigacao',
        },
      ]
    },
    {
      type: 'doc',
      id: 'privacy-policy',
    },      
    {
      type: 'doc',
      id: 'terms-of-use',
    },      
  ],
};

module.exports = sidebars;
