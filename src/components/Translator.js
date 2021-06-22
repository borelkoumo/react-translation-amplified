import React, { useState } from 'react'
import '../styles/Translator.css'


/* From ANTD */
import 'antd/dist/antd.css';
import { Layout, Row, Col, Divider, Card, Select, Button, Input, Space } from 'antd';
import { SwapOutlined } from '@ant-design/icons';
import { Typography } from 'antd';

class Translator extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    onChange = (value) => {
        console.log(`selected ${value}`);
    }

    onBlur = () => {
        console.log('blur');
    }

    onFocus = () => {
        console.log('focus');
    }

    onSearch = (value) => {
        console.log('search:', value);
    }

    _getLayout() {
        const { Header, Footer, Content } = Layout;
        const { Option } = Select;
        const { TextArea } = Input;
        const { Paragraph } = Typography;

        return (
            <Layout className="Translator-maincontainer">
                <Header className="Translator-header">
                    Header
                </Header>
                <Divider orientation='center'>Traduction</Divider>
                <Content className='Translator-content'>
                    <>
                        <Row>
                            <Col span={24} >
                                <div className='searchDiv'>
                                    <Select
                                        // defaultValue="fr"
                                        bordered={false}
                                        showSearch
                                        style={{ width: 150 }}
                                        placeholder="Translate from"
                                        optionFilterProp="children"
                                        onChange={this.onChange}
                                        onFocus={this.onFocus}
                                        onBlur={this.onBlur}
                                        onSearch={this.onSearch}
                                        filterOption={(input, option) =>
                                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                    >
                                        <Option value="fr">French</Option>
                                        <Option value="es">Spanish</Option>
                                    </Select>
                                    <Button type="primary" shape="circle" icon={<SwapOutlined />} />
                                    <Select
                                        // defaultValue="es"
                                        bordered={false}
                                        showSearch
                                        style={{ width: 150 }}
                                        placeholder="Translate to"
                                        optionFilterProp="children"
                                        onChange={this.onChange}
                                        onFocus={this.onFocus}
                                        onBlur={this.onBlur}
                                        onSearch={this.onSearch}
                                        filterOption={(input, option) =>
                                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                    >
                                        <Option value="es">Spanish</Option>
                                        <Option value="fr">French</Option>
                                    </Select>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <Card type="inner">
                                    <Card.Grid className="gridStyle">Content</Card.Grid>
                                    <Card.Grid className="gridStyle">Content</Card.Grid>
                                    <Card.Grid className="gridStyle">Content</Card.Grid>
                                </Card>
                            </Col>
                        </Row>
                        <Divider orientation="left"></Divider>
                        <Row>
                            <Col span={24}>
                                <TextArea rows={5} showCount allowClear maxLength={1000} />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24} >
                                <Paragraph copyable className="textStyle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Paragraph>
                            </Col>
                        </Row>
                    </>
                </Content>
                <Footer className="Translator-footer">
                    Footer
                </Footer>
            </Layout>
        );
    }

    render() {
        return (
            this._getLayout()
        );
    }
}

export default Translator;
