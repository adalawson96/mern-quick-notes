import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav>
            <Link to="/notes">All Notes</Link>
            &nbsp; | &nbsp;
            <Link to="/notes/new"> New Note</Link>
            &nbsp; &nbsp;
        </nav>
    );
}