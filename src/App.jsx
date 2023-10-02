import NavMenu from "./components/NavMenu/NavMenu";
import NewsData from "./components/NewsData/NewsData";

function App() {
  return (
    <div>
      <div className="container mx-auto max-w-screen-xl-py-4">
        <NavMenu />
        <NewsData/>
      </div>
    </div>
  );
}

export default App;
