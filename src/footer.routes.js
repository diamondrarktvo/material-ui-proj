// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-ct-dark.png";

const date = new Date().getFullYear();
// eslint-disable-next-line 
export default {
  brand: {
    name: "HOAG",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/CreativeTim/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/creativetim",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/creativetimofficial",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    },
  ],
  menus: [
    {
      name: "page",
      items: [
        { name: "about us", href: "https://google.com" },
        { name: "ecommerce", href: "https://google.com" },
      ],
    },
    {
      name: "réseaux",
      items: [
        { name: "facebook", href: "https://google.com" },
        { name: "linkedin", href: "https://google.com" },
        { name: "twitter", href: "https://google.com" },
      ],
    },
    {
      name: "Contact",
      items: [
        { name: "contact us", href: "https://www.creative-tim.com/contact-us" },
        { name: "dama@gmail.com", href: "#" },
        { name: "0335689756", href: "#" },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", href: "https://google.com" },
        { name: "privacy policy", href: "https://google.com" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} Site by{" "}
      <MKTypography
        component="a"
        href="https://portfolio.iteam-s.mg/?u=dama"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Dama
      </MKTypography>
      .
    </MKTypography>
  ),
};
