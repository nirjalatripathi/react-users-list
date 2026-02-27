import {useState} from "react";
export default function Assignment4() {
    const [books, setBooks]= useState([
        {id:1, title:"React Basics"},
        {id:2, title:"JavaScript Advanced"}

    ]);
    const deleteBook=(id)=> {
        setBooks(prev => prev.filter(book => book.id !==id));
    };
    return (
        <div> 
        <h1> Book List</h1>
        <h3> Total Books: {books.length} </h3>
        {books.map(book => (
            <div key={books.id}>
                <p> {book.title}</p>
                <button onClick={()=> deleteBook(book.id)} > Delete</button>

            </div>
        ))}
</div>    
);
}