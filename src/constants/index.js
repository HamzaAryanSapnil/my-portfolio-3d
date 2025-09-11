const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  // {
  //   name: "Testimonials",
  //   link: "#testimonials",
  // },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: "Hello", suffix: "+", label: "I am a fresher" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

// const logoIconsList = [
//   {
//     imgPath: "/images/logos/company-logo-1.png",
//   },
//   {
//     imgPath: "/images/logos/company-logo-2.png",
//   },
//   {
//     imgPath: "/images/logos/company-logo-3.png",
//   },
//   {
//     imgPath: "/images/logos/company-logo-4.png",
//   },
//   {
//     imgPath: "/images/logos/company-logo-5.png",
//   },
//   {
//     imgPath: "/images/logos/company-logo-6.png",
//   },
//   {
//     imgPath: "/images/logos/company-logo-7.png",
//   },
//   {
//     imgPath: "/images/logos/company-logo-8.png",
//   },
//   {
//     imgPath: "/images/logos/company-logo-9.png",
//   },
//   {
//     imgPath: "/images/logos/company-logo-10.png",
//   },
//   {
//     imgPath: "/images/logos/company-logo-11.png",
//   },
// ];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Examiner's Feedback: I appreciate the effort you put into the project, but I noticed that you could improve more. Best wishes from Programming Hero Team",
    imgPath: "/images/dg-wallet-logo.png",
    logoPath: "/images/logo1.png",
    title: "Full-Stack Developer",
    date: "January 2025 - Present",
    responsibilities: [
      "Developed and maintained user-facing features for the Digital Wallets website.",
      "Used Shadcn UI, Origin UI, Hyper UI for building  UI/UX design to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  // {
  //   review: "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
  //   imgPath: "/images/exp2.png",
  //   logoPath: "/images/logo2.png",
  //   title: "Full Stack Developer",
  //   date: "June 2020 - December 2023",
  //   responsibilities: [
  //     "Led the development of Docker's web applications, focusing on scalability.",
  //     "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
  //     "Contributed to open-source projects that were used with the Docker ecosystem.",
  //   ],
  // },
  // {
  //   review: "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
  //   imgPath: "/images/exp3.png",
  //   logoPath: "/images/logo3.png",
  //   title: "React Native Developer",
  //   date: "March 2019 - May 2020",
  //   responsibilities: [
  //     "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
  //     "Improved app performance and user experience through code optimization and testing.",
  //     "Coordinated with the product team to implement features based on feedback.",
  //   ],
  // },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  // logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};


export const blogs = [
  {
    title: "Getting Started with Prisma, Next.js & MongoDB",
    author: "Hamza Aryan",
    slug: "prisma-nextjs-mongodb-intro",
    tags: ["prisma", "nextjs", "mongodb", "fullstack"],
    excerpt:
      "A step-by-step guide to setting up Prisma ORM in a Next.js app with MongoDB as the database.",
    content:
      "When building modern full-stack applications, combining Prisma, Next.js, and MongoDB creates a powerful development stack. Prisma provides a type-safe ORM layer, MongoDB offers flexible NoSQL storage, and Next.js serves as the frontend framework with server-side capabilities.\n\nThe first step is setting up a new Next.js project with `npx create-next-app@latest`. After installing Prisma and MongoDB packages, configure your `schema.prisma` file to define models and connect to your MongoDB Atlas cluster via environment variables. This setup ensures your app has a clear data model while still benefiting from MongoDB’s schema-less flexibility.\n\nOnce Prisma is initialized, you can run `npx prisma generate` to generate the Prisma client. Inside Next.js API routes, you can now query MongoDB using Prisma like `prisma.user.findMany()`. These queries are fully type-safe, making development smoother and reducing runtime bugs.\n\nBy the end of this setup, you’ll have a running Next.js app where your backend queries are handled by Prisma and stored in MongoDB. This foundation is perfect for building dashboards, e-commerce apps, or any real-world project that requires scalability.",
    date: "2025-09-01",
  },
  {
    title: "Prisma Schema Design for MongoDB in Next.js Projects",
    author: "Aryan Dev",
    slug: "prisma-schema-nextjs-mongodb",
    tags: ["prisma", "schema", "mongodb", "nextjs"],
    excerpt:
      "Best practices for designing Prisma schema models when working with MongoDB inside Next.js.",
    content:
      "Designing a Prisma schema for MongoDB is a unique challenge because MongoDB is document-based while Prisma leans on structured data models. To bridge this, Prisma offers support for embedded documents and relations.\n\nA simple schema might define a `User` model with fields like `id`, `name`, and `email`. But when using MongoDB, you can also embed arrays such as `posts` directly in the user document. Prisma makes this easier by letting you define relations with `@relation` annotations while still allowing MongoDB’s flexibility.\n\nWhen working with Next.js, schema design becomes even more important. Since Next.js uses API routes or server actions, a poorly designed schema can slow down queries. For instance, storing large nested arrays without indexes can create performance issues. Instead, normalize some data while still using MongoDB’s document strengths.\n\nThe golden rule is to keep Prisma schema clean, consistent, and aligned with how your Next.js app will query data. Good schema design at the start saves hours of refactoring later.",
    date: "2025-09-02",
  },
  {
    title: "API Routes in Next.js with Prisma and MongoDB",
    author: "Code Explorer",
    slug: "nextjs-api-prisma-mongodb",
    tags: ["nextjs", "api-routes", "prisma", "mongodb"],
    excerpt:
      "Building RESTful API routes in Next.js backed by Prisma ORM and MongoDB.",
    content:
      "Next.js API routes are a great way to create backend endpoints without leaving your project. When combined with Prisma and MongoDB, they allow you to handle CRUD operations efficiently.\n\nStart by creating a new file under `/pages/api/users.js` (or in App Router `/app/api/users/route.js`). Import Prisma client and write a simple GET endpoint to return all users with `prisma.user.findMany()`. You can also handle POST requests by calling `prisma.user.create()` and passing request body data.\n\nThe beauty of Prisma in this flow is type safety. If you define a field in your schema, TypeScript will catch errors if you forget to include it in your query. This drastically improves developer experience and prevents runtime bugs.\n\nFinally, MongoDB stores the actual documents, so scaling the API is as simple as upgrading your MongoDB Atlas cluster. The combination of API routes + Prisma + MongoDB ensures you don’t need a separate backend server.",
    date: "2025-09-03",
  },
  {
    title: "Server Actions with Prisma and MongoDB in Next.js 15",
    author: "Fullstack Hamza",
    slug: "server-actions-prisma-mongodb",
    tags: ["nextjs", "server-actions", "prisma", "mongodb"],
    excerpt:
      "Harnessing the new Next.js server actions feature with Prisma ORM and MongoDB.",
    content:
      "Next.js 15 introduced server actions, a powerful way to handle form submissions and database mutations without creating explicit API routes. This works beautifully with Prisma and MongoDB.\n\nImagine you have a contact form. Instead of posting to `/api/contact`, you can define a server action directly in your React component. That action can then use Prisma to insert the form data into MongoDB. This reduces boilerplate and makes your codebase cleaner.\n\nPrisma adds an additional benefit: type safety and database validation. You don’t have to worry about invalid inputs because Prisma enforces schema rules before sending data to MongoDB.\n\nBy combining server actions with Prisma, developers can create faster, more secure apps while writing less backend code. It’s a step forward in the future of full-stack development.",
    date: "2025-09-04",
  },
  {
    title: "Deploying Next.js + Prisma + MongoDB to Vercel",
    author: "DevOps Guy",
    slug: "deploy-nextjs-prisma-mongodb-vercel",
    tags: ["deployment", "vercel", "prisma", "mongodb"],
    excerpt:
      "How to deploy a Next.js app with Prisma and MongoDB to Vercel smoothly.",
    content:
      "Deploying a Next.js app with Prisma and MongoDB to Vercel requires some preparation. Since Vercel is serverless by design, your database must be hosted externally, typically on MongoDB Atlas.\n\nThe first step is to set up environment variables in Vercel. You’ll need `DATABASE_URL` pointing to your MongoDB cluster. Prisma uses this connection string to interact with MongoDB.\n\nNext, ensure you run `npx prisma generate` locally before deployment so the client is ready. Vercel builds don’t automatically run Prisma migrations, so you may need to handle schema updates manually or through a CI/CD pipeline.\n\nOnce deployed, your Next.js API routes or server actions can directly use Prisma to query MongoDB. With Vercel’s global edge network and MongoDB Atlas, you get a scalable setup that can handle thousands of requests seamlessly.",
    date: "2025-09-05",
  },
  {
    title: "Authentication in Next.js with Prisma & MongoDB",
    author: "Auth Master",
    slug: "auth-nextjs-prisma-mongodb",
    tags: ["authentication", "nextjs", "prisma", "mongodb"],
    excerpt:
      "Implementing secure authentication flows using NextAuth, Prisma, and MongoDB.",
    content:
      "Authentication is a core feature in most web applications. With Next.js, Prisma, and MongoDB, you can implement secure login and signup systems quickly.\n\nThe most popular solution is using NextAuth.js. Prisma works as the adapter, while MongoDB stores user credentials and sessions. You can configure providers like Google, GitHub, or email/password authentication within minutes.\n\nPrisma makes it easy to model users, sessions, and accounts in your schema. For example, the `User` model might include fields like `email`, `password`, and `role`. MongoDB stores these documents efficiently, and Prisma ensures type-safe queries.\n\nWith this setup, you get a robust authentication flow that integrates seamlessly with Next.js’ SSR features, enabling both client-side and server-side session handling.",
    date: "2025-09-06",
  },
  {
    title: "Pagination with Prisma and MongoDB in Next.js",
    author: "Hamza Aryan",
    slug: "pagination-prisma-mongodb-nextjs",
    tags: ["pagination", "prisma", "mongodb", "nextjs"],
    excerpt:
      "Efficient data pagination strategies using Prisma with MongoDB inside Next.js.",
    content:
      "When building dashboards or admin panels, pagination is critical to handle large datasets. Prisma provides two main approaches: skip/take pagination and cursor-based pagination.\n\nSkip/take is straightforward: `prisma.user.findMany({ skip: 10, take: 10 })` fetches the next 10 results. However, it becomes slower on very large collections because MongoDB has to scan skipped documents.\n\nCursor-based pagination is more efficient. You can query using a unique field like `_id` as a cursor. Prisma’s API makes this easy with `cursor`, `skip`, and `take` options combined. This approach ensures fast queries even with millions of records.\n\nIn Next.js, you can integrate pagination in both API routes and server actions. The frontend can call these endpoints to fetch data in chunks, improving performance and user experience.",
    date: "2025-09-07",
  },
  {
    title: "Error Handling and Debugging Prisma in Next.js",
    author: "Bug Hunter",
    slug: "debug-prisma-nextjs-mongodb",
    tags: ["debugging", "errors", "prisma", "nextjs", "mongodb"],
    excerpt:
      "Tips for handling common Prisma errors and debugging in Next.js applications.",
    content:
      "Working with Prisma in Next.js is usually smooth, but errors can happen. Common issues include schema mismatches, invalid queries, or MongoDB connection problems.\n\nFor schema errors, always run `npx prisma validate` to check your schema before generating the client. If Prisma throws runtime errors, ensure your MongoDB connection string is correct and that the cluster is online.\n\nNext.js adds another layer of complexity because API routes and server actions may run in serverless environments. In such cases, you might see issues with multiple Prisma client instances. The recommended solution is to use a singleton Prisma client with global caching.\n\nBy following these debugging practices, you can quickly identify and fix issues, ensuring your Prisma + Next.js + MongoDB app remains stable.",
    date: "2025-09-08",
  },
  {
    title: "Optimizing MongoDB Queries with Prisma in Next.js",
    author: "Performance Ninja",
    slug: "optimize-prisma-mongodb-nextjs",
    tags: ["performance", "prisma", "mongodb", "nextjs"],
    excerpt:
      "How to write efficient queries with Prisma ORM for MongoDB in a Next.js project.",
    content:
      "Performance matters when scaling applications. With Prisma and MongoDB, it’s important to optimize queries to avoid bottlenecks.\n\nStart by indexing frequently queried fields in MongoDB, such as `email` or `createdAt`. Prisma doesn’t handle indexes directly, but you can define them in MongoDB Atlas. This drastically speeds up queries.\n\nSecond, avoid over-fetching. Prisma lets you use `select` and `include` to fetch only the fields you need. For example, `prisma.user.findMany({ select: { id: true, email: true } })` avoids pulling unnecessary data.\n\nFinally, test your queries under load. Use tools like MongoDB Compass or Atlas metrics to spot slow queries. Combine this with Next.js’ built-in caching and you’ll achieve blazing-fast apps.",
    date: "2025-09-09",
  },
  {
    title: "Real-Time Apps with Prisma, MongoDB & Next.js",
    author: "Realtime Dev",
    slug: "realtime-prisma-nextjs-mongodb",
    tags: ["realtime", "websockets", "nextjs", "prisma", "mongodb"],
    excerpt:
      "Building a real-time chat application using Prisma ORM, MongoDB change streams, and Next.js.",
    content:
      "Real-time features like chat or live notifications make apps more engaging. With Prisma, MongoDB, and Next.js, you can build such systems efficiently.\n\nMongoDB offers change streams, which let you listen to database events in real time. Prisma integrates seamlessly by fetching updated documents after a change event is detected. This means whenever a new message is inserted, your app can react instantly.\n\nIn Next.js, you can pair this with server-sent events (SSE) or WebSockets to push updates to the client. For example, a chat app can display new messages instantly without requiring manual refresh.\n\nThis combination makes it possible to build scalable, real-time applications without relying on heavy external services. The stack of Next.js + Prisma + MongoDB is more than capable of powering modern interactive apps.",
    date: "2025-09-10",
  },
];

