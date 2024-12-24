import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { setForm } from "./registerSlice";
import { useEffect, useState } from "react";
import ModalRegister from "./ModalRegister";
import Eye from "../../assets/eye.gif";
import Minions from "../../assets/chara-minions.png";
type FieldType = {
  username: string;
  password: string;
  email: string;
};
const Register = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm<FieldType>();
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    setIsModalOpen(true);
    dispatch(setForm(values));
  };
  useEffect(() => {
    const savedForm = localStorage.getItem("formData");
    if (savedForm) {
      const parsedValues = JSON.parse(savedForm) as FieldType;
      form.setFieldsValue(parsedValues);
    }
  }, []);
  const handleClose = () => {
    setIsModalOpen(false);
  };
  const handleReset = () => {
    form.resetFields();
    localStorage.setItem(
      "formData",
      JSON.stringify({
        username: "",
        password: "",
        email: "",
      })
    );
  };

  return (
    <div className="flex  h-screen w-screen  justify-center items-center">
      <div className="absolute top-0 left-0"></div>
      <div className="star absolute  right-24 top-20"></div>
      <div className="starburst absolute top-10 left-28 bg-red-500"></div>
      <div className="arc absolute  rotate-[30deg]  left-14 bottom-20 "></div>
      <div className="matrix-cubes absolute right-28 bottom-5"></div>
      <div className="sphere absolute right-20 bottom-24"></div>
      <div className="hamburger-menu absolute right-96 top-72"></div>
      <div className="spiral absolute left-64"></div>
      <div className="relative flex flex-col">
        <h3 className="text-5xl text-[#FBCD3D] p-5 ">Register Form🍌</h3>

        <Form
          className=" form p-7 w-96"
          form={form}
          onFinish={onFinish}
          autoComplete="off"
          layout={"vertical"}
          onValuesChange={(_, Values) => {
            localStorage.setItem("formData", JSON.stringify(Values));
          }}
        >
          <div className="w-full flex items-center justify-center ">
            <img src={Eye} className="w-32 " />
          </div>
          <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please input a valid email address!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                min: 6,
                message: "Please input at least 6 character!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item label={null} className="mt-10 flex justify-center  ">
            <Button
              type="primary"
              htmlType="button"
              onClick={handleReset}
              className="submit mx-3 px-5"
            >
              Reset
            </Button>
            <Button type="primary" htmlType="submit" className="submit mx-3">
              Submit
            </Button>
          </Form.Item>
        </Form>
        <img src={Minions} className=" absolute w-56 -left-36 -bottom-4 " />
      </div>
      <ModalRegister isOpen={isModalOpen} isClose={handleClose} />
    </div>
  );
};

export default Register;
