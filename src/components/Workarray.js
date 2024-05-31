import img1 from "./images/MyPortfolio.png"
import img2 from "./images/MineDog.png"
import img3 from "./images/parthivPortfolio.png"
import img4 from "./images/ashCourseBundler.png"
import img5 from "./images/ashEcommerce.png"
import img6 from "./images/expense-tracker.png"
import { SiExpress, SiMongodb, SiReact } from "react-icons/si";
import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoNodejs } from "react-icons/bi";
import { FaSquareJs } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa"

const workitems = [
    {
        id: 1,
        imgsrc: img1,
        title: "My-Portfolio",
        icons: <>
            <BiLogoHtml5 color="red" style={{paddingRight:"10px"}} />
            <BiLogoCss3 color="blue" style={{paddingRight:"10px"}}/>
            <BiLogoJavascript color="yellow" style={{paddingRight:"10px"}}/>
            <SiReact color="#61dafb" style={{paddingRight:"10px"}}/>
        </>,
        content: "As a passionate and dedicated MERN Stack Developer, I have crafted this website to showcase my expertise in building dynamic and interactive web applications. Here, you'll find a collection of my latest projects, each highlighting my skills.",
        viewbtn: "https://ashportfolio.vercel.app/",
        sourcebtn: "https://github.com/ashishraja/Portfolio"
    },
    {
        id: 2,
        imgsrc: img2,
        title: "MineDog-Clone",
        icons: <>
            <BiLogoHtml5 color="red" style={{paddingRight:"10px"}}/>
            <FaBootstrap color="#6610f2" style={{paddingRight:"10px"}}/>
        </>,
        content: "I developed a sleek and user-friendly MineDog website using HTML and Bootstrap. The site features a modern and responsive design, ensuring optimal performance, effortless navigation and accessibility across all devices.",
        viewbtn: "https://main--jovial-naiad-af5f8f.netlify.app/",
        sourcebtn: "https://github.com/ashishraja/MineDog",
        to: "games"
    },
    {
        id: 3,
        imgsrc: img3,
        icons: <>
            <BiLogoHtml5 color="red" style={{paddingRight:"10px"}} />
            <BiLogoCss3 color="blue" style={{paddingRight:"10px"}} />
            <BiLogoJavascript color="yellow" style={{paddingRight:"10px"}} />
            <SiReact color="#61dafb" style={{paddingRight:"10px"}} />
        </>,
        title: "Client-Portfolio",
        content: "I designed a stunning portfolio website for my client, leveraging the power of HTML, CSS, JavaScript, and React to create a captivating and interactive online presence. The site boasts a sleek, modern aesthetic with a focus on visual appeal and usability.",
        viewbtn: "https://parthiv.vercel.app/",
        sourcebtn: "https://github.com/ashishraja/ClientPortfolio"
    },
    {
        id: 4,
        imgsrc: img4,
        title: "CourseBundler-Clone",
        icons: <>

            <BiLogoHtml5 color="red" style={{paddingRight:"10px"}}/>
            <BiLogoCss3 color="blue" style={{paddingRight:"10px"}}/>
            <BiLogoJavascript color="yellow" style={{paddingRight:"10px"}}/>
            <SiMongodb color="green" style={{paddingRight:"10px"}} />
            <SiExpress color="yellow" style={{paddingRight:"10px"}} />
            <SiReact color="#61dafb" style={{paddingRight:"10px"}} />
            <BiLogoNodejs color="green" style={{paddingRight:"10px"}}/>
        </>,
        content: "Created a full-stack MERN (MongoDB, Express.js, React.js, Node.js) comprehensive ecommerce website aimed at delivering a seamless shopping experience to users. Designed and implemented an admin dashboard enabling CRUD (Create, Read, Update, Delete) operations. Integrated secure payment gateways to ensure safe and reliable transactions for all users.",
        viewbtn: "https://ashcoursebundler.vercel.app",
        sourcebtn: "https://github.com/ashishraja/CourseBundler-Frontend"
    },
    {
        id: 5,
        imgsrc: img5,
        icons: <>
           <BiLogoHtml5 color="red" style={{paddingRight:"10px"}} />
            <BiLogoCss3 color="blue" style={{paddingRight:"10px"}} />
            <BiLogoJavascript color="yellow" style={{paddingRight:"10px"}} />
            <SiMongodb color="green" style={{paddingRight:"10px"}} />
            <SiExpress color="yellow" style={{paddingRight:"10px"}}/>
            <SiReact color="#61dafb" style={{paddingRight:"10px"}} />
            <BiLogoNodejs color="green" style={{paddingRight:"10px"}}/>
        </>,
        title: "Ecommerce-Clone",
        content: "Created a full-stack MERN (MongoDB, Express.js, React.js, Node.js) comprehensive ecommerce website aimed at delivering a seamless shopping experience to users. Designed and implemented an admin dashboard enabling CRUD (Create, Read, Update, Delete) operations, and integrated real-time inventory management for efficient stock control.",
        viewbtn: "https://ashecommerceclone.vercel.app",
        sourcebtn: "https://github.com/ashishraja/Ecommerce-clone-frontend"
    },
    {
        id: 6,
        imgsrc: img6,
        icons: <>
            <BiLogoHtml5 color="red" style={{paddingRight:"10px"}} />
            <BiLogoCss3 color="blue" style={{paddingRight:"10px"}} />
            <SiMongodb color="green" style={{paddingRight:"10px"}} />
            <SiExpress color="yellow" style={{paddingRight:"10px"}}/>
            <BiLogoNodejs color="green" style={{paddingRight:"10px"}} />
            <FaSquareJs color="yellow" style={{paddingRight:"10px"}} />
        </>,
        title: "Expense Tracker",
        content: "Developed an Expense Tracker Application using Node.js, Express, EJS, HTML, and CSS. The application provides a user-friendly interface for easy expense input and tracking, with real-time updates and total amount calculation. Key feature is intuitive and responsive UI design using HTML, CSS, and EJS templating engine for seamless user experience.",
        viewbtn: "https://expense-tracker-umg4.onrender.com/",
        sourcebtn: "https://github.com/ashishraja/expense-tracker"
    },
];
export default workitems;