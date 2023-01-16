import React, { useState } from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { Divider, Table } from "antd";
import { useRouter } from "next/router";
const { Header, Content, Footer, Sider } = Layout;
const Dashboard = () => {
  const [dataApi, setDataApi] = useState(
    typeof window !== "undefined"
      ? JSON?.parse(
          localStorage?.getItem("dataPelamar") !== "undefined"
            ? localStorage?.getItem("dataPelamar")
            : null
        ) || null
      : null
  );
  const router = useRouter();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  console.log(dataApi);

  const columns = [
    {
      title: "Nama",
      dataIndex: "name",
    },
    {
      title: "Umur",
      dataIndex: "age",
    },
    {
      title: "Alamat",
      dataIndex: "address",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Nomor HP/WA",
      dataIndex: "phone",
    },
    {
      title: "catatan",
      dataIndex: "catatan",
    },
    {
      title: "Posisi",
      dataIndex: "posisi",
    },
    {
      title: "CV",
      dataIndex: "CV",
      key: "x",
      render: () => (
        <a
          href="https://www.dropbox.com/s/ieup78ahcwqf01t/CV%20-%20FaisalRahmatdani.pdf?dl=0"
          target="_blank"
          rel="noreferrer"
        >
          Download
        </a>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      name: "Faisal Rahmatdani",
      age: 23,
      address: "jakarta timur",
      email: "faisalrahmatdani@gmail.com",
      phone: "0888888888",
      catatan: "hallo saya faisal berpengalaman di bidang a",
      CV: "https://www.dropbox.com/s/ieup78ahcwqf01t/CV%20-%20FaisalRahmatdani.pdf?dl=0",
      posisi: "staff-admin-umum",
    },
  ];
  const dataLocal = [
    {
      key: "2",
      name: dataApi?.values?.user?.name,
      age: dataApi?.values?.user?.age,
      address: dataApi?.values?.user?.addres,
      email: dataApi?.values?.user?.email,
      phone: dataApi?.values?.user?.phone,
      catatan: dataApi?.values?.user?.introduction,
      CV: "https://www.dropbox.com/s/ieup78ahcwqf01t/CV%20-%20FaisalRahmatdani.pdf?dl=0",
      posisi: dataApi?.posisi,
    },
  ];
  return (
    <Layout className="min-h-screen">
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="h-[90px]" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[UserOutlined].map((icon, index) => ({
            key: String(index + 1),
            icon: React.createElement(icon),
            label: `Data Pelamar`,
          }))}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: "24px 16px 0",
          }}
        >
          <div className="px-[50px]">
            <Divider>Data Pelamar</Divider>
            <Table
              columns={columns}
              dataSource={dataApi ? dataLocal : data}
              size="middle"
            />
          </div>
          <div
            onClick={() => {
              router.push("/");
            }}
            className="absolute bottom-10 left-2 cursor-pointer hover:bg-white hover:text-blue-500 text-white bg-blue-500 px-16 py-3 rounded-xl"
          >
            LogOut
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          ©2023 PT.Prima Tour and Travel
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
