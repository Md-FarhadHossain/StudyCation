import React from 'react'

const BlogContent = ({title, description}) => {
  return (
    <div>
        <div className="container mx-auto">
        {/* Question number 1 */}
        <div>
          <div className="mockup-window border border-base-300 my-8">
            <div className="flex flex-col justify-center px-4 py-16 border-t border-base-300">

              <h1 className="text-3xl font-semibold mb-3">{title}</h1>

              <p>{description}</p>
                
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogContent