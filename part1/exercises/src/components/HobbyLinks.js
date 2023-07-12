import React from "react";
export default function HobbyLinks() {
  const hobbies = [
    "https://www.bitgohobby.com/collections/dancing-wings",
    "https://www.bu.edu/lernet/artemis/years/2019/projects/StudentWebsites/Artemis_Websites2019/AnwitaWebsite/Hobbies.html",
  ];
  return (
    <div>
      <ol>
        <li>
          <a href={hobbies[0]}></a>
        </li>
        <li>
          <a href={hobbies[1]}></a>
        </li>
      </ol>
    </div>
  );
}
