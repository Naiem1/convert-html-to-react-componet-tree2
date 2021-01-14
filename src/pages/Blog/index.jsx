import PageTitle from '../../components/PageTitle';
import data from '../../Data';
import BlogCard from '../../components/BlogCard';




const BlogPage = () => {
  return (
    <div>
      {/*  TITLE PAGE */}
      <PageTitle title='Blog'/>
      
      {/* LATEST NEWS */}
      <div class="Lastestnews blog">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="titlepage">
                <span>
                  {data.blog.desc1} <br />
                  {data.blog.desc2}
                </span>
              </div>
            </div>
          </div>
          <div class="row">
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