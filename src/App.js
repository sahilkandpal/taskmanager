import MainSection from "./components/MainSection/MainSection";
import RightBox from "./components/RightBox/RightBox";
import SideNav from "./components/SideNav/SideNav";
function App() {
  return (
    <div className="App">
      <SideNav />
      <MainSection />
      <RightBox />
    </div>
  );
}
export default App;
