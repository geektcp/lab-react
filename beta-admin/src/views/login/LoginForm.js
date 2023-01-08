import React, { Component } from "react";
import { Form, Input, Button, Row, Col, message } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./index.scss";
import { withRouter } from "react-router-dom";

//API
import { Login } from "../../api/account";
//组件
import Code from "../../components/code/index";
//加密
// import CryptoJs from "crypto-js";
//方法
import { setToken } from "../../utils/session";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      module: "login",
      loading: false,
    };
  }
  onFinish = (values) => {
    // const { username, password, code } = JSON.parse(JSON.stringify(values));
    this.setState({ loading: true });
    // const requestData = {
    //   username,
    //   password: CryptoJs.MD5(password).toString(), //加密
    //   code,
    // };
    // Login(values)
    //   .then((res) => {
    //     // if (res.data.resCode === 0) {
    //       const data = res.data.data;
    //       message.success(res.data.message);
    //       setToken(data.token);
    //       this.setState({ loading: false });
    //       this.props.history.push("/home");
    //     // }
    //   })
    //   .catch(() => {
    //     this.setState({ loading: false });
    //   });
    // const data = res.data.data;
    // message.success(res.data.message);
    setToken(11111);
    this.setState({ loading: false });
    this.props.history.push("/home");
  };

  changeInput = (e) => {
    const value = e.target.value;
    this.setState({
      username: value,
    });
  };

  toggleForm = () => {
    this.props.switchForm("register");
  };

  render() {
    const { username, password, module, loading } = this.state;
    return (
      <div>
        <div className="form-main">
          <div className="form-header">
            <h4 className="column">登录</h4>
            <span onClick={this.toggleForm}>账号注册</span>
          </div>
          <div className="form-content">
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={this.onFinish}
            >
              <Form.Item
                name="username"
                onChange={this.changeInput}
                style={{ width: "100%" }}
                rules={[
                  { required: true, message: "邮箱不能为空" },
                  { type: "email", message: "邮箱格式不正确" },
                ]}
              >
                <Input
                  value={username}
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="请输入邮箱"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: "请输入密码" }]}
              >
                <Input
                  value={password}
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="请输入密码"
                  type="password"
                />
              </Form.Item>
              <Form.Item
                name="code"
                rules={[
                  { required: true, message: "请输入长度6位验证码", len: 6 },
                ]}
              >
                <Row gutter={13}>
                  <Col span={15}>
                    <Input
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder="请输入验证码"
                    />
                  </Col>
                  <Col span={9}>
                    <Code username={username} module={module} />
                  </Col>
                </Row>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  block
                  loading={loading}
                >
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
