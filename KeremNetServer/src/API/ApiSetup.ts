import { InMemoryStorage } from "../Storage/mamas-storage";
export const apiSetup = (storage: InMemoryStorage) => {
    const newUser = storage.create("users", {
        userName: "reqASDF",
        posts: [],
        createAt: new Date(),
    });
    storage.create("users", {
        userName: "asdf3",
        posts: [],
        createAt: new Date(),
    });
    console.log(newUser.id);
    
    const postId = storage.create("posts", {
        userName: "reqASDF",
        content: "reqASD234FSDF",
        date: "3.3.3",
        likes: 0,
        comments: []
    });
    const user = storage.find("users", (item: any) => item.userName == "reqASDF");
    if (user.length > 0) {
        user[0].posts.push(postId);
        console.log("Created the post");

    }
}