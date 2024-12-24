import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { setForm } from "./registerSlice";
import { useEffect, useRef, useState } from "react";
import ModalRegister from "./ModalRegister";
import Eye from "../../assets/eye.gif";
import Minions from "../../assets/chara-minions.png";
import Bg from "../register/Background";
import { motion } from "motion/react";
type FieldType = {
  username: string;
  password: string;
  email: string;
};
const Register = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const constraintsRef = useRef(null);
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
    <div className="flex  h-screen w-screen  justify-center items-center select-none">
      <Bg />
      <div className="relative flex flex-col">
        <motion.h3
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="text-5xl text-[#FBCD3D] p-5 "
        >
          Register Form🍌
        </motion.h3>
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
          <div
            className="w-full flex items-center justify-center  "
            ref={constraintsRef}
          >
            <motion.img
              drag
              dragConstraints={constraintsRef}
              dragElastic={1}
              src={Eye}
              className="w-32 cursor-grab active:cursor-grabbing"
            />
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

        <motion.img
          animate={{
            y: [0, 5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          src={Minions}
          draggable="false"
          className=" absolute w-56 -left-36 -bottom-4 "
        />
      </div>
      <ModalRegister isOpen={isModalOpen} isClose={handleClose} />
    </div>
  );
};

export default Register;
