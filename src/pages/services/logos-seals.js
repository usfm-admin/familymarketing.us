import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import logo from "../../assets/usfmlogo.webp"

const title = 'Logo'

export default function WebDesign() {
  <Helmet>
  <meta charSet="utf-8" />
  <title>{title} - Familymarketing.us</title>
  <link rel="canonical" href="https://familymarketing.us" />
  <meta
    name="description"
    content="United States Family Marketing offers affordable marketing services online."
  />
  <meta property="og:image" content={logo} />
</Helmet>
  return (
    <div className="wdhero ">
      <div className="bg-sky-500/50">
        <div className=" p-12 text-3xl text-white">
          United States Family Marketing provides advanced {title} services
          for businesses of all sizes.
        </div>
        <Link className="m-10 border-x-2 p-2 text-white bg-blue-500 hover:bg-blue-400 border-black" to={'/contact'}>Contact</Link>

      </div>      {/* Web Design */}
    </div>
  );
}
