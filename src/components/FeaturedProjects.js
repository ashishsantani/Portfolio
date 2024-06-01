import img4 from "./images/ashCourseBundler.png"
import img5 from "./images/ashEcommerce.png"
import img6 from "./images/expense-tracker.png"
import { SiExpress, SiMongodb, SiReact } from "react-icons/si";
import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoNodejs } from "react-icons/bi";
import { FaSquareJs } from "react-icons/fa6";


const featuredItems = [
    {
        id: 1,
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
    {
        id: 2,
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
        id: 3,
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
];
export default featuredItems;