// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
        >
          <MKBadge
            variant="contained"
            color="info"
            badgeContent="Nous visiter"
            container
            sx={{ mb: 2 }}
          />
          <MKTypography variant="body1" color="text">
            Ces liens peut vous être utiles
          </MKTypography>
        </Grid>

        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Acheter
                  </>
                }
                description="Pour acheter des articles surs et fiables avec le meilleur rapport Qualité/Prix"
              />
              <RotatingCardBack
                image={bgBack}
                title="Acheter nos produits"
                description="Visiter notre site ecommerce"
                action={{
                  type: "external",
                  route: "/sections/page-sections/page-headers",
                  label: "cliquez ici",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Devenez des acteurs
                  </>
                }
                description="Pour devenir des acteurs économiques fiables et crédibles à Madagascar"
              />
              <RotatingCardBack
                image={bgBack}
                title="Devenez des acteurs"
                description="Joignez nous parmi les membres de Hoag Prime"
                action={{
                  type: "external",
                  route: "/sections/page-sections/page-headers",
                  label: "Cliquez ici",
                }}
              />
            </RotatingCard>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
