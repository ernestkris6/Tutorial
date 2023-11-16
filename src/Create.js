import { useState } from "react";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Mario');

    
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
                onChange={(e)=>setTitle(e.target.value)}
                
                />

            <label>Blog body</label>
                <textarea 
                value={body}
                onChange={(e)=>setBody(e.target.value)}
                >
                    required
                </textarea>

                <label>Blog author:</label>
                <select 
                value={author}
                onChange={(e)=> setAuthor(e.target.value)}                
                >
                    <option value="Mario">Mario</option>
                    <option value="Yoshi">Yoshi</option>
                    <option value="Ernest">Ernest</option>
                </select>

                <button>Add Blog</button>
                              
            </form>
        </div>
     );
}
 
export default Create;