'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation';

export function Header() {
    // const currentUser = useContext(CurrentUser);
    const currentUser = '2'
    const pathname = usePathname()
    console.log(pathname)

    return (
        <nav className="navbar navbar-light">
            <div className="container">
                <Link className="navbar-brand" href="/" >
                    conduit
                </Link>
                <ul className="nav navbar-nav pull-xs-right">
                    <li className="nav-item">
                        <Link
                            className={`nav-link ${pathname == "/" ? "active" : ""}`}
                            href="/"
                        >
                            Home
                        </Link>
                    </li>
                    {currentUser == null ? (
                        <>
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${pathname == "/login" ? "active" : ""}`}
                                    href="/login"
                                >
                                    Sign in
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${pathname == "/register" ? "active" : ""}`}
                                    href="/register"
                                >
                                    Sign up
                                </Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${pathname == "/editor" ? "active" : ""}`}
                                    href="/editor"
                                >
                                    <i className="ion-compose"></i>&nbsp;New Article{" "}
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${pathname == "/settings" ? "active" : ""}`}
                                    href="/settings"
                                >
                                    {" "}
                                    <i className="ion-gear-a"></i>&nbsp;Settings{" "}
                                </Link>
                            </li>
                            {/*<li className="nav-item">*/}
                            {/*    <Link*/}
                            {/*        prefetch="intent"*/}
                            {/*        className={`nav-link ${pathname.includes("/profile") ? "active" : ""}`}*/}
                            {/*        to={`/profile/${currentUser.username}`}*/}
                            {/*    >*/}
                            {/*        {currentUser.image && (*/}
                            {/*            <img*/}
                            {/*                width={25}*/}
                            {/*                height={25}*/}
                            {/*                src={currentUser.image}*/}
                            {/*                className="user-pic"*/}
                            {/*                alt=""*/}
                            {/*            />*/}
                            {/*        )}*/}
                            {/*        {currentUser.username}*/}
                            {/*    </Link>*/}
                            {/*</li>*/}
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
}