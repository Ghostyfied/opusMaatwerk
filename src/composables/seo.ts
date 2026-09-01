import { useHead } from '@unhead/vue'
import { site } from '@/data/site'
import ogImage from '@/assets/photos/garden-room-1438.jpg'

/**
 * Per-page SEO: title, description, canonical and social-share tags.
 * `path` must match the served URL (nested dirStyle → trailing slash).
 */
export function usePageSeo(options: { title: string; description: string; path: string }) {
  const url = `${site.domain}${options.path}`
  const image = `${site.domain}${ogImage}`
  useHead({
    title: options.title,
    link: [{ rel: 'canonical', href: url }],
    meta: [
      { name: 'description', content: options.description },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: site.brand.name },
      { property: 'og:locale', content: 'nl_NL' },
      { property: 'og:title', content: options.title },
      { property: 'og:description', content: options.description },
      { property: 'og:url', content: url },
      { property: 'og:image', content: image },
      { property: 'og:image:width', content: '1438' },
      { property: 'og:image:height', content: '1078' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: options.title },
      { name: 'twitter:description', content: options.description },
      { name: 'twitter:image', content: image },
    ],
  })
}
