const userLeft = false;
const userWatchingVideo = false;

let promise = new Promise((resolve, reject) => {

    if (userLeft) {
        resolve ({
            name: 'User Left',
            message: ':('
        })
    }
    else if (userWatchingVideo) {
        reject ({
            name: 'User',
            message: 'Watching Movie'
        })
    }
    else {
        resolve ("User is watching")
    }
})






