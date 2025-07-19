export interface Project {
  id: string;
  name: string;
  allocation: string;
  category: 'Core Project' | 'Core Community' | 'Core Contributor';
  idea: string;
  description: string;
  features: string[];
  touchpoints: { emoji: string; name: string }[];
  impact: string;
  fullDescription?: string;
  detailedFeatures?: string[];
  connectionsDescription?: string;
}

export const projects: Project[] = [
  {
    id: 'coin98',
    name: 'Coin98 Super Wallet',
    allocation: '472,500 VIC',
    category: 'Core Project',
    idea: 'Viction Passport — The Onchain Identity Layer',
    description: 'NFT-based "Viction Passport" combining verified identity, NFT holdings, onchain reputation, and DAO activity into a composable identity layer.',
    features: [
      'Dynamic NFT viewable in Coin98',
      'Reputation score embedded onchain',
      'Unlocks gated access to dApps',
      'Upgradable via VIC staking or contributions'
    ],
    touchpoints: [
      { emoji: '✉️', name: 'OneID' },
      { emoji: '🎨', name: 'Dagora' },
      { emoji: '✨', name: 'Efihub' },
      { emoji: '🗳️', name: 'Ivy' }
    ],
    impact: 'Turns Coin98 into the gateway for Viction\'s cultural layer, encourages onchain action with visible identity rewards, and enhances composability across the ecosystem.',
    fullDescription: 'Transform Coin98 into the gateway for Viction\'s cultural layer by creating an NFT-based "Viction Passport" that represents a user\'s complete onchain identity, combining verified credentials, NFT holdings, reputation scores, and DAO participation into a single, composable identity layer.',
    detailedFeatures: [
      'Dynamic NFT viewable in Coin98 wallet',
      'Onchain reputation score integration',
      'Gated access to dApps and experiences',
      'Upgradable via VIC staking and contributions',
      'Cross-platform compatibility with all Viction dApps'
    ],
    connectionsDescription: 'Integrates with OneID for identity verification, displays Dagora NFTs, incorporates Efihub reputation scores, and enables Ivy governance participation.'
  },
  {
    id: 'rabbitswap',
    name: 'RabbitSwap',
    allocation: '192,500 VIC',
    category: 'Core Project',
    idea: 'Glory Pools — NFT-Gated, Culture-Powered Farming',
    description: 'Special liquidity pools requiring Viction NFTs to participate, with reputation-boosted yields and seasonal campaigns.',
    features: [
      'NFT-gated farming pools',
      'Seasonal campaigns with boosts',
      'Bonus APR for reputation holders',
      'Integration with deFusion token pairs'
    ],
    touchpoints: [
      { emoji: '🎨', name: 'Dagora' },
      { emoji: '💳', name: 'Coin98' },
      { emoji: '✨', name: 'Efihub' },
      { emoji: '🧬', name: 'deFusion' }
    ],
    impact: 'Makes RabbitSwap the liquidity engine of Viction culture, drives cross-project engagement, and adds new DeFi utility to identity and reputation layers.'
  },
  {
    id: 'defusion',
    name: 'deFusion',
    allocation: '157,500 VIC',
    category: 'Core Project',
    idea: 'Composable Token Experiments for Ecosystem Incentives',
    description: 'Open platform for programmable token experiments, airdrop campaigns, and bonding curves tied to Viction engagement.',
    features: [
      'Token recipes tied to Viction engagement',
      'Custom LP & bonding mechanics',
      'Integration with RabbitSwap pools',
      'Access gated by OneID/KYC if needed'
    ],
    touchpoints: [
      { emoji: '🐇', name: 'RabbitSwap' },
      { emoji: '🗳️', name: 'Ivy' },
      { emoji: '🎨', name: 'Dagora' },
      { emoji: '✉️', name: 'OneID' }
    ],
    impact: 'Makes deFusion a programmable layer for token economics and enables ecosystem-wide token experimentation with purpose.'
  },
  {
    id: 'dagora',
    name: 'Dagora',
    allocation: '157,500 VIC',
    category: 'Core Project',
    idea: 'Onchain Gallery + Cultural Guilds',
    description: 'Cultural hub with onchain guilds where NFT holders collaborate, vote, and co-curate galleries tied to collections.',
    features: [
      'Curated community galleries',
      'Guild tokens representing influence/votes',
      'Gallery minting via smart contracts',
      'Guild activities recorded onchain'
    ],
    touchpoints: [
      { emoji: '🗳️', name: 'Ivy' },
      { emoji: '💳', name: 'Coin98' },
      { emoji: '🐇', name: 'RabbitSwap' },
      { emoji: '✨', name: 'Efihub' }
    ],
    impact: 'Turns Dagora into a creative + social DAO hub, drives NFT activity beyond trading, and aligns with Viction\'s cultural narrative.'
  },
  {
    id: 'oneid',
    name: 'OneID',
    allocation: '157,500 VIC',
    category: 'Core Project',
    idea: 'Viction Sign-In + Composable ID Modules',
    description: 'Default sign-in layer for all Viction dApps with modular plugins for badges, KYC, social handles, and gaming stats.',
    features: [
      'One-click sign-in to all Viction dApps',
      'Add-on modules for reputation, identity, NFTs',
      'Integration with Coin98 and Ivy governance'
    ],
    touchpoints: [
      { emoji: '💳', name: 'Coin98' },
      { emoji: '✨', name: 'Efihub' },
      { emoji: '🗳️', name: 'Ivy' },
      { emoji: '🌐', name: 'World of Dypians' }
    ],
    impact: 'Strengthens the Web3 UX on Viction and makes identity composable and actionable.'
  },
  {
    id: 'vikto',
    name: 'Vikto',
    allocation: '35,000 VIC',
    category: 'Core Project',
    idea: 'Proof-of-Glory Leaderboards for Viction',
    description: 'Lightweight onchain gamification layer for dApps with scores for completing tasks, contributing to DAOs, and trading.',
    features: [
      'Public leaderboards by wallet or guild',
      'Point logic composable by dApps',
      'Reward badges on Dagora or NFT claimable via Coin98'
    ],
    touchpoints: [
      { emoji: '🎨', name: 'Dagora' },
      { emoji: '🗳️', name: 'Ivy' },
      { emoji: '💳', name: 'Coin98' },
      { emoji: '✨', name: 'Efihub' }
    ],
    impact: 'Adds game mechanics to ecosystem-wide growth and encourages repeat onchain behavior.'
  },
  {
    id: 'ivy',
    name: 'Ivy',
    allocation: '267,750 VIC',
    category: 'Core Community',
    idea: 'Viction Governance OS + Contributor Bounties',
    description: 'Governance-as-a-service platform helping all Viction dApps spin up DAO-like coordination with onchain voting and bounties.',
    features: [
      'Plug-and-play DAO modules',
      'Reputation-linked voting (Efihub)',
      'Bounty board integration',
      'Open proposal systems'
    ],
    touchpoints: [
      { emoji: '✨', name: 'Efihub' },
      { emoji: '✉️', name: 'OneID' },
      { emoji: '💳', name: 'Coin98' },
      { emoji: '🧬', name: 'deFusion' }
    ],
    impact: 'Makes governance modular and accessible, empowers community-led development.'
  },
  {
    id: 'athletix',
    name: 'The Contrarians x Athletix',
    allocation: '204,750 VIC',
    category: 'Core Community',
    idea: 'Proof of Training – IRL x Onchain Challenge Protocol',
    description: 'Protocol for verifiable physical challenges, linking onchain wallets to IRL athletic tasks and gamified XP.',
    features: [
      'QR/NFC-based IRL proof devices',
      'NFT badges + VIC rewards',
      'Public fitness leaderboards',
      'Ties into Vikto point systems'
    ],
    touchpoints: [
      { emoji: '🎮', name: 'Vikto' },
      { emoji: '💳', name: 'Coin98' },
      { emoji: '🎨', name: 'Dagora' }
    ],
    impact: 'Merges fitness and crypto with proof layers, real-world engagement with Web3-native logic.'
  },
  {
    id: 'notforthinking',
    name: 'Not For Thinking',
    allocation: '52,500 VIC',
    category: 'Core Community',
    idea: 'Onchain Art Puzzles + ARG for Culture Engagement',
    description: 'Alternate reality game using NFT puzzles, smart contract clues, and real-world interactions for cultural engagement.',
    features: [
      'NFT mint-on-solve riddles',
      'Smart contract-based clues + rewards',
      'Partnered puzzles via Dagora or Coin98',
      'Hidden VIC bounties'
    ],
    touchpoints: [
      { emoji: '🎨', name: 'Dagora' },
      { emoji: '💳', name: 'Coin98' },
      { emoji: '🎮', name: 'Vikto' },
      { emoji: '✉️', name: 'OneID' }
    ],
    impact: 'Drives deep engagement in lore, culture, and art. Fosters creative participation in Web3.'
  },
  {
    id: 'efihub',
    name: 'Efihub',
    allocation: '159,750 VIC',
    category: 'Core Contributor',
    idea: 'Reputation Graph as a Public Layer',
    description: 'Default reputation layer for all Viction projects, providing APIs, UIs, and contract hooks to assess user quality.',
    features: [
      'Onchain & offchain action scoring',
      'Integration into dApp flows, leaderboards, DAO votes',
      'Visual explorer for identity/reputation'
    ],
    touchpoints: [
      { emoji: '🗳️', name: 'Ivy' },
      { emoji: '✉️', name: 'OneID' },
      { emoji: '🐇', name: 'RabbitSwap' },
      { emoji: '🎨', name: 'Dagora' }
    ],
    impact: 'Elevates user quality in the ecosystem and provides shared signal for all community and dApp activity.'
  },
  {
    id: 'worldofdypians',
    name: 'World of Dypians',
    allocation: '65,250 VIC',
    category: 'Core Contributor',
    idea: 'Viction Embassy in the Metaverse',
    description: 'Official Viction embassy inside World of Dypians — an immersive showcase + hub for all Retrodrop projects.',
    features: [
      'Live-updating Retrodrop gallery',
      'Quests that teach Viction\'s ecosystem',
      'Gamified VIC rewards',
      'Portal integrations with each project'
    ],
    touchpoints: [
      { emoji: '🌐', name: 'Every Retrodrop project' },
      { emoji: '✨', name: 'Efihub for onchain progress' },
      { emoji: '💳', name: 'Coin98 for identity/passport login' }
    ],
    impact: 'Positions Viction as metaverse-native and unifies Retrodrop impact in a single explorable space.'
  }
];

export const getProjectsByCategory = (category: Project['category']) => 
  projects.filter(project => project.category === category);

export const getProjectById = (id: string) => 
  projects.find(project => project.id === id);
