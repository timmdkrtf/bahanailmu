import PenerbitLogo from "../assets/image/logo/Logo Utama Penerbit ABA (P).png"
import Logo from "../assets/image/logo/Group 24.png"
import { useState } from "react";

import Bg from "../assets/image/bg/32.png"

import { BsChevronRight } from "react-icons/bs";
import { BsChevronDoubleRight } from "react-icons/bs";

export default function About(){

    const [hovered, setHovered] = useState(false);

    return(
        <div className="about" id="about">
            <div className="img-bg">
                <img src={Bg} alt="" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="halakah-about d-flex align-items-center justify-content-between">
                        <div className="text">
                            <h1 className="">Tentang <span>Bahana Ilmu</span></h1>
                            <p className="">Bahana Ilmu adalah merek dari Penerbit Abdi Bangun Aksara yang berfokus pada penerbitan buku pelajaran untuk berbagai jenjang pendidikan, mulai dari SD, SMP, hingga SMA. Buku-buku kami dirancang untuk membantu siswa memahami materi pelajaran dengan lebih mudah, interaktif, dan aplikatif.</p>
                            <a className="btn mt-3" onMouseEnter={() => setHovered(true)}  onMouseLeave={() => setHovered(false)} href="#publisher-about"><span className={hovered ? "hovered-text" : ""}>Baca Selengkapnya</span><span className={hovered ? "hovered-icon" : "nonhovered-icon"}>{hovered ? <BsChevronDoubleRight style={{marginTop: "-2px"}} /> : <BsChevronRight style={{marginTop: "-2px"}} />}</span></a>
                        </div>
                        <div className="image text-center">
                            <img src={Logo} alt="" />
                        </div>
                    </div>
                    <div className="publisher-about d-flex gap-3 justify-content-between" id="publisher-about">
                        <div className="image">
                            <img src={PenerbitLogo} alt="" />
                        </div>
                        <div className="text">
                            <h2 className="">Tentang <span>Penerbit Abdi Bangun Aksara</span></h2>
                            <p className="mt-3">
                                <p>Penerbit Abdi Bangun Aksara hadir dengan semangat untuk menemani para pelajar, guru, dan tenaga pendidik di Indonesia. Kami berkomitmen menerbitkan buku-buku pelajaran yang berkualitas tinggi, inspiratif, dan sesuai dengan kurikulum pendidikan terbaru.</p>
                                <p>Bagi Abdi Bangun Aksara, menerbitkan buku bukan hanya tentang mencetak dan mendistribusikan materi ajar. Kami melihat diri kami sebagai mitra terpercaya bagi tenaga pendidik dan siswa dalam meningkatkan kualitas pembelajaran. Kami menyediakan sumber belajar yang relevan, mudah dipahami, dan mendukung proses belajar mengajar secara optimal.</p>
                                <p>Lebih dari itu, Abdi Bangun Aksara juga berkomitmen untuk meningkatkan literasi di Indonesia. Kami percaya bahwa akses terhadap bahan ajar berkualitas adalah kunci utama dalam menciptakan generasi yang cerdas dan berdaya saing tinggi.</p>
                            </p>
                            <a className="btn mt-3" onMouseEnter={() => setHovered(true)}  onMouseLeave={() => setHovered(false)} href="https://www.abaksara.co.id/#penerbit-aba"><span className={hovered ? "hovered-text" : ""}>Telusuri Penerbit ABA</span><span className={hovered ? "hovered-icon" : "nonhovered-icon"}>{hovered ? <BsChevronDoubleRight style={{marginTop: "-2px"}} /> : <BsChevronRight style={{marginTop: "-2px"}} />}</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}