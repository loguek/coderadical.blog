/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import "./bio.css"
import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 65, height: 65) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      logo: file(absolutePath: { regex: "/logo.png/" }) {
        childImageSharp {
          fixed(width: 83, height: 23) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          title
          blurb,
          author {
            name
          }
        }
      }
    }
  `)

  const { author, blurb, title } = data.site.siteMetadata
  return (
    <bio
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        fadeIn={false}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `72%`,
        }}
      />

      <div style={{ padding: '0', margin: '0' }}>
      <Image
        fixed={data.logo.childImageSharp.fixed}
        alt={title}
        fadeIn={false}
        style={{ display: `box` }}
      />
      
      <h2>
        Personal site of {author.name}
      </h2>
      <h3>
        {blurb}
      </h3>
      </div>
    </bio>
  )
}

export default Bio
