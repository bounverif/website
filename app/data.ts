type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Reelay',
    description: 'Runtime verification engine for many temporal logic formalisms',
    link: 'https://github.com/bounverif/reelay',
    video: '',
    id: 'reelay',
  },
  {
    name: 'Bazalt',
    description: 'Base container images for cloud-native testing and verification tools',
    link: 'https://github.com/bounverif/bazalt',
    video:'',
    id: 'bazalt',
  },
  {
    name: 'Spearhead',
    description: 'Search based trajectory generation under temporal logic constraints',
    link: 'https://github.com/bounverif/spearhead',
    video: '',
    id: 'spearhead',
  },
]

export const COMMUNITY_WORK: Project[] = [
    {
    name: 'OpenX Assets',
    description:
      'Vehicle and traffic simulation assets using ASAM OpenX standards',
    link: 'https://github.com/bounverif/openx-assets',
    video: '',
    id: 'openx-assets',
  },
  {
    name: 'CUDD Maintainers',
    description:
      'Collaboratively maintaining the CUDD decision diagram library for the next generation of verification tools',
    link: 'https://github.com/cuddorg/cudd',
    video: '',
    id: 'cuddorg',
  },
]

export const BLOG_POSTS: BlogPost[] = []

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/bounverif',
  }
]

export const EMAIL = 'dogan.ulus@bogazici.edu.tr'
