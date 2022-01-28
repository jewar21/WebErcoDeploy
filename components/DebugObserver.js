import { useRecoilTransactionObserver_UNSTABLE } from "recoil";
import { isMobile, isTablet } from "../recoil/atoms";

const DebugObserver = () => {
  useRecoilTransactionObserver_UNSTABLE(({ snapshot }) => {
    // const isMobileState = snapshot.getLoadable(isMobile).contents;
    // const isTabletState = snapshot.getLoadable(isTablet).contents;
    // console.log("Aquiiiii", isMobileState,);
    window.myDebugState = {
        m: snapshot.getLoadable(isMobile).contents,
        t: snapshot.getLoadable(isTablet).contents,
    }
    //   for (const modifiedAtom of snapshot.getNodes_UNSTABLE({ isModified: true })) {
    //       if (atom.state === "hasValue") {}
    // }
  });
  return null;
};

export default DebugObserver;
