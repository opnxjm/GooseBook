import './SignUp.css';
import { useState } from 'react';
function Signup(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSignup = (event) => {
      event.preventDefault();
      // handle signup logic here
    }
  
    return (
        <div>
            <h1 className='sh'>GooseBook</h1>
            <form onSubmit={handleSignup}>
                <div className='info'>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                    <button type="submit">Sign up</button>
                </div>
            </form>
        </div>
    );
}
export default Signup;