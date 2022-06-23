import { useRouter } from "next/router";

// components
import Container from "../../../components/Navigation/Container";
import EcosystemBanner from "../../../components/PartialComponents/EcosystemBanner";

const ProjectItem = () => {
  const router = useRouter();
  // console.log("id de proyecto", router.query.id);
  return (
    <Container>
      <EcosystemBanner />
    </Container>
  );
};

export default ProjectItem;
