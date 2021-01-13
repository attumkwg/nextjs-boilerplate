import Link from 'next/link'
import Layout from '../components/Layout'
import Button from '@material-ui/core/Button'

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <Button>Go home</Button>
      </Link>
    </p>
  </Layout>
)

export default AboutPage
