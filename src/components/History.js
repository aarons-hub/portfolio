import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export const History = () => {
  return (
    <>
      <div className="zone-container history">
        <motion.div
          initial={{ opacity: 0, transform: "translateY(1000px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          className="zone-content history"
        >
          <div className="zone-svg-heading history">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1475.358"
              height="174.001"
              viewBox="0 0 1475.358 174.001"
            >
              <g
                id="Group_277"
                data-name="Group 277"
                transform="translate(-3513.5 -2681)"
              >
                <path
                  id="path1450"
                  d="M464,15.255V154.689a10.275,10.275,0,0,0,10.253,10.275l125.594.277a4.534,4.534,0,0,0,3.37-7.577l-45.873-50.656c-3.8-4.2-2.389-8.72,2.736-11.11,9.431-4.4,22.931-13.552,26.734-30.859,1.213-5.519,1.112-14.807.171-20.384-3.962-23.492-20.954-35.17-37.647-38.573-5.539-1.129-14.77-1.118-20.432-1.139-17.423-.064-41.248-.013-54.653.025A10.292,10.292,0,0,0,464,15.255Z"
                  transform="translate(4150.167 2683.151)"
                  fill="#febe1e"
                />
                <circle
                  id="Ellipse_23"
                  data-name="Ellipse 23"
                  cx="85.5"
                  cy="85.5"
                  r="85.5"
                  transform="translate(4373.5 2683)"
                  fill="#febe1e"
                />
                <path
                  id="Path_484"
                  data-name="Path 484"
                  d="M1026.637,170.22a79.183,79.183,0,0,1-25.2-13.41c-4-3.172-3.968-9.084-.356-12.7L1100.5,44.7c3.612-3.612,9.525-3.644,12.7.357a79.187,79.187,0,0,1,13.407,25.2,96.3,96.3,0,0,1,3.513,18.121,79.778,79.778,0,0,1-2.634,27.209,96.05,96.05,0,0,1-6.93,17.107,79.459,79.459,0,0,1-45.607,37.525,96.277,96.277,0,0,1-18.121,3.51,80,80,0,0,1-12.061,0,96.189,96.189,0,0,1-18.121-3.509Zm-49.175-69.491a79.574,79.574,0,0,1,25.31-81.977,96.617,96.617,0,0,1,15.384-10.2,79.574,79.574,0,0,1,85.364,8.59c4,3.172,3.97,9.082.358,12.694l-99.422,99.417c-3.612,3.612-9.526,3.645-12.7-.355a79.074,79.074,0,0,1-7.35-11.069,96.582,96.582,0,0,1-6.951-17.1Z"
                  transform="translate(2970.31 2681.044)"
                  fill="#febe1e"
                />
                <path
                  id="Path_481"
                  data-name="Path 481"
                  d="M871.7,152.37V98.289a9.958,9.958,0,0,0-9.958-9.958h-3.784A9.958,9.958,0,0,1,848,78.373V11.958A9.958,9.958,0,0,1,857.958,2H971.482a9.958,9.958,0,0,1,9.958,9.958V78.373a9.958,9.958,0,0,1-9.958,9.958h-2.909a9.958,9.958,0,0,0-9.958,9.958v54.08a9.958,9.958,0,0,1-9.958,9.958h-67a9.958,9.958,0,0,1-9.958-9.958Z"
                  transform="translate(3322.922 2686.064)"
                  fill="#febe1e"
                />
                <rect
                  id="Rectangle_492"
                  data-name="Rectangle 492"
                  width="95"
                  height="158"
                  rx="9"
                  transform="translate(3781.5 2690)"
                  fill="#febe1e"
                />
                <path
                  id="Path_486"
                  data-name="Path 486"
                  d="M404.244,4829.933a7.947,7.947,0,0,1-7.947-7.947v-75.874l-34.208-60.627A9.712,9.712,0,0,1,370.548,4671H515.641a9.712,9.712,0,0,1,8.459,14.484l-33.326,59.063v77.438a7.947,7.947,0,0,1-7.947,7.947Z"
                  transform="translate(4463.491 -1982.054)"
                  fill="#febe1e"
                />
                <g
                  id="Group_275"
                  data-name="Group 275"
                  transform="translate(3514 2689.83)"
                >
                  <rect
                    id="Rectangle_493"
                    data-name="Rectangle 493"
                    width="95"
                    height="158"
                    rx="9"
                    transform="translate(-0.5 0.17)"
                    fill="#febe1e"
                  />
                  <rect
                    id="Rectangle_494"
                    data-name="Rectangle 494"
                    width="94"
                    height="158"
                    rx="9"
                    transform="translate(103.5 0.17)"
                    fill="#febe1e"
                  />
                </g>
              </g>
            </svg>
          </div>
          <div className="zone-inner history">
            <div className="history-wrapper">
              <div className="history-items">
                <Swiper
                  mousewheel={true}
                  pagination={true}
                  modules={[Mousewheel, Pagination]}
                  grabCursor={true}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                    },
                    1024: {
                      slidesPerView: 2,
                    },
                  }}
                >
                  <SwiperSlide>
                    <div className="card">
                      <div className="description"></div>
                      <div className="line-contents">
                        <div className="line noline"></div>
                        <div className="dot"></div>
                        <div className="line"></div>
                      </div>
                      <div className="description">
                        <h2>2022</h2>
                        <p className="title">
                          Front End Web Developer / Designer
                        </p>
                        <p className="employ">@ Brisbane Catholic Education</p>
                        <p>
                          Front End Web Developer / Designer Brisbane Catholic
                          Education BCE is the second largest non-Government
                          employer in Queensland, supporting some 75,000
                          students and 12,500 employees in 146 school
                          communities and five office locations, all located in
                          South East Queensland.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="card">
                      <div className="description top">
                        <p className="title">Art Director / Manager</p>
                        <p className="employ">@ Brisbane Imagesetter</p>
                        <p>
                          Art Director / Manager Brisbane Imagesetter Brisbane
                          Imagesetter was my own one-stop boutique art studio
                          offering hi-resolution product photography, Giclee
                          printing, print design and web design.
                        </p>
                        <h2>2009</h2>
                      </div>
                      <div className="line-contents">
                        <div className="line"></div>
                        <div className="dot"></div>
                        <div className="line"></div>
                      </div>
                      <div className="description"></div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="card">
                      <div className="description"></div>
                      <div className="line-contents">
                        <div className="line"></div>
                        <div className="dot"></div>
                        <div className="line"></div>
                      </div>
                      <div className="description">
                        <h2>1995</h2>
                        <p className="title">Mac Operator</p>
                        <p className="employ">
                          @ Colourscan - Bowen Hills, Brisbane
                        </p>
                        <p>
                          Colourscan was a mass production offset printing firm
                          with a staff of forty. They offered a range of
                          pre-press and offset services. The core business was
                          web offset continuous printing.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="card">
                      <div className="description top">
                        <p className="title">Mac Operator / Manager</p>
                        <p className="employ">
                          @ Schacher Hamilton Brown - Bowen Hills, Brisbane
                        </p>
                        <p>
                          Schacher Hamilton Brown was an advertising agency of
                          ten staff. Their core clients were Brisbane Car Sound
                          and Discount Liquor King.
                        </p>
                        <h2>1991</h2>
                      </div>
                      <div className="line-contents">
                        <div className="line"></div>
                        <div className="dot"></div>
                        <div className="line"></div>
                      </div>
                      <div className="description"></div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="card">
                      <div className="description"></div>
                      <div className="line-contents">
                        <div className="line"></div>
                        <div className="dot"></div>
                        <div className="line"></div>
                      </div>
                      <div className="description">
                        <h2>1990</h2>
                        <p className="title">Desktop Publisher Mac Operator</p>
                        <p className="employ">
                          @ Savage Type Pty. Ltd. — Fortitude Valley, Brisbane
                        </p>
                        <p>
                          Savage Type was a Type Production Trade House for
                          studios and advertising agencies. nd largest
                          non-Government employer in Queensland, supporting some
                          75,000 students and 12,500 employees in 146 school
                          communities and five office locations, all located in
                          South East Queensland.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="card">
                      <div className="description top">
                        <h2>1989</h2>
                        <p className="title">Desktop Publisher Mac Operator</p>
                        <p className="employ">
                          @ Lasermedia Pty. Ltd. — Mackay, Queensland
                        </p>
                        <p>
                          Lasermedia was a pre-press and advertising studio. It
                          was one of the first studios in Queensland to have a
                          laser imagesetter to produce fully paginated artwork
                          to film.
                        </p>
                      </div>
                      <div className="line-contents">
                        <div className="line"></div>
                        <div className="dot"></div>
                        <div className="line"></div>
                      </div>
                      <div className="description"></div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="card">
                      <div className="description"></div>
                      <div className="line-contents">
                        <div className="line"></div>
                        <div className="dot"></div>
                        <div className="line"></div>
                      </div>
                      <div className="description">
                        <h2>1988</h2>
                        <p className="title">Compositor Typesetter</p>
                        <p className="employ">
                          @ The Pioneer Newspaper — Mackay, Queensland
                        </p>
                        <p>
                          Pioneer News was a tabloid newspaper with thirteen
                          staff members.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="card">
                      <div className="description top">
                        <p className="title">Compositor Typesetter</p>
                        <p className="employ">
                          @ Cross Printery — Mackay, Queensland
                        </p>
                        <p>
                          Cross Printery was a family-owned trade print house
                          with thirteen staff.
                        </p>
                        <h2>1984</h2>
                      </div>
                      <div className="line-contents">
                        <div className="line"></div>
                        <div className="dot"></div>
                        <div className="line"></div>
                      </div>
                      <div className="description"></div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};
