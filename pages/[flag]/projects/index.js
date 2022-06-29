import {
  projectsCoverInfo,
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
      <GeneralCover dataCover={projectsCoverInfo} />
      <ViewProjects dataProjects={projectsGeneralData} />
      <EcosystemBanner />
    </Container>
  );
};

export default index;

// export async function getStaticProps() {
//   try {
//     const response = await fetch("http://127.0.0.1:3000/api/hello");
//     const data = await response.json();
//     return {
//       props: { flag: data }
//     };
//   } catch (error) {
//     console.log(error);
//   }
// }
