import Layout from '../components/Layout'
import Button from '@material-ui/core/Button'
import Router from 'next/router'

const AboutPage = () => {
  function goHome () {
    Router.push('/')
  }

  return (
    <Layout title="About | Next.js + TypeScript Example">
      <h1>About</h1>
      <p>This is the about page</p>
      <p>
        <Button onClick={goHome}>Go home</Button>
      </p>
    </Layout>
  )
}

export default AboutPage
