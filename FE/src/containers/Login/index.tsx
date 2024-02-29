import { LOGINSOCIAL_TYPE } from "@/common/config/response.config";
import { Button, Checkbox, Form, Input, message } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "@/store/auth/actions";

import {
  getErrorSelector,
  getPendingSelector,
  getProfileSelector,
} from "@/store/auth/selectors";
import form from "antd/es/form";

function Login() {
  const [form] = Form.useForm();
  const router = useRouter();
  const dispath = useDispatch();

  const isSubmitting = useSelector(getPendingSelector);
  const profile = useSelector(getProfileSelector);

  useEffect(() => {
    if (profile) {
      router.push("/");
    }
  }, [profile]);

  const handleSubmit = async (values: any) => {
    dispath(loginRequest(values));
  };
  return (
    <main style={{ padding: "50px" }}>
      <Form form={form} onFinish={handleSubmit} layout="vertical">
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
            <span className="leading-16">Login</span>
          </Button>
        </div>
      </Form>
      <p>
        Do not have an account? <Link href="/register">Register.</Link>
      </p>
    </main>
  );
}

export default Login;
