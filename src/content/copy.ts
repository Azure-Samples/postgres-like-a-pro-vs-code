/**
 * Page copy. Edit text here, never in components.
 *
 * Inline `backticks` render as <code>; see src/lib/inline.ts.
 * `{{placeholder}}` hrefs are unresolved links: they never render as a link.
 */
import type { ImageMetadata } from 'astro';
import type { IconName } from '../lib/icons';
import microsoftGrey from '../assets/partners/microsoft-grey.webp';
import microsoftWhite from '../assets/partners/microsoft-white.webp';
import amdBlack from '../assets/partners/amd-black.png';
import amdWhite from '../assets/partners/amd-white.png';
// Official Azure architecture icon (Azure_Public_Service_Icons V24, 10131), unmodified.
// Used on this page with the client's (Microsoft's) permission.
import azurePostgresIcon from '../assets/azure/azure-database-for-postgresql.svg';
import azureHorizonDbIcon from '../assets/azure/azure-horizondb.svg';

export interface Link {
  label: string;
  href: string;
}

export interface Cta extends Link {
  /** Analytics/test hook. */
  id: 'install' | 'agent';
}

export const links = {
  marketplace: 'https://marketplace.visualstudio.com/items?itemName=ms-ossdata.vscode-pgsql',
  playground: 'https://github.com/Azure-Samples/postgresql-extension-playground',
  agents: 'https://github.com/Azure-Samples/postgres-agents',
  learn: 'https://learn.microsoft.com/en-us/azure/postgresql/', // Azure Database for PostgreSQL docs
  hub: 'https://azure-samples.github.io/postgres-hub/',
  // The series short link. It redirects to the Visual Studio Code channel until the playlist is up.
  playlist: 'https://aka.ms/postgresql-like-a-pro-vscode-edition-series',
  // The series the hero eyebrow links to: the same link as the playlist tile.
  video: 'https://aka.ms/postgresql-like-a-pro-vscode-edition-series',
  feedback: 'https://github.com/microsoft/vscode-pgsql',
  // The ebook's landing page, for the ebook tile in Keep going.
  ebook: 'https://info.microsoft.com/ww-landing-accelerate-development-with-the-postgresql-extension-for-visual-studio-code.html',
  // Footer links. Microsoft's standard privacy statement link, as on microsoft.com.
  privacy: 'https://go.microsoft.com/fwlink/?LinkId=521839',
  copyright: 'https://www.microsoft.com/legal/intellectualproperty/trademarks',
} as const;

const install: Cta = { id: 'install', label: 'Install the extension', href: links.marketplace };
// The secondary button: scrolls to Hands-on. No icon.
const agentCta: Cta = { id: 'agent', label: 'Build an agent with Postgres', href: '#build-agent' };

/** Appended (visually hidden) to every link that opens in a new tab. */
export const a11y = {
  newTab: '(opens in a new tab)',
};

export const meta = {
  title: 'PostgreSQL Like a Pro: VS Code Edition — Try it in your editor',
  description:
    'Install the PostgreSQL extension for Visual Studio Code, connect a database, and query with IntelliSense, @pgsql, and Copilot Agent mode.',
  brand: 'PostgreSQL Like a Pro',
  // Header title reads as one name, not "brand / section". Phones show `brand` only.
  brandJoiner: ': ',
  brandSuffix: 'VS Code Edition',
  // The sticky header's Install button on phones, where the full label doesn't fit.
  installShort: 'Install',
};

/** The theme toggle's accessible name: the theme it switches to. */
export const theme = {
  toLight: 'Switch to light theme',
  toDark: 'Switch to dark theme',
};

export const hero = {
  // A YouTube pill above the title.
  eyebrow: 'PostgreSQL Like a Pro · VS Code Edition',
  // Visually hidden, read after the eyebrow when it links to the video.
  eyebrowLink: 'Watch on YouTube',
  eyebrowHref: links.video,
  // One tone (no [[…]]). `\n` is a line break (src/lib/inline.ts).
  heading: 'Install the free PostgreSQL\nextension for VS Code',
  body: 'Connect a database and run every move from the series in under 20 minutes.',
  primary: install,
  secondary: agentCta,
};

