// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container alignItems="">
          <Grid item md={6} sx={{ ml: { xs: 0, lg: 3 }, mb: { xs: 12, md: 0 } }}>
            <MKTypography variant="h4">Parmi les avantages d'être membre de Hoag Prime</MKTypography>
            <MKTypography variant="body2" color="text" mb={3}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Aenean scelerisque a ex eget posuere. Pellentesque et lectus nulla. Sed dignissim, 
                  dignissim vel cursus vitae, iaculis in neque. Suspendisse ut elementum arcu, eget blandit nibh. 
                  Aliquam eros massa, luctus in elit eget, efficitur tempor lorem. Aenean dapibus sodales semper.
                  Aenean scelerisque a ex eget posuere. Pellentesque et lectus nulla. Sed dignissim, 
                  dignissim vel cursus vitae, iaculis in neque. Suspendisse ut elementum arcu, eget blandit nibh. 
                  Aliquam eros massa, luctus in elit eget, efficitur tempor lorem. Aenean dapibus sodales semper.nibh. 
                  Aliquam eros massa, luctus in elit eget, efficitur tempor lorem. Aenean dapibus sodales semper.
                  Aenean scelerisque a ex eget posuere. Pellentesque et lectus nulla. Sed dignissim, 
                  dignissim vel cursus vitae, iaculis in neque. Suspendisse ut elementum arcu, eget blandit nibh. 
                  Aliquam eros massa, luctus in elit eget, efficitur tempor lorem. Aenean dapibus sodales semper.
            </MKTypography>
          </Grid>
          <Grid item xs={12} md={5} sx={{ ml: "auto" }}>
            <MKBox position="relative">
                 <CenteredBlogCard
                image="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                title="Inscrivez vous maintenant pour devenir membre de Hoag Prime"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Aenean scelerisque a ex eget posuere. Pellentesque et lectus nulla. Sed dignissim, 
                                dignissim vel cursus vitae, iaculis in neque. Suspendisse ut elementum arcu, eget blandit nibh. 
                                Aliquam eros massa, luctus in elit eget, efficitur tempor lorem. Aenean dapibus sodales semper."
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
