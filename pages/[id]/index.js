import Layout from "../../src/components/layouts";
import React, { useEffect, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Upload } from "antd";
import { Button, Form, Input, InputNumber } from "antd";
import { useRouter } from "next/router";

const FormInput = () => {
  const [field, setFields] = useState(false);
  const route = useRouter();
  const { id } = route.query;

  const props = {
    action: "//jsonplaceholder.typicode.com/posts/",
    listType: "picture",
    // previewFile(file) {
    //   console.log("Your upload file:", file);
    //   // Your process logic. Here we just mock to the same file
    //   return fetch("https://next.json-generator.com/api/json/get/4ytyBoLK8", {
    //     method: "POST",
    //     body: file,
    //   })
    //     .then((res) => res.json())
    //     .then(({ thumbnail }) => thumbnail);
    // },
  };

  const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 16 },
  };

  const onFinish = (values) => {
    console.log(values);
    localStorage.setItem("dataPelamar", JSON.stringify({ values, posisi: id }));
    setFields(true);
  };

  useEffect(() => {
    if (window == "undefined") return;
    if (field) {
      window.scrollTo(0, 0);
    }
  });
  return (
    <Layout>
      <div className="min-h-screen">
        {!field && (
          <>
            {" "}
            <div className="mt-16 text-center">
              <h1 className="text-4xl font-bold leading-2">
                Formulir Informasi Pelamar
              </h1>
            </div>
            <div className="w-[800px] min-h-fit m-auto mt-16 border-2 border-gray-300 rounded-xl bg-white shadow-xl p-8 mb-[120px]">
              <div className="mt-5">
                <h1 className="pl-11 mb-8 text-2xl font-semibold">
                  Lengkapi Data Berikut
                </h1>
                <Form
                  {...layout}
                  name="nest-messages"
                  onFinish={onFinish}
                  // validateMessages={validateMessages}
                >
                  <Form.Item
                    name={["user", "name"]}
                    label="Nama Lengkap"
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name={["user", "email"]}
                    label="Email"
                    rules={[{ type: "email", required: true }]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name={["user", "age"]}
                    label="Umur"
                    rules={[{ type: "number", min: 0, max: 99 }]}
                  >
                    <InputNumber />
                  </Form.Item>
                  <Form.Item
                    name={["user", "phone"]}
                    label="Nomor WA/HP"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input style={{ width: "100%" }} />
                  </Form.Item>
                  <Form.Item name={["user", "addres"]} label="alamat">
                    <Input />
                  </Form.Item>
                  <Form.Item name={["user", "introduction"]} label="Catatan">
                    <Input.TextArea />
                  </Form.Item>
                  <div className="ml-[72px] mb-16 w-[490px] flex gap-2">
                    <div>Upload CV :</div>
                    <Upload {...props}>
                      <Button icon={<UploadOutlined />}>Upload</Button>
                    </Upload>
                  </div>
                  <Form.Item wrapperCol={{ offset: 5 }}>
                    <Button htmlType="submit">Submit</Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </>
        )}
        {field && (
          <>
            <div>
              <div className="text-[36px] text-center mt-[200px]">
                Lamaran anda sedang kami proses, staff kami akan menghubungi
                anda
              </div>
              <div
                className="text-primary underline text-lg cursor-pointer text-center mt-10"
                onClick={() => route.push("/")}
              >
                Kembali
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default FormInput;
