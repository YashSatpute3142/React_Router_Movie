import { NavLink, useNavigate, useRouteError } from "react-router-dom"

export const ErrorPage = () => {

    const error = useRouteError();
    const navigate = useNavigate();


    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <section className="error-section">
            <div className="error-text">
                <figure>
                    <img src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif" alt="404 page" />
                </figure>
                <div className="text-center">
                    <p className="p-a">The Page you where lokking for could not be found</p>
                    <p className="p-b">...Back to previous page</p>
                </div>
            </div>
            {/* <NavLink to = "/" className="erbtn">
              GO Back TO Home Page
            </NavLink> */}
            <button className="erbtn" onClick={handleGoBack}>
               GO Back  
            </button>
        </section>
    )
}