import AdminPanel from "./components/AdminPanel";
import AIFeatures from "./components/AIFeatures";
import AIPowered from "./components/AIPowered";
import Footer from "./components/Footer";
import Head from "./components/Head";
import MobileApps from "./components/MobileApps";
import OrbitIcons from "./components/PlayWell";
import PlugAndPlay from "./components/PlugAndPlay";
import PreEvent from "./components/PreEvent";

function App() {
    return (
        <div className="min-h-screen bg-white">
			<Head/>
			<AIPowered/>
			<PreEvent/>
			<OrbitIcons/>
			<AdminPanel/>
			<MobileApps/>
			<AIFeatures/>
			<PlugAndPlay/>
			<Footer/>
        </div>
    );
}

export default App;
