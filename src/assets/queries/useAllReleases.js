import { useStaticQuery, graphql } from "gatsby"


export function useAllReleases() {
  return useStaticQuery(graphql`
  query yQuery {
    allPlayerJson {
      edges {
        node {
          MLD006 {
            player
            title
            author
            content
          }
          MLD005 {
            player
            title
            author
            content
          }
          MLD004 {
            player
            title
            author
            content
          }
          MLD003 {
            player
            title
            author
            content
          }
          MLD002 {
            player
            title
            author
            content
          }
          MLD001 {
            player
            title
            author
            content
          }
          podcast_1 {
            player
            title
            author
            content
          }
          podcast_2 {
            player
            title
            author
            content
          }
          podcast_3 {
            player
            title
            author
            content
          }
          podcast_4 {
            player
            title
            author
            content
          }
          podcast_5 {
            player
            title
            author
            content
          }
          podcast_6 {
            player
            title
            author
            content
          }
          podcast_7 {
            player
            title
            author
            content
          }
        }
      }
    }
  }`);


}