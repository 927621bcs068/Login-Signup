import './Dashboard.css'

const Dashboard=()=>{
    return(
        <>
            <div className='navbar'>
                <div className='name'>
                    <p>Data</p>
                </div>
                <ul>
                    <li><a href="/profile">Profile</a></li>
                    <li><a href="/">Singout</a></li>
                </ul>
                
            </div>
        </>
    )
}

export default Dashboard