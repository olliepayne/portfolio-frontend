/** @jsx jsx */
import { jsx, Container, Box } from "theme-ui"
import Layout from "components/Layout"

const LearnPage = () => {
  return (
    <Layout>
      <main
        sx={{
          pt: "60px",
          flex: "1 auto"
        }}
      >
        <section>
          <Box
            sx={{
              width: "300px",
              height: "70px",
              py: 2,
              px: 3,
              borderRadius: "8px",
              bg: "codeSnippet"
            }}
          >
            <code
              sx={{
                fontSize: 1
              }}
            >
              import * as React from "react"
            </code>
          </Box>
        </section>
      </main>
    </Layout>
  )
}

export default LearnPage
