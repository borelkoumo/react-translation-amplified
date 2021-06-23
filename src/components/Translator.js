import React from 'react'
import '../styles/Translator.css'


/* From ANTD */
import 'antd/dist/antd.css';
import { Layout, Row, Col, Divider, Space, Select, Button, Input, Image, } from 'antd';
import { ZhihuOutlined, SwapOutlined, CameraOutlined, AudioOutlined, AimOutlined } from '@ant-design/icons';
import { Typography } from 'antd';

/* From Amplify */
import { Predictions } from 'aws-amplify'

class Translator extends React.Component {
    constructor(props) {
        super(props);
        this.sourceText = 'Veuillez saisir un texte ...'
        this.targetText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        this.sourceLang = 'fr'
        this.targetLang = 'es'

        this.state = {
            sourceLang: this.sourceLang,
            sourceText: this.sourceText,
            targetText: this.targetText,
            targetLang: this.targetLang,
        };
    }

    componentDidMount() {

    }

    onChangeSource = (value) => {
        console.log(`selected source ${value}`);
        this.sourceLang = value;
    }
    onChangeTarget = (value) => {
        console.log(`selected target ${value}`);
        this.targetLang = value;
    }

    onBlur = () => {
        console.log('blur');
    }

    onFocus = () => {
        console.log('focus');
        this._translate()
    }

    onSearch = (value) => {
        console.log('search:', value);
    }

    _translate() {
        Predictions.convert({
            translateText: {
                source: {
                    text: this.state.sourceText,
                    language: this.sourceLang // defaults configured on aws-exports.js
                },
                targetLanguage: this.targetLang
            }
        }).then(result => {
            this.setState({
                targetText: result.text
            });
            //debugger
        })
            .catch(err => {
                alert(JSON.stringify(err, null, 2))
            })
    }

    _getLayout() {
        const { Header, Content, Footer } = Layout;
        const { Option } = Select;
        const { TextArea } = Input;
        const { Paragraph, Title, Text } = Typography;

        return (
            <Layout className="Translator-maincontainer">
                <Header className="Translator-header">
                    <Space>
                        <ZhihuOutlined style={{ fontSize: '5vh', color: '#08c' }} />
                        <Title level={3} style={{ color: 'tomato', }}>AWS Amplify</Title><br />
                    </Space>
                    <Text italic style={{ color: 'wheat' }} >Translator</Text>
                </Header>
                <Divider orientation='center'>Traduction</Divider>
                <Content className='Translator-content'>
                    <>
                        <Row>
                            <Col span={24} >
                                <div className='searchDiv'>
                                    <Select
                                        // defaultValue="fr"
                                        // bordered={false}
                                        showSearch
                                        style={{ width: 150 }}
                                        placeholder="Translate from"
                                        optionFilterProp="children"
                                        onChange={this.onChangeSource}
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
                                    <Button type="primary" shape="circle" size={'large'} icon={<SwapOutlined />} />
                                    <Select
                                        // defaultValue="es"
                                        // bordered={false}
                                        showSearch
                                        style={{ width: 150 }}
                                        placeholder="Translate to"
                                        optionFilterProp="children"
                                        onChange={this.onChangeTarget}
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
                        <Divider orientation="left"></Divider>
                        <Row>
                            <Col span={24}>
                                <TextArea placeholder={this.state.sourceText} rows={5} onChange={e => { this.setState({ sourceText: e.target.value }); this._translate() }} showCount allowClear maxLength={1000} />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24} >
                                <Paragraph copyable className="textStyle">{this.state.targetText} </Paragraph>
                            </Col>
                        </Row>
                    </>
                </Content>
                <Footer>
                    <Row>
                        <Col span={24}>
                            <div className="searchOptionsDiv">
                                <p style={{ width: '33%' }}>
                                    <CameraOutlined style={{ fontSize: '5vh', color: '#08c' }} /><br />
                                    <Text type="secondary">Photos</Text>
                                </p>
                                <p style={{ width: '33%' }}>
                                    <AudioOutlined style={{ fontSize: '5vh', color: '#08c' }} /><br />
                                    <Text type="secondary">Audio</Text>
                                </p>
                                <p style={{ width: '33%' }}>
                                    <AimOutlined style={{ fontSize: '5vh', color: '#08c' }} /><br />
                                    <Text type="secondary">Identification</Text>
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Paragraph className="footerStyle">Powered by : React - AWS Amplify - Ant Designs</Paragraph>
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
