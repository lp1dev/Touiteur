export interface Message {
    id?: number,
    author: string,
    avatar?: string,
    content: string,
    date: any,
    type: number
}
export const Mock = [
    {
        "id": 0,
        "author": "Joe",
        "content": "Hey ! How are you? #whatsup?",
        "date": "2017-12-05",
        "avatar": "https://www.w3schools.com/howto/img_avatar.png",
        "type": 0
    },
    {
        "id": 1,
        "author": "Richard S.",
        "content": "Emacs FTW #FSF",
        "date": "2017-12-05",
        "avatar": "https://pbs.twimg.com/profile_images/561116211258220544/FlICmGnj.jpeg",
        "type": 0
    },
    {
        "id": 2,
        "author": "Jim",
        "content": "Be the Jim to my Pam, not the Toby to my Michael.",
        "date": "2017-12-05",
        "avatar": "https://pbs.twimg.com/profile_images/3171824697/ef75d90df2e65ce326acf30262df5918_400x400.jpeg",
        "type": 0
    },
    {
        "id": 3,
        "author": "Michael",
        "content": "Coming soon... That's what she said",
        "date": "2017-12-05",        
        "image": "https://upload.wikimedia.org/wikipedia/en/a/af/Threat-Level-Midnight.jpg",
        "avatar": "https://upload.wikimedia.org/wikipedia/en/d/dc/MichaelScott.png",
        "type": 1
    }
]
