import Link from 'next/link'
import Layout from '../components/Layout'
import Button from '@material-ui/core/Button'
import '../styles/main.module.scss'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <Button>About</Button>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
