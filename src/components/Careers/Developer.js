import React from 'react'
import './CareerStyle/CardStyle.scss'

import { StaticQuery, graphql, Link } from 'gatsby'

const developer = () => {

  return (
    <div className='card-group row'>
      <StaticQuery query={graphql`
        
        {
  allWordpressWpCareer {
    edges {
      node {
        title
        content
        excerpt
        slug
        categories {
          name
        }
        featured_media {
          source_url
        }
      }
    }
  }
} 
 `  } render={props => (
          props.allWordpressWpCareer.edges.map(item => {

            const arr = [...item.node.categories.map(items => items.name)]

            console.log('emriiiiiiiiiiiiiiarrdevvvvvvvvvvvvv', arr)




            if (arr[0] === 'Developer' || arr[1] === 'Developer' || arr[2] === 'Developer') {


              return (
                <div class="col-md-4 mb-4" key={item}>
                  <div className='border-card card mx-auto'>
                    <img className='w-100' src={item.node.featured_media.source_url} alt='thumbnail' />
                    <div class="card-body">
                      <h3 className='card-title'> {item.node.title}</h3>
                      <div className='py-1' dangerouslySetInnerHTML={{ __html: item.node.excerpt }} />
                      <Link to={`/career/${item.node.slug}`}>Read more</Link>
                    </div>
                  </div>
                </div>
              )
            }
            else { return null }
          }

          )
        )}
      /></div>)


}

export default developer