import LightDarkMode from "../light-dark-mode";
import RandomColor from "../random-color";
import TicTacToe from "../tic-tac-toe";
import Accordian from "../accordian";
import TreeView from "../tree-view";
import { useContext } from "react";
import { FeatureFlagsContext } from "./context";

export default function FeatureFlags() {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);
  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor />,
    },
    {
      key: " showAccordian",
      component: <Accordian />,
    },
    {
      key: "showTreeView",
      component: <TreeView />,
    },
  ];

  function checkEnabledFlags(getCurrentKey) {
    return enabledFlags[getCurrentKey];
  }
  if (loading) return <h1>Loading data! Please wait.</h1>;
  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
}
