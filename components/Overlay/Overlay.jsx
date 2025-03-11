import { useDispatch, useSelector } from "react-redux";
import styles from "./overlay.module.scss";
import { useEffect } from "react";
import Contact from "../Contact/Contact";
import About from "../About/About";
import Events from "../Events/Events";
import ComingSoon from "../ComingSoon/ComingSoon";
import { reverseAnimation } from "../../store/experienceAnimationsSlice/experienceAnimationsSlice";
import OverlayBackBtn from "./OverlayBackBtn/OverlayBackBtn";
export default function Overlay() {
  const dispatch = useDispatch();

  const curState = useSelector((state) => state.experienceAnimations.curStage);
  const animationStage = useSelector(
    (state) => state.experienceAnimations.animationStage
  );

  return (
    <div
      className={styles.overlay}
      style={
        curState === "landing"
          ? { opacity: 0, pointerEvents: "none" }
          : { opacity: 1, pointerEvents: "auto" }
      }
    >
      <OverlayBackBtn />
      {/* {curState === "contact" && <Contact />}
      {curState === "about" && <About />}
      {curState === "events" && <ComingSoon />}
      {curState === "speakers" && <ComingSoon />} */}
      <div
        className={styles.overlayContainer}
        style={
          curState === "contact"
            ? { opacity: 1, pointerEvents: "auto" }
            : { opacity: 0, pointerEvents: "none" }
        }
      >
        <Contact />
      </div>
      <div
        className={styles.overlayContainer}
        style={
          curState === "about"
            ? { opacity: 1, pointerEvents: "auto" }
            : { opacity: 0, pointerEvents: "none" }
        }
      >
        <About />
      </div>
      <div
        className={styles.overlayContainer}
        style={
          curState === "events"
            ? { opacity: 1, pointerEvents: "auto" }
            : { opacity: 0, pointerEvents: "none" }
        }
      >
        <Events />
      </div>
      <div
        className={styles.overlayContainer}
        style={
          curState === "speakers"
            ? { opacity: 1, pointerEvents: "auto" }
            : { opacity: 0, pointerEvents: "none" }
        }
      >
        <ComingSoon />
      </div>
    </div>
  );
}
