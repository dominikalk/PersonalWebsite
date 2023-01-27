import { Tab } from "pages/index";
import { Dispatch, SetStateAction } from "react";
import AppIcon from "components/common/AppIcon";
import { useWindowSize } from "hooks/useWindowResize";
import { useHomeContext } from "providers/home.provider";

type NavbarProps = {
  currentTab: Tab;
  setCurrentTab: Dispatch<SetStateAction<Tab>>;
};

const Navbar = ({ currentTab, setCurrentTab }: NavbarProps) => {
  const { isTextScrambled, setIsTextScrambled } = useHomeContext();
  const size = useWindowSize();

  const handleGithubClicked = () => {
    window.open("https://github.com/dominikalk", "_blank");
  };

  if (!size.width) return null;
  return (
    <div className="fixed bottom-0 w-full flex justify-center z-20">
      <div className="mb-4 min-w-[40px] h-16 rounded-2xl p-2.5 bg-white bg-opacity-20 gap-x-4 flex">
        <AppIcon
          name="About Me"
          icon="/icons/user.svg"
          active={currentTab === "about"}
          onClick={() =>
            setCurrentTab(currentTab === "about" ? undefined : "about")
          }
        />
        <AppIcon
          name="Projects"
          icon="/icons/code.svg"
          active={currentTab === "projects"}
          onClick={() =>
            setCurrentTab(currentTab === "projects" ? undefined : "projects")
          }
        />
        <AppIcon
          name="Skills"
          icon="/icons/lightbulb.svg"
          active={currentTab === "skills"}
          onClick={() =>
            setCurrentTab(currentTab === "skills" ? undefined : "skills")
          }
        />
        <AppIcon
          name="Contact Me"
          icon="/icons/envelope.svg"
          active={currentTab === "contact"}
          onClick={() =>
            setCurrentTab(currentTab === "contact" ? undefined : "contact")
          }
        />
        {size.width >= 640 ? (
          <>
            <AppIcon
              name="Games"
              icon="/icons/gamepad.svg"
              active={currentTab === "games"}
              onClick={() =>
                setCurrentTab(currentTab === "games" ? undefined : "games")
              }
            />
            {isTextScrambled && (
              <AppIcon
                name="Antivirus"
                icon="/icons/antivirus.svg"
                onClick={() => {
                  setCurrentTab(currentTab === "virus" ? undefined : "virus");
                  setIsTextScrambled(false);
                }}
              />
            )}
            <AppIcon
              name="Statistics"
              icon="/icons/graph.svg"
              active={currentTab === "stats"}
              onClick={() =>
                setCurrentTab(currentTab === "stats" ? undefined : "stats")
              }
            />
            <AppIcon
              name="GitHub Link"
              icon="/icons/github.svg"
              onClick={() => handleGithubClicked()}
            />
            {!isTextScrambled && (
              <AppIcon
                name="Don't Click This"
                icon="/icons/question.svg"
                onClick={() => {
                  setCurrentTab(currentTab === "virus" ? undefined : "virus");
                  setIsTextScrambled(true);
                }}
              />
            )}
          </>
        ) : (
          <AppIcon
            name="Apps"
            icon="/icons/ellipsis.svg"
            active={currentTab === "all"}
            onClick={() =>
              setCurrentTab(currentTab === "all" ? undefined : "all")
            }
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
