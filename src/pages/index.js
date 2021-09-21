import * as React from "react"
import '../components/home/styles.scss'
import Layout from '../components/common/Layout'
import PaperBox from "../components/common/PaperBox"
import Txt from '../components/common/Txt'

const IndexPage = () => {
  return (
    <Layout>
      <div className='home'>
        <PaperBox lines={10} className='title-container'>
          <Txt color='black' font='primary' style={{fontSize: 64}}>
            Hi, I'm Dominik
          </Txt>
        </PaperBox>
      </div>
    </Layout>
  )
}

export default IndexPage
