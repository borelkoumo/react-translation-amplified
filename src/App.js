import React, { useState } from 'react';
import './App.css';

/* From Amplify */
import { Predictions } from 'aws-amplify'

/* From ANT Design */
import 'antd/dist/antd.css';
import { Button, Form, Input, Layout, Typography, Divider } from 'antd'
import { CommentOutlined } from '@ant-design/icons';
const { Header, Footer, Content } = Layout;
const { TextArea } = Input;
const { Paragraph } = Typography;

function App() {
  const [sourceText, setSourceText] = useState('Bonjour');
  const [targetText, setTargetText] = useState('Exemple : Bonjour le monde');
  //debugger
  const [componentSize] = useState('large');
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 32,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 14,
      span: 32,
    },
  };

  function translate() {
    Predictions.convert({
      translateText: {
        source: {
          text: sourceText,
          // language : "es" // defaults configured on aws-exports.js
        },
        // targetLanguage: "en"
      }
    }).then(result => {
      console.log(targetText);
      console.log(sourceText);
      setTargetText(result.text)
      //debugger
      setTargetText(result.text)
      //debugger
      setSourceText(result.text)
      debugger
    })
      .catch(err => {
        alert(JSON.stringify(err, null, 2))
        //return setTargetText(JSON.stringify(err, null, 2))
      })
  }

  return (
    <Layout>
      <Header className="App-header">Header</Header>
      <Content className="App-content">
        <Form className="App-form"
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          size={componentSize}
        >
          <Form.Item
            label="Texte source"
            name="sourceText"
            rules={[
              {
                required: true,
                message: 'Veuillez saisir un texte à convertir',
              },
            ]}
          >
            <TextArea rows={4} onChange={e => setSourceText(e.target.value)} value={sourceText} />
          </Form.Item>

          <Form.Item
            name="targetText"
          // hidden={true}
          >
            <Divider orientation="Texte converti">Left Text</Divider>
            <Paragraph copyable>{targetText}</Paragraph>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" icon={<CommentOutlined />} onClick={() => translate()}>
              Translate
            </Button>
          </Form.Item>
        </Form>
      </Content>
      <Footer>Footer target text </Footer>
    </Layout>
  );
}

export default App;
