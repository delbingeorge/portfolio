import React from "react";
import "../Posts/Posts.css";

import galleryImgOne from "../../media/images/galleryImgOne.png";
import prizeTwo from "../../media/images/prizeTwo.png";
import prizeThree from "../../media/images/prizeThree.png";
import certificateTwo from "../../media/images/certificateTwo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faWifiStrong } from "@fortawesome/free-solid-svg-icons";

function Posts() {
    return (
        <div>
            <section className="posts-section">
                <h1 className="section-heading">Achievements</h1>
                <div className="posts-div">
                    <div className="posts">
                        <span className="posts-head">
                            <img src={galleryImgOne} alt="Certificate"></img>
                            <p>delbingeorge</p>
                        </span>
                        <img className="post-img" src={prizeTwo} alt="Certificate"></img>
                    </div>
                    <div className="posts">
                        <span className="posts-head">
                            <img src={galleryImgOne} alt="Certificate"></img>
                            <p>delbingeorge</p>
                        </span>
                        <img className="post-img" src={certificateTwo} alt="Certificate"></img>
                    </div>
                    <div className="posts">
                        <span className="posts-head">
                            <img src={galleryImgOne} alt="Certificate"></img>
                            <p>delbingeorge</p>
                        </span>
                        <img className="post-img" src={prizeThree} alt="Certificate"></img>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Posts;
