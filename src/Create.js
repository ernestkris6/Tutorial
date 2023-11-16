import { useState } from "react";

const Create = () => {

    const [title, setTitle] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return ( 
        <div className="create">
            <h2>
                Add a New Blog</h2>

            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input 
                type="text"
                required
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
                />

            <label>Blog body</label>
                <textarea>
                    required
                </textarea>

                <label>Blog author:</label>
                <select>
                    <option value="Mario">Mario</option>
                    <option value="Yoshi">Yoshi</option>
                </select>

                <button>Add Blog</button>
                <p>{title}</p>
            </form>
        </div>
     );
}
 
export default Create;