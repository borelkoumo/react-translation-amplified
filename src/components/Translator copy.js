import React, { useState } from 'react'
import '../styles/Translator.css'


/* From ANTD */
import 'antd/dist/antd.css';
import { Layout, Row, Col, Divider, Card, Select, Button, Input } from 'antd';
import { SwapOutlined } from '@ant-design/icons';

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

        return (
            <Layout className="Translator-maincontainer">
                <Header className="Translator-header">
                    Header
                </Header>
                <Divider orientation='center'>Traduction</Divider>
                <Content className="Translator-content">
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
                    <Card size='small' className='searchOptionsDiv'>
                        <Card type="inner" size='small'
                        >
                            <Card.Grid className="gridStyle">Content</Card.Grid>
                            <Card.Grid className="gridStyle">Content</Card.Grid>
                            <Card.Grid className="gridStyle">Content</Card.Grid>
                        </Card>
                    </Card>
                    <div className='searchInputDiv'>
                        <Col span={24}>
                            <Row>
                                <TextArea rows={5} showCount allowClear maxLength={1000} />
                            </Row>
                            <Row>
                                <TextArea rows={5} showCount allowClear maxLength={1000} />
                            </Row>
                        </Col>
                    </div>
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
