import React from "react";
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout/Layout";
import './main.global.css'
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";
import { Dropdown } from "./shared/Dropdown";
import { assignId, generateId } from "./utils/react/generateRandomIndex";

const LIST = [
  { value: 'one' },
  { value: 'two' },
  { value: 'three' },
].map(generateId)

function AppComponent() {
  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
      </Content>
      <Dropdown onClose={() => console.log('close')} onOpen={() => console.log('open')} isOpen={false} button={<button>test</button>}>
        <CardsList />
      </Dropdown>
    </Layout>
  )
}

export const App = hot(AppComponent)