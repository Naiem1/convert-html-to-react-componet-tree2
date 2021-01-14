import PageTitle from '../../components/PageTitle';
import data from '../../Data';
import BlogCard from '../../components/BlogCard';




const BlogPage = () => {
  return (
    <div>
      {/*  TITLE PAGE */}
      <PageTitle title='Blog'/>
      
      {/* LATEST NEWS */}
      <div className="Lastestnews blog">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <span>
                  {data.blog.desc1} <br />
                  {data.blog.desc2}
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            {
              data.blog.post.map(post => (
                <BlogCard blog={post}/>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;