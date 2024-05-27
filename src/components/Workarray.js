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
            <BiLogoHtml5 color="red" size={"30px"} style={{ margin: "0 8px" }} />
            <BiLogoCss3 color="blue" size={"30px"} style={{ margin: "0 8px" }} />
            <BiLogoJavascript color="yellow" size={"30px"} style={{ margin: "0 8px" }} />
            <SiReact color="#61dafb" size={"30px"} style={{ margin: "0 8px" }} />
        </>,
        content: "As a passionate and dedicated MERN Stack Developer, I have crafted this website to showcase my expertise in building dynamic and interactive web applications. Here, you'll find a collection of my latest projects, each highlighting my skills",
        viewbtn: "https://ashportfolio.vercel.app/",
        sourcebtn: "https://github.com/ashishraja/Portfolio"
    },
    {
        id: 2,
        imgsrc: img2,
        title: "MineDog-Clone",
        icons: <>
            <BiLogoHtml5 color="red" size={"30px"} style={{ margin: "0 8px" }} />
            <FaBootstrap color="#6610f2" size={"30px"} style={{ margin: "0 8px" }} />
        </>,
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        viewbtn: "https://main--jovial-naiad-af5f8f.netlify.app/",
        sourcebtn: "https://github.com/ashishraja/MineDog",
        to: "games"
    },
    {
        id: 3,
        imgsrc: img3,
        icons: <>
            <BiLogoHtml5 color="red" size={"30px"} style={{ margin: "0 8px" }} />
            <BiLogoCss3 color="blue" size={"30px"} style={{ margin: "0 8px" }} />
            <BiLogoJavascript color="yellow" size={"30px"} style={{ margin: "0 8px" }} />
            <SiReact color="#61dafb" size={"30px"} style={{ margin: "0 8px" }} />
        </>,
        title: "Client-Portfolio",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        viewbtn: "https://parthiv.vercel.app/",
        sourcebtn: "https://github.com/ashishraja/ClientPortfolio"
    },
    {
        id: 4,
        imgsrc: img4,
        title: "CourseBundler-Clone",
        icons: <>

            <BiLogoHtml5 color="red" size={"30px"} style={{ margin: "0 8px" }} />
            <BiLogoCss3 color="blue" size={"30px"} style={{ margin: "0 8px" }} />
            <BiLogoJavascript color="yellow" size={"30px"} style={{ margin: "0 8px" }} />
            <SiMongodb color="green" size={"30px"} style={{ margin: "0 8px" }} />
            <SiExpress color="yellow" size={"30px"} style={{ margin: "0 8px" }} />
            <SiReact color="#61dafb" size={"30px"} style={{ margin: "0 8px" }} />
            <BiLogoNodejs color="green" size={"30px"} style={{ margin: "0 8px" }} />
        </>,
        content: " Created a full-stack MERN (MongoDB, Express.js, React.js, Node.js) coursebundler website aimed at offering a diverse range of courses for student enrollment. Designed and implemented an admin dashboard enabling CRUD (Create, Read, Update, Delete) operations.",
        viewbtn: "https://ashcoursebundler.vercel.app",
        sourcebtn: "https://github.com/ashishraja/CourseBundler-Frontend"
    },
    {
        id: 5,
        imgsrc: img5,
        icons: <>
           <BiLogoHtml5 color="red" size={"30px"} style={{ margin: "0 8px" }} />
            <BiLogoCss3 color="blue" size={"30px"} style={{ margin: "0 8px" }} />
            <BiLogoJavascript color="yellow" size={"30px"} style={{ margin: "0 8px" }} />
            <SiMongodb color="green" size={"30px"} style={{ margin: "0 8px" }} />
            <SiExpress color="yellow" size={"30px"} style={{ margin: "0 8px" }} />
            <SiReact color="#61dafb" size={"30px"} style={{ margin: "0 8px" }} />
            <BiLogoNodejs color="green" size={"30px"} style={{ margin: "0 8px" }} />
        </>,
        title: "Ecommerce-Clone",
        content: "Created a full-stack MERN (MongoDB, Express.js, React.js, Node.js) comprehensive ecommerce website aimed at delivering a seamless shopping experience to users. Designed and implemented an admin dashboard enabling CRUD (Create, Read, Update, Delete) operations",
        viewbtn: "https://ashecommerceclone.vercel.app",
        sourcebtn: "https://github.com/ashishraja/Ecommerce-clone-frontend"
    },
    {
        id: 6,
        imgsrc: img6,
        icons: <>
            <BiLogoHtml5 color="red" size={"30px"} style={{ margin: "0 8px" }} />
            <BiLogoCss3 color="blue" size={"30px"} style={{ margin: "0 8px" }} />
            <SiMongodb color="green" size={"30px"} style={{ margin: "0 8px" }} />
            <SiExpress color="yellow" size={"30px"} style={{ margin: "0 8px" }} />
            <BiLogoNodejs color="green" size={"30px"} style={{ margin: "0 8px" }} />
            <FaSquareJs color="yellow" size={"30px"} style={{ margin: "0 8px" }} />
        </>,
        title: "Expense Tracker",
        content: "Developed an Expense Tracker Application using Node.js, Express, EJS, HTML, and CSS. The application provides a user-friendly interface for easy expense input and tracking, with real-time updates and total amount calculation. Key feature is intuitive and responsive UI design using HTML, CSS, and EJS templating engine for seamless user experience.",
        viewbtn: "https://https://expense-tracker-umg4.onrender.com/",
        sourcebtn: "https://github.com/ashishraja/expense-tracker"
    },
];
export default workitems;