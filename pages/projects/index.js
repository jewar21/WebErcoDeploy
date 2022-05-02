// components
import Container from "../../components/Navigation/Container";
import GeneralCover from "../../components/PartialComponents/GeneralCover/GeneralCover";
import EcosystemBanner from "../../components/PartialComponents/EcosystemBanner/EcosystemBanner";

const index = () => {
  return (
    <div>
      <Container>
        <GeneralCover dataCover={dataCover} isActiveQuoteButton={false} />
        <EcosystemBanner />
      </Container>
    </div>
  );
};

export default index;
