import React from "react";

const HeroContent = `Transforming Ideas into Digital Marvels – Let's Build Yours!`;
const PortfolioData = [
  {
    title: "Slideas",
    summary:
      "Designed a sleek one-page site highlighting our client's presentation skills. Built on WordPress with a custom theme, the site elegantly showcases their expertise. Visitors can now explore captivating storytelling and design, enhancing the impact of pitches and presentations.",
    technologies: ["WordPress"],
    category: ['Business','Portfolio'],
    img: "https://i.imgur.com/Jh7jABb.png",
  },
  {
    title: "VistaHomes",
    summary:
      "Crafted a unique WordPress site for Vista Homes, emphasizing their real estate expertise. Using a custom theme, we showcased their quality, client-centered approach, and innovative designs in a straightforward manner.",
    technologies: ["WordPress"],
    category: ['Business','Portfolio'],

    img: "https://i.imgur.com/iuCKdSV.png",
  },
  {
    title: "AfroCentric Records",
    summary:
      "Crafted a sophisticated WordPress platform for DJ Cory Centric, integrating artist-specific pages, album databases, and event archives. Leveraging intricate data structures, the site seamlessly navigates his musical journey, showcasing his bio, Centric Music label, and Home of Afro House events with precision",
    technologies: ["WordPress"],
    category: ['Business','Portfolio','Art'],
  

    img: "https://i.imgur.com/D6r94ex.png",
  },
  {
    title: "Krnjevac",
    summary:
      "Crafted an efficient e-commerce site for Krnjevac, Serbia's top honey distributor. Powered by WordPress and WooCommerce, the platform showcases their range of 100% natural honey products, ensuring seamless online shopping. Emphasizing quality and authenticity, it delivers a streamlined customer experience",
    technologies: ["WordPress", "E-Commerce"],
    category: ['Business','Shop'],


    img: "https://i.imgur.com/loty602.png",
  },
  {
    title: "Body By Margie",
    summary:
      "Designed a tailored WordPress site, 'Body By Margie', for a Canadian fitness and diet coach. Customized with subscription features, the platform offers seamless interactions for clients, enhancing their fitness journey. A user-friendly hub empowering healthy lifestyles.",
    technologies: ["WordPress", "E-Commerce"],
    category: ['Business','Portfolio','Shop'],


    img: "https://i.imgur.com/crOXI2s.png",
  },
  {
    title: "Streetkopi",
    summary:
      "Built a professional website for 'Streetkopi,' integrating a local print shop and bookstore. Utilizing WordPress, the platform offers streamlined ordering and essential information.",
    technologies: ["WordPress", "E-Commerce"],
    category: ['Business','Shop'],
    

    img: "https://i.imgur.com/L9uWwaZ.png",
  },
  {
    title: "Creddit",
    summary:
      "Developed 'Creddit,' a Reddit-inspired forum platform, as a MERN stack exercise. With user-friendly features mirroring Reddit, Creddit enables seamless interactions, including posts, comments, users, and subreddits.",
    technologies: ["React", "Node.js"],
    category: ['Portfolio','Platform'],


    img: "https://i.imgur.com/hiQauQ5.png",
  },
  {
    title: "Portfolio",
    summary:
      "Presenting this very website - A journey in one space. A React-powered portfolio showcasing our diverse projects, from e-commerce and forums to fitness coaching websites. A dynamic snapshot of our expertise and innovation, all in one place.",
    technologies: ["React"],
    category: ['Portfolio'],

    img: "https://miro.medium.com/v2/resize:fit:1400/1*5a0_sXxdX-XL705gftBatA.png",
  },
  {
    title: "PEP Migration",
    summary:
      "We developed a compassionate online platform in collaboration with Serbia's Red Cross, an affiliate of the International Federation of Red Cross and Red Crescent Societies. The website is a lifeline for migrants escaping conflict, providing essential resources and support in the Republic of Serbia. It embodies a commitment to aiding those in need.",
    technologies: ["WordPress"],
    category: ['Platform'],

    img: "https://i.imgur.com/CRHx3zt.png",
  },
  {
    title: "Synergyls",
    summary:
      "Crafted a dynamic WordPress website for a leading European trucking company. Capturing the essence of their expertise, the site embodies seamless, cost-effective freight solutions and punctual deliveries. The design reflects the company's commitment to excellence in the transportation industry, offering visitors an engaging glimpse into their premier services",
    technologies: ["WordPress"],
    category: ['Business'],

    img: "https://i.imgur.com/HCTpE0Z.png",
  },
];

const AboutData = `We're David, Milivoje, and Borivoje, a team passionate about crafting incredible online experiences.

Dynamic online stores, WordPress and Drupal websites, powerful apps using React/Node.js - We do it all

Our websites don't just look good; they work great too. We follow the best methods to make sure your site is both attractive and easy to use.
Simply put. We're all about quality. 

Whether you're a small business starting out or a big company looking to change things up, we've got you covered. Our services are personalized and will fit your needs perfectly.

Let's work together to bring your digital dreams to life. Get in touch, and let's make your online presence shine!`;

const DeveloperData = [
  {
    name: "David Kovac",
    title: "Full Stack Developer",
    img: "https://media.licdn.com/dms/image/C4E03AQEm987nQyNv2g/profile-displayphoto-shrink_800_800/0/1648742485232?e=2147483647&v=beta&t=64h0Qt4PdFMaLrArfl7DdBuvCQwiYIz9td76cMkHAG4",
    linkedin: "https://linkedin.com/",
    mail: "davdkurac69@gmail.com"
  },
  {
    name: "Borivoje Putnik",
    title: "Full Stack Developer",
    img: "https://static.wikia.nocookie.net/vikingstv/images/8/82/King_Aelle_of_Northumbria.jpg",
    linkedin: "https://linkedin.com/",
    mail: "borarooney@gmail.com"
  },
  {
    name: "Milivoje Jankovic",
    title: "Full Stack Developer",
    img: "https://www.balkaninfo.rs/wp-content/uploads/2019/05/Nemanja-1.jpg",
    linkedin: "https://linkedin.com/",
    mail: "samomeso@gmail.com"

  },
]

export default { PortfolioData, AboutData, HeroContent, DeveloperData };
