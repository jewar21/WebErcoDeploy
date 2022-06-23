import {
  projectsConverInfo,
  projectsGeneralData
} from "../../../content/data/projectData";

// components
import Container from "../../../components/Navigation/Container";
import GeneralCover from "../../../components/PartialComponents/GeneralCover/GeneralCover";
import ViewProjects from "../../../components/Projects/ViewProjects";
import EcosystemBanner from "../../../components/PartialComponents/EcosystemBanner";

const index = () => {
  return (
    <Container>
      <GeneralCover dataCover={projectsConverInfo} />
      <ViewProjects dataProjects={projectsGeneralData} />
      <EcosystemBanner />
    </Container>
  );
};

export default index;
