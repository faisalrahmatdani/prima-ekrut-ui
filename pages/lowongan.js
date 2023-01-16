import Layout from "../src/components/layouts";
import Button from "../src/components/atoms/Button";
import { useRouter } from "next/router";

const Lowongan = () => {
  const route = useRouter();

  // const CardLowongan = ({
  //   jobTitle = "Back Office Admin & Project Support Officer",
  //   experience = "1 - 2 Tahun",
  // }) => {
  //   return (
  //     <div className="max-h-fit border border-gray-300 rounded-xl shadow-md p-6">
  //       <div className="">
  //         <h1 className="text-2xl font-bold text-primary">{jobTitle}</h1>
  //         <span className="text-sm pt-4 text-lg">{experience}</span>
  //       </div>

  //       <div className="mt-9">
  //         <h1 className="font-bold">Qualification:</h1>
  //         <ul className="list-style ml-[55px] mt-5 flex flex-col gap-3">
  //           <li>
  //             Bachelor's Degree from any major (Preferably in Accounting /
  //             Office Administration).
  //           </li>
  //           <li>
  //             Minimum having experience 1 year in the related field (Fresh
  //             graduates are welcome!)
  //           </li>
  //           <li>Good coordination skills and detail-oriented.</li>
  //           <li>Advance in operating Ms. Office, especially Ms. Excel.</li>
  //           <li>Good in English both written and oral.</li>
  //         </ul>
  //       </div>

  //       <div className="mt-9">
  //         <h1 className="font-bold">Job Description:</h1>
  //         <ul className="list-style ml-[55px] mt-5 flex flex-col gap-3">
  //           <li>
  //             Coordinate with finance and accounting for invoices and tax
  //             invoices.
  //           </li>
  //           <li>Prepare and manage billing processes.</li>
  //           <li>Support administration for existing and upcoming projects.</li>
  //           <li>Maintain project database and document.</li>
  //           <li>Make a report about rental and OEM business projects.</li>
  //         </ul>
  //       </div>
  //       <div className="border border-gray-300 w-full my-4"></div>
  //       <div className="flex gap-3 justify-end">
  //         <button className="bg-primary rounded-[100px] py-3 px-6 text-white hover:bg-greenDark hover:text-gray-300">
  //           Lamar sekarang
  //         </button>
  //       </div>
  //     </div>
  //   );
  // };

  return (
    <Layout>
      <div className="px-[120px]">
        <div className="pt-6 border-b-4 border-primary max-w-fit">
          <h1 className="text-primary font-semibold text-xl">
            Lowongan Tersedia
          </h1>
        </div>
        <div className="flex flex-col gap-6 py-8">
          <div className="max-h-fit border border-gray-300 rounded-xl shadow-md p-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold text-primary">
                Staff Purchasing
              </h1>
              <span className="text-lg">3 Tahun</span>
              <span className="text-lg">IDR 3 - 4 JUTA</span>
            </div>

            <div className="mt-9">
              <h1 className="font-bold">Qualification:</h1>
              <ul className="list-style ml-[55px] mt-5 flex flex-col gap-3">
                <li>
                  Setidaknya memiliki 3 tahun pengalaman dalam bidang yang
                  sesuai untuk posisi ini.
                </li>
                <li>
                  Kandidat harus memiliki setidaknya SMA, Diploma, Sarjana di
                  Teknik Kimia, Ilmu Komputer/Teknologi Informasi, Matematika,
                  Ekonomi, Keuangan/Akuntansi/Perbankan atau setara.
                </li>
              </ul>
            </div>

            <div className="mt-9">
              <h1 className="font-bold">Job Description:</h1>
              <ul className="list-style ml-[55px] mt-5 flex flex-col gap-3">
                <li>Memahami aktifitas purchasing secara umum</li>
                <li>
                  Wajib unggul dalam hal ketelitian, kedisiplinan, administratif
                  & penggunaan komputer
                </li>
                <li>
                  Mampu menggunakan fungsi-fungsi dasar Microsoft Excel dengan
                  lancar khususnya Pivot Table.
                </li>
                <li>
                  Mampu berkomunikasi dan berkoordinasi dengan baik secara lisan
                  & tertulis
                </li>
                <li>
                  Jika telah berpengalaman kerja di posisi
                  purchasing/procurement silakan beri keterangan lengkap pada
                  profil anda.
                </li>
              </ul>
            </div>
            <div className="border border-gray-300 w-full my-4"></div>
            <div className="flex gap-3 justify-end">
              <button
                className="bg-primary rounded-[100px] py-3 px-6 text-white hover:bg-greenDark hover:text-gray-300"
                onClick={() => {
                  route.push("/staff-purchasing");
                }}
              >
                Lamar sekarang
              </button>
            </div>
          </div>
          {/*  */}
          <div className="max-h-fit border border-gray-300 rounded-xl shadow-md p-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold text-primary">
                Staff Administrasi Umum
              </h1>
              <span className="text-lg">3 Tahun</span>
              <span className="text-lg">IDR 3 - 4 JUTA</span>
            </div>

            <div className="mt-9">
              <h1 className="font-bold">Qualification:</h1>
              <ul className="list-style ml-[55px] mt-5 flex flex-col gap-3">
                <li>Pegawai (non-manajemen & non-supervisor)</li>
                <li>
                  Setidaknya memiliki 3 tahun pengalaman dalam bidang yang
                  sesuai untuk posisi ini.
                </li>
                <li>
                  Kandidat harus memiliki setidaknya SMA, Diploma, Sarjana di
                  Teknik Kimia, Ilmu Komputer/Teknologi Informasi, Matematika,
                  Ekonomi, Keuangan/Akuntansi/Perbankan atau setara.
                </li>
              </ul>
            </div>

            <div className="mt-9">
              <h1 className="font-bold">Job Description:</h1>
              <ul className="list-style ml-[55px] mt-5 flex flex-col gap-3">
                <li>
                  Setidaknya memiliki 3 tahun pengalaman dalam bidang yang
                  sesuai untuk posisi ini.
                </li>
                <li>
                  Lebih disukai Pegawai (non-manajemen & non-supervisor) khusus
                  dalam Lainnya/Kategori tidak tersedia atau setara.
                </li>
                <li>
                  Kemampuan yang harus dimiliki: Teliti, Bisa Berhitung,
                  Menguasai Komputer
                </li>
              </ul>
            </div>
            <div className="border border-gray-300 w-full my-4"></div>
            <div className="flex gap-3 justify-end">
              <button
                className="bg-primary rounded-[100px] py-3 px-6 text-white hover:bg-greenDark hover:text-gray-300"
                onClick={() => {
                  route.push("/staff-admin-umum");
                }}
              >
                Lamar sekarang
              </button>
            </div>
          </div>
          {/*  */}
          <div className="max-h-fit border border-gray-300 rounded-xl shadow-md p-6">
            <div className="">
              <h1 className="text-2xl font-bold text-primary">
                Back Office Admin & Project Support Officer
              </h1>
              <span className="pt-4 text-lg">1 - 2 Years</span>
            </div>

            <div className="mt-9">
              <h1 className="font-bold">Qualification:</h1>
              <ul className="list-style ml-[55px] mt-5 flex flex-col gap-3">
                <li>
                  Bachelor Degree from any major Preferably in Accounting /
                  Office Administration.
                </li>
                <li>
                  Minimum having experience 1 year in the related field (Fresh
                  graduates are welcome!)
                </li>
                <li>Good coordination skills and detail-oriented.</li>
                <li>Advance in operating Ms. Office, especially Ms. Excel.</li>
                <li>Good in English both written and oral.</li>
              </ul>
            </div>

            <div className="mt-9">
              <h1 className="font-bold">Job Description:</h1>
              <ul className="list-style ml-[55px] mt-5 flex flex-col gap-3">
                <li>
                  Coordinate with finance and accounting for invoices and tax
                  invoices.
                </li>
                <li>Prepare and manage billing processes.</li>
                <li>
                  Support administration for existing and upcoming projects.
                </li>
                <li>Maintain project database and document.</li>
                <li>Make a report about rental and OEM business projects.</li>
              </ul>
            </div>
            <div className="border border-gray-300 w-full my-4"></div>
            <div className="flex gap-3 justify-end">
              <button className="bg-primary rounded-[100px] py-3 px-6 text-white hover:bg-greenDark hover:text-gray-300">
                Lamar sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Lowongan;
