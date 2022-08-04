// @mui material components
import Icon from "@mui/material/Icon";


// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import Author from "layouts/pages/landing-pages/author";
import SignIn from "layouts/pages/authentication/sign-in";
import SignUp from "layouts/pages/authentication/sign-up";
import Presentation from "layouts/pages/presentation";
import AboutValeur from "layouts/pages/landing-pages/about-us/valeur";
import AvantageMembre from "layouts/pages/landing-pages/prime";
import ListMembre from "layouts/pages/landing-pages/liste-membres";

const routes = [
  {
    name: "Nos solutions",
    icon: <Icon>help</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "Selon",
        collapse: [
          {
            name: "vos besoins",
            route: "/",
            component: <Presentation />,
          },
          {
            name: "vos objectifs",
            route: "/",
            component: <Presentation />,
          },
        ],
      },
    ],
  },
  {
    name: "MatchMaking Events",
    icon: <Icon>event</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "Pages events",
        collapse: [
          {
            name: "Calendrier des évènements",
            route: "/pages/landing-pages/about-us",
            component: <AboutUs />,
          },
          {
            name: "Inscrivez vos évènements",
            route: "/pages/landing-pages/contact-us",
            component: <ContactUs />,
          },
          {
            name: "Trouver des organisateurs d'évènements",
            route: "/pages/landing-pages/author",
            component: <Author />,
          },
        ],
      },
    ],
  },
  {
    name: "Hoag Prime",
    icon: <Icon>mood</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "Pages prime",
        collapse: [
          {
            name: "Vos avantages",
            route: "/pages/landing-pages/prime",
            component: <AvantageMembre />,
          },
          {
            name: "Membres",
            route: "/pages/landing-pages/liste-membres",
            component: <ListMembre />,
          },
          {
            name: "Devenir membre",
            route: "/pages/authentication/sign-up",
            component: <SignUp />,
          },
        ],
      },
    ],
  },
  {
    name: "A propos",
    icon: <Icon>info</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "Page d'apropos",
        collapse: [
          {
            name: "Vision et Mission",
            route: "/pages/landing-pages/about-us",
            component: <AboutUs />,
          },
          {
            name: "Nos valeurs",
            route: "/pages/landing-pages/about-us/valeur",
            component: <AboutValeur />
          },
        ],
      },
    ],
  },
  {
    name: "Nous contacter",
    icon: <Icon>contacts</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "landing pages",
        collapse: [
          {
            name: "about us",
            route: "/pages/landing-pages/about-us",
            component: <AboutUs />,
          },
          {
            name: "contact us",
            route: "/pages/landing-pages/contact-us",
            component: <ContactUs />,
          },
          {
            name: "author",
            route: "/pages/landing-pages/author",
            component: <Author />,
          },
        ],
      },
      {
        name: "account",
        collapse: [
          {
            name: "sign in",
            route: "/pages/authentication/sign-in",
            component: <SignIn />,
          },
        ],
      },
    ],
  },
  
];

export default routes;
