


const BlogCard = ({ blog }) => {
  const { img, title, date, post } = blog;

  return (
    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 margin">
      <div class="news-box">
        <figure>
          <img
            src={img}
            alt="img"
          />
        </figure>
        <h3>{title}</h3>
        <span> {date}</span><span>Comment</span>
        <p>
          {post}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;