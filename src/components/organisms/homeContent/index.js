import { Steps } from "antd";
import Image from "next/image";
import ilustrasi from "../../../../public/alur-rekrut.png";
import Button from "../../atoms/Button";
import { useRouter } from "next/router";

const HomeContent = () => {
  const route = useRouter();
  const Card = ({ description, num }) => {
    return (
      <>
        <div className="border border-gray-300 rounded-xl w-[360px] h-[360px] p-10">
          <h1 className="text-[32px] text-primary font-bold mb-6">{num}</h1>
          <h1 className="text-[22px] font-thin">{description}</h1>
        </div>
      </>
    );
  };

  return (
    <div className="w-full px-[120px]">
      <div className="w-full flex flex-col justify-center py-16">
        <div className="text-center">
          <h1 className="text-[32px]">
            Alur Pendaftaran{" "}
            <span className="text-greenDark border-b-2 border-greenLight">
              Rekrutmen
            </span>
          </h1>
        </div>

        <div className="text-center">
          <h1 className="text-gray-400">
            Jadwal dan lowongan dapat berubah berdasarkan keputusan PT.Prima
            Tour And Travel
          </h1>
        </div>
      </div>

      <div className="w-full flex py-8">
        <div className="w-[50%]">
          <div className="w-full h-full ml-36">
            <Image src={ilustrasi} width={600} height={600} alt="ilustrasi" />
          </div>
        </div>
        <div className="w-[50%]">
          <Steps
            direction="vertical"
            current={null}
            style={{ font: "black" }}
            items={[
              {
                title: "Mengunjungi Website Rekrutmen PT.Prima Tour And Travel",
                description: "test",
              },
              {
                title: "Pilih Lowongan Sesuai Bidang Pelamar",
                description: "test",
              },
              {
                title: "Melengkapi Biodata Calon Pelamar",
                description: "test",
              },
              {
                title: "Admin Melakukan Seleksi Administrasi Calon Karyawan",
                description: "test",
              },
              {
                title: "Admin Mengirim Undangan Jadwal Interview Secara Online",
                description: "test",
              },
              {
                title:
                  "Pengumuman Hasil Interview Akan Di infokan ke Email Pelamar",
                description: "test",
              },
            ]}
          />
        </div>
      </div>

      <div className="w-full bg-primary h-[120px] rounded-xl my-10 p-6 flex">
        <div className="border-r-2 border-white w-[50%]">
          <h1 className="text-white text-2xl font-[600] leading-10 italic">
            # RAIH KARIR IMPIANMU <br /> BERSAMA KAMI
          </h1>
        </div>
        <div
          onClick={() => {
            route.push("/lowongan");
          }}
          className="w-[50%] h-full text-center items-center mt-2"
        >
          <h1 className="text-white text-2xl font-medium cursor-pointer border border-white px-10 py-2 rounded-[100px] mx-4">
            Lihat Lowongan
          </h1>
        </div>
      </div>

      <div>
        <div className="py-16">
          <div className="text-center">
            <h1 className="text-[32px]">
              Ketentuan{" "}
              <span className="text-greenDark border-b-2 border-greenLight">
                Umum
              </span>
            </h1>
          </div>

          <div className="grid grid-cols-3 gap-4 py-8">
            <Card
              description="Setiap pelamar hanya di perbolehkan melamar satu posisi."
              num="01"
            />
            <Card
              description="Seluruh tahapan perekrutan tidak di pungut biaya apapun."
              num="02"
            />
            <Card
              description="Pelamar hanya bisa melamar secara online melalu website perekrutan dan tidak menerima lamaran lewat email apapun."
              num="03"
            />
            <Card
              description="Proses perekrutan di lakukan secara online."
              num="04"
            />
            <Card
              description="Masa waktu ketersediaan lowongan di tentukan oleh PT.Prima Tour And Travel dan tidak dapat di ganggu gugat."
              num="05"
            />
            <Card
              description="Hasil keputusan bersifat final, mengikat, dan tidak dapat di ganggu gugat."
              num="06"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
