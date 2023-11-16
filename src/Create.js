import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Mario');

    const [isPending, setIsPending] = useState(false);

    const navigate = useNavigate();

    
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author}

        setIsPending(true);

        setTimeout(()=>{
            fetch('  http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type" : "application/json"},
            body: JSON.stringify(blog)
            }).then(()=> {
                console.log('new blog added');
                setIsPending(false)
                navigate("/")
                
            });
        }, 1000)
      
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
                    <option value="Mayor">Mayor</option>
                </select>

                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Loading...</button>}
                
                              
            </form>
        </div>
     );
}
 
export default Create;