export interface Article {
  date: string
  uri: string
  excerpt: string
  title: string
  featuredImage: {
    node: {
      altText: string
      mediaItemUrl: string
    }
  }
}

export interface Fragment {
  contentAddons: {
    title: string
    content: string
    fragmentId: string
    highlightedtext: string
  }
}

interface NavigationItem {
  contentAddons: {
    title: string
    content: string
    fragmentId: string
  }
}

export interface ArticlesProps {
  postsData: Article[]
  fragmentsData: Fragment[]
  navigationData: NavigationItem[]
}
