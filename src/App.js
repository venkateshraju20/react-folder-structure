import "./App.css";
import Folder from "./components/Folder";
import structureData from "./data/folderData";

function App() {
  return (
    <div>
      <Folder structureData={structureData} />
    </div>
  );
}

export default App;
