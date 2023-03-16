import QuotateLogo from "../assets/Quotate_Logo.png";
import QuotateImage from "../assets/quotate_image.png";

import JODImage from "../assets/JOD_image.png";
import JODLogo from "../assets/sun_savage2.png";

import fayvsImage from "../assets/fayvs_image.png";
import fayvsLogo from "../assets/Fayvs.png";

import DjangoLogo from "../assets/django-icon.svg";
import WagtailLogo from "../assets/wagtail.svg";
import PostgresqlLogo from "../assets/postgresql.svg";
import ReactLogo from "../assets/react.svg";
import TailwindLogo from "../assets/tailwindcss-icon.svg";
import FirebaseLogo from "../assets/firebase.svg";
import MaterialLogo from "../assets/material-ui.svg";

export const projects = [
  {
    title: "Jungles of Dorado",
    pageImage: JODImage,
    logoImage: JODLogo,
    description:
      "Jungles ofr Dorado is a Django and python based app leveraging Wagtail as a CMS. My client can log in and change te artrangement of objects on each blog post, post images to his gallery, change background images for each page, and more.",
    link: "https://www.junglesofdorado.com/",
    git: "https://github.com/seantolbert/Jungles-of-Dorado",
    technology: [
      { name: "django", value: DjangoLogo },
      { name: "wagtail", value: WagtailLogo },
      { name: "postgresql", value: PostgresqlLogo },
    ],
  },
  {
    title: "Quotate",
    pageImage: QuotateImage,
    logoImage: QuotateLogo,
    description:
      "Quotate was a simple dempnstration of a full featured CRUD app using react and firebase. Users can explore which bookquotes their friends have stored from their favorite novels.",
    link: "https://quotate-bb48d.web.app/",
    git: "https://github.com/seantolbert/quotate-react",
    technology: [
      { name: "react", value: ReactLogo },
      { name: "firebase", value: FirebaseLogo },
      { name: "tailwindcss", value: TailwindLogo },
    ],
  },
  {
    title: "Fayvs",
    pageImage: fayvsImage,
    logoImage: fayvsLogo,
    description:
      "Fayvs is another simple CRUD app using React, firebase, but with a focus on leveraging Material UI. Users can log in and can store their achievements and view them in the form of a timeline to better appreciate their current position in life.",
    link: "https://fayvs-e116b.firebaseapp.com/",
    git: "https://github.com/seantolbert/fayvs",
    technology: [
      { name: "react", value: ReactLogo },
      { name: "firebase", value: FirebaseLogo },
      { name: "material-ui", value: MaterialLogo },
    ],
  },
];
