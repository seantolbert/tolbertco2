import QuotateLogo from "../assets/Quotate_Logo.png";
import QuotateImage from "../assets/quotate_image.png";

import JODImage from "../assets/JOD_image.png";
import JODLogo from "../assets/sun_savage2.png";

import fayvsImage from "../assets/fayvs_image.png";
import fayvsLogo from "../assets/Fayvs.png";

import { faReact, faPython } from "@fortawesome/free-brands-svg-icons";

export const projects = [
  {
    title: "Jungles of Dorado",
    pageImage: JODImage,
    logoImage: JODLogo,
    description:
      "Jungles ofr Dorado is a Django and python based app leveraging Wagtail as a CMS. My client can log in and change te artrangement of objects on each blog post, post images to his gallery, change background images for each page, and more.",
    link: "https://www.junglesofdorado.com/",
    git: "https://github.com/seantolbert/Jungles-of-Dorado",
    technology: faPython,
  },
  {
    title: "Quotate",
    pageImage: QuotateImage,
    logoImage: QuotateLogo,
    description:
      "Quotate was a simple dempnstration of a full featured CRUD app using react and firebase. Users can explore which bookquotes their friends have stored from their favorite novels.",
    link: "https://quotate-bb48d.web.app/",
    git: "https://github.com/seantolbert/quotate-react",
    technology: faReact,
  },
  {
    title: "Fayvs",
    pageImage: fayvsImage,
    logoImage: fayvsLogo,
    description:
      "Fayvs is another simple CRUD app using React, firebase, but with a focus on leveraging Material UI. Users can log in and can store their achievements and view them in the form of a timeline to better appreciate their current position in life.",
    link: "https://fayvs-e116b.firebaseapp.com/",
    git: "https://github.com/seantolbert/fayvs",
    technology: faReact,
  },
];
