// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

// Images
import macbook from "assets/images/macbook.png";

// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container alignItems="center">
          <Grid item md={6} sx={{ ml: { xs: 0, lg: 3 }, mb: { xs: 12, md: 0 } }}>
            <MKTypography variant="h4">Nos missions</MKTypography>
            <MKTypography variant="body2" color="text" mb={3}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Aenean scelerisque a ex eget posuere. Pellentesque et lectus nulla. Sed dignissim, 
                  dignissim vel cursus vitae, iaculis in neque. Suspendisse ut elementum arcu, eget blandit nibh. 
                  Aliquam eros massa, luctus in elit eget, efficitur tempor lorem. Aenean dapibus sodales semper.
            </MKTypography>
          </Grid>
          <Grid item xs={12} md={5} sx={{ ml: "auto" }}>
            <MKBox position="relative">
              <MKBox component="img" src={macbook} alt="macbook" width="100%" />
            </MKBox>
          </Grid>
        </Grid>
      </Container>

      <Container>
        <Grid container alignItems="center" sx = {{ mt: { xs: 0, lg: 25}}}>
          <Grid item xs={12} md={5} sx={{ mr: "auto" }}>
            <MKBox position="relative">
              <MKBox component="img" src={macbook} alt="macbook" width="100%" />
            </MKBox>
          </Grid>
          <Grid item md={6} sx={{ ml: { xs: 0, lg: 3 }, mb: { xs: 12, md: 0 }}}>
            <MKTypography variant="h4">Nos visions</MKTypography>
            <MKTypography variant="body2" color="text" mb={3}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Aenean scelerisque a ex eget posuere. Pellentesque et lectus nulla. Sed dignissim, 
                  dignissim vel cursus vitae, iaculis in neque. Suspendisse ut elementum arcu, eget blandit nibh. 
                  Aliquam eros massa, luctus in elit eget, efficitur tempor lorem. Aenean dapibus sodales semper.
            </MKTypography>
          </Grid>
        </Grid>
      </Container>

      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={4} sx={{ m: "auto", mt: { xs: 10, lg: 20 } }}>
            <CenteredBlogCard
              image="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              title="Partager ou redifinir votre vision"
              description="Voulez vous partager ou redifinir votre vision ? Pours s'entretenir gratuitement avec l'un de nos experts"
              action={{
                type: "internal",
                route: "pages/company/about-us",
                color: "info",
                label: "Cliquez ici",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
