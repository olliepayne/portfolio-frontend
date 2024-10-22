# Portfolio Site
Deployment link: (https://www.olliepayne.me)

## Description
I was motivated to build this because I wanted to somewhere to house some of my professional and personal projects that I have been working on over the past 3.5 years in the tech agency world.

### Technologies
I chose to use these technologies to demonstrate, as well as sharpen, my understanding of React and React-based frameworks.
I also thought it would be a good idea to learn Tailwind as a bonus challenge to broaden my CSS skillset (previously I have primarily used [theme-ui](https://theme-ui.com/) when working on React projects.)
- Next
- TypeScript
- Tailwind
- Strapi

### Challenges
One of my biggest challenges I ran into was building my filtering system for projects and blog posts. This was primarily due to the need to incorporate the new `searchParams` prop and the `useSearchParams()` hook to read query strings on both client and server components, as well as the incorporate the updates to the `useRouter()` hook.

In particular, when running `next build` to check for build errors, I noticed an error `useSearchParams() must be wrapped in a suspense boundary`. This was the first time I remember seeing an error like this, and I resolved it by wrapping components that incorporate `useSearchParams()` in `<Suspense>`, at the page level. `<Suspense>` lets you render a fallback UI if the children haven't finished loading, or if they have failed to load. Since in this case I am updating state via calculations which utilize the `useSearchParams()` hook, this was necessary.