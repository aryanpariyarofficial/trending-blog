import React from 'react'
import './AddBlog.css'
const AddBlog = () => {
  return (
    <div className='containerr'>

        <form action="" className="addBlog">
            <h3>Express your Knowledge</h3>
            <hr />
          
            <div className="formgroup">
                <label htmlFor="">User Name</label>
                <input type="text" name='userName' className='userName' placeholder='Enter your username' />
            </div>
            <div className="formgroup">
                <label htmlFor="">User Avatar</label>
                <input type="text" name='userAvatar' className='userAvatar' placeholder='Enter user avatrar link' />
            </div>
            <div className="formgroup">
                <label htmlFor="">Blog Title</label>
                <input type="text" name='blogTitle' className='blogTitle' placeholder='Enter Blog Title' />
            </div>
            <div className="formgroup">
                <label htmlFor="">Blog Description</label>
                <textarea type="text" name='blogDescription' className='blogDescription' placeholder='Enter Blog Description' />
            </div>
            <div className="formgroup">
                <label htmlFor="">Blog Category</label>
                <input type="text" name='blogCategory' className='blogCategory'  placeholder='Enter Blog Category'/>
            </div>
            <div className="formgroup">
                <label htmlFor="">Blog Cover Image</label>
                <input type="text" name='blogCoverImage' className='blogCoverImage' placeholder='Enter blog category image link'/>
            </div>
            <div className="formgroup">
                <button className="btn btnclass">Submit</button>
                </div>
        </form>
    </div>
  )
}

export default AddBlog