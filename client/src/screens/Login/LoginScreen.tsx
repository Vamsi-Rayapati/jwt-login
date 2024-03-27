import Lottie from 'react-lottie'

import animationData from '../../assets/animations/communication_animation.json';
import { Button, Card, Checkbox, Form, Input } from 'antd';
import './LoginScreen.css';

function LoginScreen() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
  return (
    <div style={{display:'flex', flexDirection:'row', alignItems:'center', height:'100%', paddingRight: 100}}>
        <Lottie options={defaultOptions} width={600} height={500}/>
        <Card title="Login" style={{}}>

        <Form>
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
                >
                <Input />
            </Form.Item>

            <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>


            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
            </Form.Item>
        </Form>
        </Card>
    </div>
  )
}

export default LoginScreen