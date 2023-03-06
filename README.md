# Case Study - PM Case (for Devs) for Young Coders Club (Havas CX) 
## Case Study: Applying different rendering patterns using Next.js and any Headless CMS

### What do I want?

I want you to create a post model in any headless CMS platform (such as Contentful,
Hygraph, Strapi, or PayloadCMS), then use that model to create a sample post content.
After that, I’d like you to use Next.js to access your newly created content from your
preferred CMS platform and create three simple pages to render your fetched content
while applying the rendering patterns we have discussed.

### Criteria:
- Creating a model using a schema. The model should include the fields below:
- Title -> Single-line text
- Author -> Single-line text
- Excerpt/Post/Body/Content (you can use whichever name you prefer) -> Multi-
line text
- Featured Image -> Asset
- *Created At (this field is usually automatically created by the CMS when you
publish content, for example, Hygraph does this)
- You must use Next.js.
- You must create three pages to demonstrate and apply the CSR, SSG, and SSR
rendering patterns.
- Each post page should include a banner. The banner component should consist of a
button to navigate back to the homepage and a title stating which rendering pattern
was used.
- Regarding styling of the project, there are no hard rules on how the design should
be or which technology should be used. For styling, you can use CSS Modules, SCSS,
TailwindCSS, Styled-components, Emotion, Stitches, Vanilla-extract, or anything else
you feel comfortable using and want to use.



#### This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
