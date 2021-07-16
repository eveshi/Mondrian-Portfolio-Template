export const ABOUT_ME = [
    {
        img: "hk.jpeg",
        info: "The street I live@2019",
        content:
            "I came from Hong Kong, where you could have a cyberpunk bay window.",
        style: "left",
    },
    {
        img: "cat_and_me.jpg",
        info: "My cat and I@2020",
        content: "Back there, I had the cutest cat in the world,",
        style: "right",
    },
    {
        img: "bookstore.jpg",
        info: "Old Heaven Bookstore@2019",
        content:
            "and.. the best bookstore. Musicians played avant-garde jazz there all night long.",
        style: "left",
    },
    {
        img: "music.jpg",
        info: "Me on my vinyl unboxing vlog@2021",
        content:
            "Oh, jazz! I love jazz! I go to live shows and collect cassettes and vinyls. Once upon a time, I worked as a freelance music critic.",
        style: "wide",
    },
    {
        content: "Jazz is the reason why I came to New York City!",
        style: "wordsonly",
    },
    {
        img: "sunset.jpg",
        info: "Sunset outside our terrace@2021",
        content:
            "My apartment in NYC has a big terrace, where I can watch the beautiful sunset everyday.",
        style: "right",
    },
    {
        content:
            "If it is dusk on Saturday, you can turn on FM 91.1, enjoy your sunset with my favorite radio show -- Transpacific Sound Paradise.",
        style: "wordsonly",
    },
    {
        img: "community.jpg",
        info: "My favorite episode of my favorite sitcom",
        content: "And this always make current timeline the perfect timeline!",
        style: "left",
    },
    {
        content: "The End.",
        style: "end",
    },
];

export const PROJECTS = [
    {
        name: "AI-Based 3D Model Search Engine",
        img: "3d-browser.png",
        link: "https://ai4cemodels.com",
        tags: [
            "ReactJS",
            "Material-UI",
            "DataViz",
            "D3.js",
            "WebGL",
            "AWS",
            "RDS MySQL",
            "Django REST framework",
        ],
        dev: true,
    },
    {
        name: "Modality-agnostic Road Traffic Monitoring",
        img: "traffic.png",
        tags: [
            "Machine Learning",
            "DataViz",
            "New Dataset",
            "Multi-modal Analysis",
        ],
        dev: true,
    },
];

export const EXPERIENCE = [
    {
        color: "blue-900",
        position: "Fullstack Developer",
        company: "GoGoChart",
        company_link: "https://www.gogochart.com/",
        time: "Oct. 2018 - Mar. 2019",
        items: [
            <p key="fd-1">
                Built and developed a data analysis dashboard using{" "}
                <span className="text-blue-900 font-semibold">React</span> and{" "}
                <span className="text-blue-900 font-semibold">Flask</span> to
                integrate, analyze data, and generate marketing reports from
                Apple search ads campaigns management API.
            </p>,
            <p key="fd-2">
                Developed front-end portion of a user-friendly ads serving
                platform for ads agencies to organize advertising campaigns on
                App Store and monitor costs. Introduced{" "}
                <span className="text-blue-900 font-semibold">GraphQL</span> to
                the team and used it in production.
            </p>,
        ],
    },
    {
        color: "red-700",
        position: "Fullstack Software Engineer",
        company: "Urban Spring",
        company_link: "https://urbanspring.hk/",
        time: "Apr. 2019 - June. 2020",
        items: [
            <p key="fse-1">
                Optimized the alerting system to use a new infrastructure using{" "}
                <span className="text-red-700 font-semibold">AWS S3</span> event
                trigger,{" "}
                <span className="text-red-700 font-semibold">AWS Lambda</span>,{" "}
                <span className="text-red-700 font-semibold">Grafana</span>,{" "}
                <span className="text-red-700 font-semibold">
                    AWS API Gateway
                </span>
                , <span className="text-red-700 font-semibold">PostgreSQL</span>
                , and Slack to visualize related warning data and manage history
                alerts. Reduced the data loss rate from 5% to 0%.
            </p>,
            <p key="fse-2">
                Built a dashboard website containing user management, data
                analysis and visualization, remote device control, and IoT
                management based on{" "}
                <span className="text-red-700 font-semibold">React</span>,{" "}
                <span className="text-red-700 font-semibold">
                    Django REST framework
                </span>
                , <span className="text-red-700 font-semibold">AWS IoT</span>.
            </p>,
        ],
    },
    {
        color: "yellow-500",
        position: "Research Asistant",
        company: "New York University",
        company_link: "https://ai4ce.github.io/",
        time: "Mar. 2021 - Present.",
        items: [
            <p key="ra-1">
                Led a cross-functional team to develop an AI-powered 3D model
                sharing platform using{" "}
                <span className="text-yellow-500 font-semibold">React</span>,{" "}
                <span className="text-yellow-500 font-semibold">
                    Django REST framework
                </span>
                ,{" "}
                <span className="text-yellow-500 font-semibold">
                    AWS API Gateway
                </span>
                ,{" "}
                <span className="text-yellow-500 font-semibold">
                    AWS Lambda
                </span>
                , and{" "}
                <span className="text-yellow-500 font-semibold">
                    AWS RDS MySQL
                </span>
                .
            </p>,
            <p key="ra-2">
                Designed and developed an{" "}
                <span className="text-yellow-500 font-semibold">
                    interactive map
                </span>{" "}
                based on{" "}
                <span className="text-yellow-500 font-semibold">
                    D3 and WebGL
                </span>{" "}
                to make users label the edges of the nearest neighbors inside
                our 3D model dataset.
            </p>,
            <p key="ra-3">
                <span className="text-yellow-500 font-semibold">
                    Designed the algorithm
                </span>{" "}
                to combine user-labeled graph data and our unlabeled dataset to
                compute the more accurate clustreing results.
            </p>,
        ],
    },
];

export const EDUCATION = [
    {
        img: "nyu.jpg",
        name: "NYU",
        time: "2020 ~ present.",
        major: "Data Science",
        caption: "Now, I have a NYU unicorn and we have the same T-shirt!",
    },
    {
        img: "cuhk.jpg",
        name: "CUHK",
        time: "2017 ~ 2019",
        major: "Anthropology",
        caption:
            "I always enjoy the sunset outside the Anthropology department.",
    },
    {
        img: "hkbu.jpg",
        name: "HKBU",
        time: "2011 ~ 2015",
        major: "Journalism",
        caption: `A paper on my teacher's desk said: "Cry is meaningless. Turn a sigh into a sign of vitality."`,
    },
];