/**
 * Hero "Works with" sentence: the two target services first, then everyone else.
 * Names verified against Microsoft Learn: "Azure Database for PostgreSQL";
 * "Azure HorizonDB" (in Preview).
 * One "Works with" lead, so it doesn't read as exclusive.
 * Names as on the Marketplace listing, which says it connects to "any PostgreSQL database"
 * (it's PostgreSQL-only, so not "any database"). Not "optimized for": an unverified claim.
 */
export interface DatabaseTarget {
  name: string;
  /** Official Azure icon, full colour as the icon terms require. Null: none published yet. */
  icon: ImageMetadata | null;
}

// One sentence on its own line inside the hero body, "Works with A, B, or any other PostgreSQL
// database.", the two Azure names in plain text with their icons (src/components/Databases.astro).
export const databases = {
  lead: 'Works with',
  targets: [
    // Official icon from Microsoft's HorizonDB product page (azure.microsoft.com/products/horizondb),
    // unmodified; it isn't in the Azure icon set V24.
    { name: 'Azure HorizonDB', icon: azureHorizonDbIcon },
    { name: 'Azure Database for PostgreSQL', icon: azurePostgresIcon },
  ] satisfies DatabaseTarget[],
  // "Works with A, B, or any other PostgreSQL database." A comma follows every target.
  fallback: 'or any other PostgreSQL database.',
};

export interface Capability {
  icon: IconName;
  title: string;
  body: string;
}

export const capabilities = {
  heading: 'What the extension does',
  // Bodies: two lines at most
  items: [
    { icon: 'plug-connected', title: 'Connect and explore', body: 'Add a connection and browse databases, schemas, and tables.' },
    { icon: 'code', title: 'AI-assisted query writing', body: 'Schema-aware IntelliSense with connected database context.' },
    { icon: 'message-chatbot', title: 'Ask @pgsql', body: 'Get Copilot answers grounded in your connected database.' },
    { icon: 'robot', title: 'Agent mode, with approval', body: 'Let Copilot work through an unfamiliar schema.' },
  ] satisfies Capability[],
};

export interface PartnerLogo {
  name: string;
  /** Official files supplied by the client: one for each theme. */
  light: ImageMetadata;
  dark: ImageMetadata;
}

export const partners = {
  label: 'Powered by',
  line: 'PostgreSQL on Azure with AMD processors',
  logos: [
    { name: 'Microsoft', light: microsoftGrey, dark: microsoftWhite },
    { name: 'AMD', light: amdBlack, dark: amdWhite },
  ] satisfies PartnerLogo[],
};

export const why = {
  eyebrow: 'Why the editor',
  heading: 'Your whole PostgreSQL workflow, [[in the editor you already use]]',
  items: [
    { icon: 'arrows-right-left', lead: 'Stay in flow.', body: 'Connect, query, and manage PostgreSQL where you already write code.' },
    { icon: 'code', lead: 'Write SQL that matches your schema.', body: 'IntelliSense knows your connected database, so names and completions are right the first time.' },
    { icon: 'message-chatbot', lead: 'Bring AI in on your terms.', body: 'Ask @pgsql about your data. Agent mode can act, but only with your approval.' },
    { icon: 'activity', lead: 'Diagnose and resolve issues.', body: 'Open the Metrics Dashboard and Azure Advisor recommendations without switching tools.' },
  ] satisfies { icon: IconName; lead: string; body: string }[],
};

export interface Step {
  title: string;
  body: string;
  /** Shell or SQL lines shown with a copy button. */
  commands?: { lang: 'shell' | 'sql'; lines: string[] };
  /** A non-copyable visual for steps without a command. */
  visual?: { kind: 'tool'; file: string; keyword: string; fn: string; param: string } | { kind: 'trace'; items: string[] };
}

