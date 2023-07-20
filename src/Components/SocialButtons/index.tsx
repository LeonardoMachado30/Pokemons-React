import Image from "next/image";

import logo_linkedin from "/public/images/logo_linkedin.svg";
import logo_github from "/public/images/logo_github.svg";

export default function SocialButtons() {
  const imagesList = [
    { image: logo_linkedin, url: "www.linkedin.com/in/leo-front-end/" },
    { image: logo_github, url: "github.com/LeonardoMachado30" },
  ];

  const imagesMap = imagesList.map(({ image, url }, index) => {
    return (
      <li key={index}>
        <a href={`https://${url}`} target={`_blank`}>
          <Image src={image} width={40} height={40} alt="LinkedIn" />
        </a>
      </li>
    );
  });

  return <ul className="social">{imagesMap}</ul>;
}
