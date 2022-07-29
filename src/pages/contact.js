import FormModal from "../components/form/FormModal";

import templatedata from "../data/formdata.json";
import { Helmet } from "react-helmet";

import logo from "../assets/unitedstatesfamilymarketing.webp"

function App() {
  return (
    <header className="App-header background">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{templatedata.title}</title>
        <meta name="description" content={templatedata.subtitle} />
        <link rel="canonical" href={window.location.href} />
        <meta property="og:image" content={logo}/>
      </Helmet>

      <FormModal />
    </header>
  );
}

export default App;
