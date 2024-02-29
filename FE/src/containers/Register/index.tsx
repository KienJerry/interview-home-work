import { LOGINSOCIAL_TYPE } from "@/common/config/response.config";
import { Button, Checkbox, Form, Input, message } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerRequest } from "@/store/auth/actions";
import {
  getErrorSelector,
  getPendingSelector,
  getProfileSelector,
} from "@/store/auth/selectors";

function Register() {
  const [form] = Form.useForm();
  const dispath = useDispatch();
  const isSubmitting = useSelector(getPendingSelector);
  const profile = useSelector(getProfileSelector);
  const handleSubmit = async (values: any) => {
    dispath(registerRequest(values));
  };

  return (
    <main style={{ padding: "50px" }}>
      <Form form={form} onFinish={handleSubmit} layout="vertical">
        <Form.Item
          label="fullName"
          name="name"
          rules={[
            {
              required: true,
              message: "This field cannot be left empty",
            },
          ]}
        >
          <Input placeholder="Enter full name" />
        </Form.Item>
        <Form.Item
          label="UserName"
          name="userName"
          rules={[
            {
              required: true,
              message: "This field cannot be left empty",
            },
          ]}
        >
          <Input placeholder="Enter user name" />
        </Form.Item>
        <Form.Item
          label="PassWork"
          name="passWord"
          rules={[
            {
              required: true,
              message: "This field cannot be left empty",
            },
          ]}
        >
          <Input.Password placeholder="Enter the PassWork" />
        </Form.Item>
        <div>
          <Button
            loading={isSubmitting}
            htmlType="submit"
            size="large"
            type="primary"
          >
            <span>Sign Up</span>
          </Button>
        </div>
      </Form>
      <p>
        Already have an account? <Link href="/login">Login.</Link>
      </p>
    </main>
  );
}

export default Register;
