export const goToLogin = (navigator) => {
    navigator("/login");
}

export const goToSignup = (navigator) => {
    navigator("/signup");
}

export const goToFeed = (navigator) => {
    navigator("/feed");
}
export const goToPostById = (navigator, id) => {
    navigator(`/feed/post/${id}`);
}