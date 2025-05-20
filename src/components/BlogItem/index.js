// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails

  return (
    <li className="blog-item">
      <div className="details-container">
        <h1 className="head">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="desc">{description}</p>
    </li>
  )
}

export default BlogItem
