import FormModal from "../components/form/FormModal";

import templatedata from "../data/formdata.json";
import { Helmet } from "react-helmet";

import logo from "../assets/usfmmeta.webp";

function App() {
  return (
    <header>
        <Helmet>
          <title>{templatedata.title}</title>
          <meta name="description" content={templatedata.subtitle} />
          <link rel="canonical" href={window.location.href} />
          <meta property="og:url" content={window.location.href} />
          <meta property="og:image" content={logo} />
          <meta property="og:title" content={templatedata.title} />
        </Helmet>
      <FormModal />
    </header>
  );
}

export default App;
