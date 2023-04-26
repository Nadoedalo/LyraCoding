import Head from 'next/head';
import { ToolBar, Workspace } from "../components/ui";
import { Component } from "react";

export default class Main extends Component<any, any>{
  render() {
      return <>
          <Head>
              <title>Lyra Solar Coding Challenge</title>
              <link rel="icon" href="/favicon.png" />
          </Head>

          <main>
              <ToolBar />
              <Workspace />
          </main>
      </>
  }
}
