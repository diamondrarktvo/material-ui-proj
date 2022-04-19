// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

// Material Cards
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";

// Images
import post1 from "assets/images/examples/testimonial-6-2.jpg";
import post2 from "assets/images/examples/testimonial-6-3.jpg";
import post3 from "assets/images/examples/blog-9-4.jpg";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container >
          <Grid item md={12} sx={{ ml: { xs: 0, lg: 3 }, mb: { xs: 6, md: 6 } }}>
            <MKTypography variant="h3" textAlign="center" sx={{mb : {xs : 5}}}>Les 6 derniers inscrits comme Membres de Hoag Prime</MKTypography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} lg={4}>
                    <TransparentBlogCard
                    image={post1}
                    title="Rover raised $65 million"
                    description="Finding temporary housing for your dog should be as easy as renting an Airbnb. That’s the idea behind Rover ..."
                    action={{
                        type: "internal",
                        route: "/pages/blogs/author",
                        color: "info",
                        label: "Voir profil",
                    }}
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <TransparentBlogCard
                    image={post2}
                    title="MateLabs machine learning"
                    description="If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ..."
                    action={{
                        type: "internal",
                        route: "/pages/blogs/author",
                        color: "info",
                        label: "Voir profil",
                    }}
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <TransparentBlogCard
                    image={post3}
                    title="MateLabs machine learning"
                    description="If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ..."
                    action={{
                        type: "internal",
                        route: "/pages/blogs/author",
                        color: "info",
                        label: "Voir profil",
                    }}
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <TransparentBlogCard
                    image={post3}
                    title="MateLabs machine learning"
                    description="If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ..."
                    action={{
                        type: "internal",
                        route: "/pages/blogs/author",
                        color: "info",
                        label: "Voir profil",
                    }}
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <TransparentBlogCard
                    image={post3}
                    title="MateLabs machine learning"
                    description="If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ..."
                    action={{
                        type: "internal",
                        route: "/pages/blogs/author",
                        color: "info",
                        label: "Voir profil",
                    }}
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <TransparentBlogCard
                    image={post3}
                    title="MateLabs machine learning"
                    description="If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ..."
                    action={{
                        type: "internal",
                        route: "/pages/blogs/author",
                        color: "info",
                        label: "Voir profil",
                    }}
                    />
                </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4} md={4} sx={{ m: "auto" }}>
            <MKBox position="relative">
                 <CenteredBlogCard
                image="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                title="Pour connaitre les autres membres de Hoag Prime"
                action={{
                    type: "internal",
                    route: "/pages/authentication/sign-up",
                    color: "info",
                    label: "Cliquez ici",
                }}
                />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
