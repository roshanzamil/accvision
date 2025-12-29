import Image from "next/image";

const BlogDetails1 = ({ blog }) => {
  if (!blog) {
    return null;
  }
  return (
    <section className="blog__area-6 blog__animation">
      <div className="container g-0 line pt-110 pb-110">
        <span className="line-3"></span>
        <div className="row">
          <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
            <div className="blog__content">
              <h1 className="blog__title">{blog.title}</h1>
              <div className="blog__meta">
                <span>{blog.date}</span> | <span>{blog.category}</span>
              </div>
              <div className="blog__img-wrapper">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={850}
                  height={560}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="blog__text">
                <p>{blog.content.introduction}</p>
                {blog.content.points.map((point, index) => (
                  <div key={index}>
                    <h2>{point.title}</h2>
                    <p>{point.text}</p>
                  </div>
                ))}
                <p>{blog.content.conclusion}</p>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
            {/* Sidebar can be added here if needed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails1;
