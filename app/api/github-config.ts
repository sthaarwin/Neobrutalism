export const config = {
  username: 'sthaarwin',
  
  categories: [
    {
      name: 'AI & MACHINE LEARNING',
      color: 'bg-primary',
      textColor: 'text-foreground',
      repos: [
        'axtone',
        'pulseai',
        'tinygpt',
        'satyaTathya',
        'axground',
        'nepgraph',
      ],
    },
    {
      name: 'WEB DEVELOPMENT',
      color: 'bg-secondary',
      textColor: 'text-secondary-foreground',
      repos: [
        'axeaid',
        'ecosnap',
        'portfolio-2.0',
      ],
    },
    {
      name: 'SYSTEMS & GRAPHICS',
      color: 'bg-accent',
      textColor: 'text-accent-foreground',
      repos: [
        'graphicslab',
        'picosynth',
        'axterisk',
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