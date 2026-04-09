import { Season } from '@/context/SeasonContext';

export interface Poem {
  id: string;
  title: string;
  lines: string[];
  season: Season;
  featured?: boolean;
}

export const poems: Poem[] = [
  {
    id: 'wilting-garden',
    title: 'The Wilting Garden',
    lines: [
      'I planted words in the soil of my chest,',
      'watered them with every silence I kept.',
      'They grew into a garden no one visits,',
      'blooming only when the world forgets.',
      '',
      'The petals fall like confessions at dusk,',
      'each one a prayer I never learned to speak.',
      'And still the roots dig deeper into me,',
      'searching for the light I cannot reach.',
    ],
    season: 'autumn',
    featured: true,
  },
  {
    id: 'morning-hymn',
    title: 'Morning Hymn',
    lines: [
      'The dawn arrives like a whispered apology,',
      'soft and uncertain at the edges.',
      'I open my palms to catch the light—',
      'it slips through like every promise made in spring.',
      '',
      'But still I stand in the doorway,',
      'barefoot on the cold tile,',
      'believing the sun will stay this time,',
      'believing something gentle is mine.',
    ],
    season: 'spring',
    featured: true,
  },
  {
    id: 'heatwave',
    title: 'Heatwave',
    lines: [
      'Summer pressed its mouth against the city,',
      'and everything softened into gold.',
      'I walked through streets that shimmered,',
      'carrying the weight of things untold.',
      '',
      'The air was thick with jasmine and regret,',
      'the kind that clings to your skin at noon.',
      'I loved you like a heatwave—',
      'overwhelming, and gone too soon.',
    ],
    season: 'summer',
    featured: true,
  },
  {
    id: 'frozen-letter',
    title: 'A Frozen Letter',
    lines: [
      'I wrote your name in the frost on glass,',
      'watched it melt before the morning came.',
      'Some things are not meant to last—',
      'not the cold, not the ache, not the name.',
      '',
      'The trees stand bare like open veins,',
      'the sky a sheet of quiet silver.',
      'I keep your silence like a winter coat—',
      'heavy, familiar, and never quite warm enough.',
    ],
    season: 'winter',
    featured: true,
  },
  {
    id: 'ribcage',
    title: 'Between My Ribcage',
    lines: [
      'There are words trapped between my ribcage,',
      'syllables pressing against bone.',
      'They hum like bees in a glass jar—',
      'alive, urgent, desperately alone.',
      '',
      'I open my mouth and out comes silence,',
      'elegant and terrible.',
      'The poem writes itself in the dark,',
      'where no one is gentle and nothing is beautiful.',
    ],
    season: 'autumn',
  },
  {
    id: 'first-bloom',
    title: 'First Bloom',
    lines: [
      'She told me spring was about forgiveness,',
      'about letting the dead things go.',
      'But I held on to every withered petal,',
      'as if grief were something I could grow.',
      '',
      'Then one morning, without permission,',
      'a crocus pushed through the frozen earth.',
      'And I understood that healing',
      'does not wait for us to feel our worth.',
    ],
    season: 'spring',
  },
  {
    id: 'golden-hour',
    title: 'Golden Hour',
    lines: [
      'At golden hour the world becomes a painting,',
      'all amber edges and shadow-soft faces.',
      'I sit on the rooftop counting',
      'the distance between beautiful places.',
      '',
      'The sun sets like it has nowhere to be,',
      'slow and deliberate and kind.',
      'I want to love like that—',
      'without urgency, without leaving anything behind.',
    ],
    season: 'summer',
  },
  {
    id: 'snow-language',
    title: 'The Language of Snow',
    lines: [
      'Snow has a language we have forgotten—',
      'it speaks in the space between falling.',
      'Each flake a letter from the sky,',
      'each drift a sentence slowly forming.',
      '',
      'I stand at the window, translating silence,',
      'reading the white paragraphs on the lawn.',
      'The world is a blank page tonight,',
      'and I am the only word written upon it.',
    ],
    season: 'winter',
  },
  {
    id: 'root-and-ruin',
    title: 'Root and Ruin',
    lines: [
      'In the ruins of what we built together,',
      'wildflowers push through the cracks.',
      'Beauty is persistent that way—',
      'it finds us even when we don't look back.',
      '',
      'The walls have crumbled but the ivy stays,',
      'climbing over what remains.',
      'And I think maybe love is not the house—',
      'it's what grows after the rain.',
    ],
    season: 'autumn',
  },
];

export const getFeaturedPoems = () => poems.filter(p => p.featured).slice(0, 3);

export const getPoemsBySeason = (season: Season) => poems.filter(p => p.season === season);

export const getPoemById = (id: string) => poems.find(p => p.id === id);
