import { BiBookReader } from "react-icons/bi";
import { BsPencilSquare } from "react-icons/bs";
import { BsFolder2Open } from "react-icons/bs";

export default function Service(){
    return(
        <div className="service" id="service">
            <div className="container">
                <div>
                    <h2 className="roboto">Layanan Kami</h2>
                </div>
                <div className="row mt-5">
                    <div className="service-card">
                        <BsFolder2Open />
                        <h4 className="roboto my-3">Menyediakan Buku Pelajaran Berkualitas</h4>
                        <p className="inria-serif">Bahana Ilmu menghadirkan berbagai buku pelajaran yang dirancang untuk meningkatkan pemahaman siswa terhadap berbagai mata pelajaran. Buku-buku kami disusun sesuai dengan kurikulum terbaru dan dikembangkan oleh tim ahli di bidang pendidikan.</p>
                    </div>
                    <div className="service-card">
                        <BsPencilSquare />
                        <h4 className="roboto my-3">Kelas Pelatihan untuk Guru dan Siswa</h4>
                        <p className="inria-serif">Bahana Ilmu menyediakan kelas pelatihan bagi guru dan siswa untuk meningkatkan pemahaman dan efektivitas dalam proses belajar-mengajar. Materi pelatihan dikembangkan secara komprehensif dan disampaikan oleh para mentor profesional yang berpengalaman di dunia pendidikan.</p>
                    </div>
                    <div className="service-card">
                        <BiBookReader />
                        <h4 className="roboto my-3">Workshop Pendidikan</h4>
                        <p className="inria-serif">Bahana Ilmu menyelenggarakan Workshop Pendidikan, sebuah program edukatif yang dirancang khusus untuk membantu guru, siswa, dan tenaga pendidik dalam mengoptimalkan strategi pembelajaran. Workshop ini menghadirkan pembicara profesional yang siap berbagi pengalaman dan wawasan untuk meningkatkan kualitas pendidikan.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}