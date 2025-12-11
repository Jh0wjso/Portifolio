import "./Certifications.css";
import { HiCodeBracket } from "react-icons/hi2";
import { RiBracesLine } from "react-icons/ri";
import { PiBracketsRoundBold } from "react-icons/pi";
import saa from "../../assets/Home/saa-c03.png";

export default function Certifications() {
  return (
    <main className="aboutMe" id="#aboutMe">
      <div className="aboutMeContent">
        <div className="whoAmI">
          <div className="d-flex">
            <strong className="highlighted-text h3">certifications</strong>
            <strong className="h3">
              <PiBracketsRoundBold />
            </strong>
          </div>
            <img src={saa} width={250} />
        </div>
        <div className="my-picture">
          <p className="aboutMeText">
            I recently earned the AWS Solutions Architect – Associate (SAA-C03)
            certification, a key milestone in my growth as a cloud engineer.
            This journey strengthened my understanding of distributed systems,
            serverless architectures, networking, security, and designing
            scalable, high-availability solutions on AWS. <br />
            <br />
            Preparing for the SAA-C03 required discipline, consistency, and deep
            technical study. It allowed me to expand my skills beyond software
            engineering and develop a stronger architectural mindset focused on
            performance, resilience, and cost-optimization. <br />
            <br /> This certification reflects my commitment to building
            reliable, scalable cloud-native applications—and to continuously
            improving as an engineer.
          </p>
        </div>
      </div>
    </main>
  );
}
