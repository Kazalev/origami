const getNavigation = (userid) => {

    const links = [
        {
            title: "Publications",
            link: "/"
        },
        {
            title: "Share your thoughts",
            link: "/share"
        },
        {
            title: "Profile",
            link: `/profile${userid}`
        },
        {
            title: "Login",
            link: "/login"
        },
        {
            title: "Register",
            link: "/register"
        }
    ]

    return links
}

export default getNavigation