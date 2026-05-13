export const config = {
  username: 'sthaarwin',
  
  customDescriptions: {
    'pulseai': 'Cuffless Blood Pressure Estimation using CNN BiLSTM with Attention Mechanism.',
  },

  categories: [
    {
      name: 'AI & MACHINE LEARNING',
      color: 'bg-primary',
      textColor: 'text-foreground',
      repos: [
        'axtone',
        'pulseai',
        'satyaTathya',
        'axground',
        'nepgraph',
        'FNEPSE',
      ],
    },
    {
      name: 'WEB & APP DEVELOPMENT',
      color: 'bg-secondary',
      textColor: 'text-secondary-foreground',
      repos: [
        'axeaid',
        'ecosnap',
        'dental-smile',
        'portfolio-2.0',
        'AskHerOut',
      ],
    },
{
      name: 'SYSTEMS & GRAPHICS',
      color: 'bg-accent',
      textColor: 'text-accent-foreground',
      repos: [
        'ML-VISUALIZER',
        'axnux',
        'axscript',
        'bootloader',
      ],
    },
  ],

  excludePatterns: [
    'dotfiles',
    '.dotfiles',
    'config',
    'nvim',
    'vim',
    'emacs',
    'setup',
  ],

  includeForks: [
    'pulseai',
  ],
};