export const agent = {
  eyebrow: 'Hands-on',
  heading: 'Build a research agent\n[[backed by PostgreSQL on Azure]]',
  // The label in each command card's header strip
  cardLabel: { shell: 'Terminal', sql: 'SQL' },
  intro:
    'Turn what you learned into a working agent: PostgreSQL as the vector store, a Microsoft Foundry agent as the brain, and real Washington State case law as the data.',
  steps: [
    {
      title: 'Set up your environment',
      body: 'Clone the repo, create a Python virtual environment, and add your keys to `.env`.',
      commands: { lang: 'shell', lines: ['git clone https://github.com/Azure-Samples/postgres-agents', 'cd postgres-agents', 'pip install -r requirements.txt'] },
    },
    {
      title: 'Enable the extensions',
      body: 'Allow-list `azure_ai` and `vector` on your Azure Database for PostgreSQL server, then create them.',
      commands: { lang: 'sql', lines: ['CREATE EXTENSION IF NOT EXISTS azure_ai;', 'CREATE EXTENSION IF NOT EXISTS vector;'] },
    },
    {
      title: 'Load data and generate embeddings',
      body: 'Create the `cases` table and embed the case opinions with Azure OpenAI. About 3–5 minutes.',
      commands: { lang: 'shell', lines: ['cd load_data', 'python main.py', 'cd ..'] },
    },
    {
      title: 'Give your agent a Postgres tool',
      body: '`vector_search_cases` in `legal_agent_tools.py` runs a pgvector similarity search the agent can call.',
      // Shown as `def vector_search_cases(query)` under the file name.
      visual: { kind: 'tool', file: 'legal_agent_tools.py', keyword: 'def', fn: 'vector_search_cases', param: 'query' },
    },
    {
      title: 'Create and run the agent',
      body: 'Initialize the agent in your Microsoft Foundry project with gpt-4o-mini, and answer a real legal question end to end.',
      commands: { lang: 'shell', lines: ['python src/simple_postgres_and_ai_agent.py'] },
    },
    {
      title: 'Test and iterate',
      body: 'Ask follow-up questions in the Microsoft Foundry playground and trace each step.',
      visual: { kind: 'trace', items: ['Plan', 'Call tool', 'Answer'] },
    },
  ] satisfies Step[],
  cta: { label: 'Open the full postgres-agents repo', href: links.agents } satisfies Link,
};

export const keepGoing = {
  eyebrow: 'Keep going',
  heading: 'Keep going',
  // Shown on a tile whose URL is still a `{{placeholder}}`. The tile isn't a link until the URL is set.
  pending: 'Link coming soon',
  items: [
    {
      title: 'Read the docs on Microsoft Learn',
      body: 'Overview, connections and identity, query editor, Copilot integration, @pgsql chat participant, Agent mode, MCP server.',
      href: links.learn,
    },
    {
      title: 'Explore more samples on the PostgreSQL Hub',
      body: 'Learning pathways, solution accelerators, and community.',
      href: links.hub,
    },
    {
      title: 'Rewatch the series on YouTube',
      body: 'Full playlist on Microsoft Developer.',
      href: links.playlist,
    },
    {
      title: 'Get the VS Code ebook',
      body: 'A guide to working with PostgreSQL in VS Code.',
      href: links.ebook,
    },
  ] satisfies { title: string; body: string; href: string }[],
};

export const closing = {
  // "can live", because the viewer hasn't installed it yet. The second sentence always starts on
  // its own line (`\n`, src/lib/inline.ts).
  heading: '[[You watched the workflow.]]\nNow it can live in your editor.',
  body: 'Free extension. Install it, connect a database, and ask @pgsql about your data.',
  primary: install,
  secondary: agentCta,
};

export const footer = {
  // The footer nav's accessible name (screen readers only).
  navLabel: 'Footer',
  // Pending the client's legal requirements. `{{…}}` values are never rendered (SiteFooter skips them).
  legal: '{{legal_footer}}',
  // Three links, in this order.
  links: [
    { label: 'GitHub', href: links.feedback },
    { label: 'Privacy policy', href: links.privacy },
    { label: `© Microsoft ${new Date().getFullYear()}`, href: links.copyright },
  ] satisfies Link[],
};

/**
 * Hero video: the first clip on the extension's Marketplace listing, until
 * the customer supplies a high-quality recording.
 */
export const demo = {
  label:
    'Video: the PostgreSQL extension in VS Code. Browsing connected servers, then asking Copilot in agent mode to connect to the pagila database and visualize its schema as a diagram.',
  play: 'Play video',
  pause: 'Pause video',
};
