import { Avatar, Button, Form, Input, List, Space, Spin, message } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import moment from "moment";

import * as Meta from "@/common/metaSeo/titleMeta";
import Main from "@/layouts/Main";
import Modal from "@/common/modal/modal";
import withAuth from "@/components/Auth";

import { useDispatch, useSelector } from "react-redux";
import {
  getPostRequest,
  CommentRequest,
  getCommentRequest,
} from "@/store/Blog/actions";
import {
  getErrorSelector,
  getPendingSelector,
  getBlogSelector,
  getCommentSelector,
} from "@/store/Blog/selectors";
import PostService from "@/services/BlogService";

const { TextArea } = Input;
const data_Filter = { limit: 250, page: 0, search: "" };

const Homepage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getPendingSelector);
  const dataBlog = useSelector(getBlogSelector);
  const dataComment = useSelector(getCommentSelector);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenBlog, setIsModalOpenBlog] = useState(false);
  const [dataModal, setDataModal] = useState(null);
  const [data, setData] = useState([]);
  const [comment, setComment] = useState("");
  const [isFilter, setIsFilter] = useState(data_Filter);

  const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  const handleShowPopup = (dataItem: any) => {
    dispatch(
      getCommentRequest({
        limit: 250,
        page: 1,
        postId: dataItem?.id,
      }),
    );
    setDataModal(dataItem);
    setIsModalOpen(true);
  };

  useEffect(() => {
    dispatch(getPostRequest(isFilter));
  }, []);

  useEffect(() => {
    if (dataBlog?.data?.data?.length) {
      setData(dataBlog?.data?.data);
    }
  }, [dataBlog?.data]);

  const handleSubmit = () => {
    let paramComment = {
      content: comment,
      postId: dataModal?.id,
    };
    dispatch(CommentRequest(paramComment));
    setComment("");
  };

  const handleSearch = () => {
    dispatch(getPostRequest(isFilter));
  };

  const onFinish = async (values: any) => {
    const res = await PostService.CreatePost(values);
    const key = "updatables";
    if (res.success == true) {
      message.success({
        key,
        type: "loading",
        content: "Create new Blog",
      });
      dispatch(getPostRequest(isFilter));
    } else {
      message.error({
        key,
        type: "loading",
        content: res?.message,
      });
    }
  };

  return (
    <Main meta={Meta.HomePage}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 40px",
          marginTop: "20px",
        }}
      >
        <Space.Compact style={{ width: "50%", textAlign: "center" }}>
          <Input
            placeholder="Search"
            value={isFilter.search}
            onChange={(e) =>
              setIsFilter((prev) => ({
                ...prev,
                search: e.target.value,
              }))
            }
          />
          <Button type="primary" onClick={() => handleSearch()}>
            Seacrh
          </Button>
        </Space.Compact>
        <Button type="primary" onClick={() => setIsModalOpenBlog(true)}>
          Create Blog
        </Button>
      </div>
      <div className="hehe" style={{ padding: "20px" }}>
        {isLoading ? (
          <Spin tip="Loading" size="small" style={{ position: "fixed" }}>
            <div className="content" />
          </Spin>
        ) : (
          <List
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 5,
            }}
            dataSource={data}
            footer={
              <div>
                <b>ant design</b> footer part
              </div>
            }
            renderItem={(item, number) => (
              <>
                <List.Item
                  onClick={() => handleShowPopup(item)}
                  className={`${number % 2 == 0 ? "active" : ""}`}
                  key={item.id}
                  actions={[
                    <IconText
                      icon={StarOutlined}
                      text="156"
                      key="list-vertical-star-o"
                    />,
                    <IconText
                      icon={LikeOutlined}
                      text="156"
                      key="list-vertical-like-o"
                    />,
                    <IconText
                      icon={MessageOutlined}
                      text={item?.commentsPost}
                      key="list-vertical-message"
                    />,
                  ]}
                  extra={
                    <img
                      width={272}
                      alt="logo"
                      src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                    />
                  }
                >
                  <div style={{ textAlign: "center", fontSize: "24px" }}>
                    {item?.title}
                  </div>
                  <List.Item.Meta
                    avatar={
                      <>
                        <Avatar
                          src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${number}`}
                        />
                      </>
                    }
                    title={<div>{item?.ownerUserPost?.userName}</div>}
                    description={
                      "Lúc  " +
                      moment(item?.created_at).format("HH:MM:SS") +
                      "  Ngày  " +
                      moment(item?.created_at).format("DD/MM/YYYY")
                    }
                  ></List.Item.Meta>
                  {item.content}
                </List.Item>
                {item?.commentsPost > 0 ? (
                  <div className="comment padding">
                    {item?.commentsPostItems?.map((val, idx) => {
                      return (
                        <div key={val.id}>
                          <List.Item
                            key={val.id}
                            actions={[
                              <IconText
                                icon={StarOutlined}
                                text="5"
                                key="list-vertical-star-o"
                              />,
                              <IconText
                                icon={LikeOutlined}
                                text="15"
                                key="list-vertical-like-o"
                              />,
                            ]}
                          >
                            <List.Item.Meta
                              avatar={
                                <>
                                  <Avatar
                                    src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${idx}`}
                                  />
                                </>
                              }
                              title={<div>{val?.ownerUserComment?.name}</div>}
                              description={
                                "Lúc  " +
                                moment(val?.created_at).format("HH:MM:SS") +
                                "  Ngày  " +
                                moment(val?.created_at).format("DD/MM/YYYY")
                              }
                            ></List.Item.Meta>
                            {val.content}
                          </List.Item>
                        </div>
                      );
                    })}
                    {item?.commentsPost > 2 && (
                      <div
                        className="see-more"
                        style={{ textAlign: "center" }}
                        onClick={() => handleShowPopup(item)}
                      >
                        See More
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="comment"></div>
                )}
              </>
            )}
          />
        )}
      </div>
      <Modal
        title={`Article by ${dataModal?.ownerUserPost?.userName}`}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      >
        <h1>TITLE : {dataModal?.title}</h1>
        <h3>CONTENT: {dataModal?.content}</h3>
        <p>
          DATE:{" "}
          {"Lúc  " +
            moment(dataModal?.created_at).format("HH:MM:SS") +
            "  Ngày  " +
            moment(dataModal?.created_at).format("DD/MM/YYYY")}
        </p>
        <div style={{ textAlign: "center", fontSize: "20px" }}>Comment</div>
        <Space.Compact style={{ width: "100%" }}>
          <Input
            placeholder="Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button type="primary" onClick={handleSubmit} disabled={!comment}>
            Submit
          </Button>
        </Space.Compact>

        {dataComment?.data?.map((val: any, idx: any) => {
          return (
            <div key={val.id}>
              <List.Item
                key={val.id}
                actions={[
                  <IconText
                    icon={StarOutlined}
                    text="5"
                    key="list-vertical-star-o"
                  />,
                  <IconText
                    icon={LikeOutlined}
                    text="15"
                    key="list-vertical-like-o"
                  />,
                ]}
              >
                <List.Item.Meta
                  avatar={
                    <>
                      <Avatar
                        src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${idx}`}
                      />
                    </>
                  }
                  title={
                    <div>{val?.ownerUserComment?.userName || "Guess"}</div>
                  }
                  description={
                    "Lúc  " +
                    moment(val?.created_at).format("HH:MM:SS") +
                    "  Ngày  " +
                    moment(val?.created_at).format("DD/MM/YYYY")
                  }
                ></List.Item.Meta>
              </List.Item>
              {val?.content}
            </div>
          );
        })}
      </Modal>

      <Modal
        title={`Create Blog`}
        isModalOpen={isModalOpenBlog}
        setIsModalOpen={setIsModalOpenBlog}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please input your Title!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Content"
            name="content"
            rules={[{ required: true, message: "Please input your Content!" }]}
          >
            <TextArea style={{ height: 120, resize: "none" }} />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </Main>
  );
};

export default withAuth(Homepage);

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};
