import facebook from "../../assets/usfm-facebook.webp";
import pinterest from "../../assets/usfm-pinterest.webp";
import twitter from "../../assets/usfm-twitter.webp";
import instagram from "../../assets/usfm-instagram.webp";
import github from "../../assets/usfm-github.webp";
import yelp from "../../assets/usfm-yelp.webp";

export default function Footer() {
  return (
    <section className="bg-slate-200/50 w-full p-2 m-auto text-center">
      <div className="flex flex-row justify-center items-center">
        <a
          href="https://www.facebook.com/unitedstatesfamilymarketing"
          target="_blank"
          rel="noreferrer"
        >
          <img
            alt="United States Family Marketing Social "
            className="transition hover:scale-105 w-8 m-1"
            src={facebook}
          />
        </a>
        <a
          href="https://www.pinterest.com/unitedstatesfamilymarketing/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            alt="United States Family Marketing Social "
            className="transition hover:scale-105 w-8 m-1"
            src={pinterest}
          />
        </a>
        <a
          href="https://twitter.com/familywebdesign"
          target="_blank"
          rel="noreferrer"
        >
          <img
            alt="United States Family Marketing Social "
            className="transition hover:scale-105 w-8 m-1"
            src={twitter}
          />
        </a>
        <a
          href="https://www.instagram.com/usfamilymarketing2022/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            alt="United States Family Marketing Social "
            className="transition hover:scale-105 w-8 m-1"
            src={instagram}
          />
        </a>
        <a
          href="https://github.com/usfm-admin"
          target="_blank"
          rel="noreferrer"
        >
          <img
            alt="United States Family Marketing Social "
            className="transition hover:scale-105 w-8 m-1"
            src={github}
          />
        </a>
        <a
          href="https://www.yelp.com/biz/united-states-family-marketing-mission-viejo"
          target="_blank"
          rel="noreferrer"
        >
          <img
            alt="United States Family Marketing Social "
            className="transition hover:scale-105 w-8 m-1"
            src={yelp}
          />
        </a>
      </div>
      <div className="">
        Website Design by{" "}
        <a
          className="text-blue-400 hover:text-blue-600"
          href="https://familymarketing.us"
        >
          United States Family Marketing
        </a>
      </div>
    </section>
  );
}
