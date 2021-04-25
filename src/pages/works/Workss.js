import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactImageVideoLightbox from "react-image-video-lightbox";

import {FaSearchPlus, FaPlay} from 'react-icons/fa'

const Workss = ({ item }) => {
  const [isOpen, setisOpen] = useState(false);

  const { size, clickType, title, image, link } = item;

  if (clickType === "photo" || clickType === "video") {
    return (
      <div className={`${size} worksWrapper--item`}>
        <section onClick={() => setisOpen(!isOpen)}>
          <img
          className="detailImage"
          src={`/images/islerimiz/${image}.webp`}
          
          alt="-"
        />
        <main>
          {clickType === "photo" ? <FaSearchPlus/> : <FaPlay/>}
        </main>
        </section>
        
        
        {isOpen && (
          <ReactImageVideoLightbox
            data={[
              {
                url:
                  clickType === "photo"
                    ? `/images/islerimiz/${link}.webp`
                    : link,
                type: clickType,
                altTag: "somee",
              },
            ]}
            startIndex={0}
            showResourceCount={true}
            onCloseCallback={() => setisOpen(!isOpen)}
          />
        )}
      </div>
    );
  } else {
    return (
      <div className={size}>
        <div className="worksWrapper--web">
        <Link
          to="ajanscode"
          target="_blank"
          onClick={(event) => {
            event.preventDefault();
            window.open(link);
          }}
        >
          <img
            className="detailImage"
            src={`/images/islerimiz/${image}.webp`}
            alt="-"
          />
        </Link>
        <div>
          <h5>{title}</h5>
        </div>
        </div>
        
      </div>
    );
  }
};

export default Workss;

// if (item.clickType === "photo") {
//   return (
//     <div className={item.size}>
//       <img
//         src={`/images/islerimiz/${item.image}.webp`}
//         onClick={() => setIsOpenImage(!isOpenImage)}
//         alt="-"
//       />
//       <p>{item.title}</p>
//       {isOpenImage && (
//         <Lightbox
//           mainSrc={`/images/islerimiz/${item.image}.webp`}
//           onCloseRequest={() => setIsOpenImage(!isOpenImage)}
//         />
//       )}
//     </div>
//   );
// }
