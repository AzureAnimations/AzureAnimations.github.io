import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  animationsSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: ' Welcome',
    },
    {
      type: 'category',
      label: ' Copilot',
      collapsed: false,
      items: [
        'copilot/intro',
        'copilot/free-vs-work',
        'copilot/web-work-grounded',
        'copilot/m365-copilot-data-access',
      ],
    },
    {
      type: 'category',
      label: ' AI',
      collapsed: true,
      items: [
        'ai/intro',
        'ai/get-started',
        'ai/single-vs-multi-service',
        'ai/containers',
        'ai/ai-search',
        'ai/ai-search-custom-skill',
        'ai/document-intelligence',
        'ai/speech-service',
        'ai/azure-openai-vs-openai',
        'ai/openai-provisioning',
        'ai/chatcompletion-stateless',
        'ai/ms-foundry-hub-projects',
      ],
    },
    {
      type: 'category',
      label: ' Compute',
      collapsed: true,
      items: [
        'compute/intro',
        'compute/app-service',
        'compute/azure-functions',
      ],
    },
    {
      type: 'category',
      label: ' Storage',
      collapsed: true,
      items: [
        'storage/intro',
        'storage/storage-account',
        'storage/redundancy',
        'storage/sas-tokens',
        'storage/cosmos-db',
      ],
    },
    {
      type: 'category',
      label: ' Infrastructure',
      collapsed: true,
      items: [
        'infra/intro',
        'infra/virtual-network',
        'infra/nsg-asg',
        'infra/vnet-peering-bastion',
        'infra/naming-convention',
      ],
    },
    {
      type: 'category',
      label: ' Security',
      collapsed: true,
      items: [
        'security/intro',
        'security/managed-identities-1',
        'security/managed-identities-2',
      ],
    },
    {
      type: 'category',
      label: ' Azure Foundation',
      collapsed: true,
      items: [
        'basics/intro',
        'basics/rest-sdk',
        'basics/regions-zones',
        'basics/cloud-shell',
      ],
    },
  ],
};

export default sidebars;
